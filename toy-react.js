const RENDER_TO_DOM = Symbol("render to dom")

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    // 如果 name 以 on 开头 加上事件监听
    setAttribute(name, value) {
        // [\s\S] 表所有内容
        if (name.match(/^on([\s\S]+)$/)) {
            // 将第一个字母替换成小写
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()), value)
        } else {
            // className -> class
            if (name === 'className') {
                this.root.setAttribute('class', value)
            } else {
                this.root.setAttribute(name, value)
            }
        }
    }

    appendChild(component) {
        let range = document.createRange()
        range.setStart(this.root, this.root.childNodes.length)
        range.setEnd(this.root, this.root.childNodes.length)
        component[RENDER_TO_DOM](range)
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents()
        range.insertNode(this.root)
    }
}

/**
 * 文本节点
 */
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }

    [RENDER_TO_DOM](range) {
        range.deleteContents()
        range.insertNode(this.root)
    }
}


export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
        this._root = null
        this._range = null
    }

    setAttribute(name, value) {
        this.props[name] = value
    }

    appendChild(component) {
        this.children.push(component)
    }

    [RENDER_TO_DOM](range) {
        this._range = range
        this.render()[RENDER_TO_DOM](range);
    }

    rerender() {
        // 先删后插入会引起bug，没有范围的 range 自动

        let oldRange = this._range

        // 创建一个新的 range，放在 oldRange 的start处，插入
        let range = document.createRange()
        range.setStart(oldRange.startContainer, oldRange.startOffset)
        range.setEnd(oldRange.startContainer, oldRange.startOffset)
        this[RENDER_TO_DOM](range)

        // 把oldRange 的start挪到end处，再删除
        oldRange.setStart(range.endContainer, range.endOffset)
        oldRange.deleteContents()
    }
    setState(newState) {
        // state 不存在 直接替换
        if (this.state === null || typeof this.state !== 'object') {
            this.state = newState
            this.rerender()
            return
        }

        let merge = (oldState, newState) => {
            for (let p in newState) {
                // 如果属性值是null 就直接赋值
                if(oldState[p] === null || typeof oldState[p] !== 'object') {
                    oldState[p] = newState[p]
                } else {
                    merge(oldState[p], newState[p])
                }
            }

        }
        merge(this.state, newState)
        this.rerender()
    }
}


/**
 * 创建Dom元素
 * @param type
 * @param {object} attr 属性
 * @param children
 * @returns {*}
 */
export function createElement(type, attr, ...children) {
    let e
    if (typeof type === 'string') {
        e = new ElementWrapper(type)
    } else {
        e = new type
    }
    for (let p in attr) {
        e.setAttribute(p, attr[p])
    }
    let insertChild = (children) => {
        for (let child of children) {
            if (typeof child === 'string') {
                child = new TextWrapper(child)
            }

            if (child === null) {
                continue
            }

            if (Array.isArray(child)) {
                insertChild(child)
            } else {

                e.appendChild(child)
            }
        }
    }
    insertChild(children)
    return e
}


export function render(component, parentElement) {
    let range = document.createRange()
    range.setStart(parentElement, 0)
    range.setEnd(parentElement, parentElement.childNodes.length)
    range.deleteContents()
    component[RENDER_TO_DOM](range)
}
