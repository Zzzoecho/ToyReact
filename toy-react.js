const RENDER_TO_DOM = Symbol("render_to_dom")

// 渲染组件
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(name, value) {
        if (/^on([\s\S]*)$/.test(name)) {
            console.log('--on--', RegExp.$1, value)
            this.root.addEventListener(RegExp.$1.toLowerCase(), value)
        } else {
            this.root.setAttribute(name, value)
        }
    }

    // 注意传入参数 和 实际渲染的是 component.root
    appendChild(component) {
        // append 一定是放最后的
        let range = document.createRange()
        range.setStart(this.root, this.root.childNodes.length)
        range.setEnd(this.root, this.root.childNodes.length)
        component[RENDER_TO_DOM](range)
    }
    [RENDER_TO_DOM] (range) {
        range.deleteContents()
        range.insertNode(this.root)
    }
}

// 渲染文本
class TextWrapper {
    constructor(string) {
        this.root = document.createTextNode(string)
    }
    [RENDER_TO_DOM] (range) {
        range.deleteContents()
        range.insertNode(this.root)
    }
}

// 为了组件不用每次手动实现setAttribute 或 appendChild
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
        this.render()[RENDER_TO_DOM](range)
    }

    rerender() {
        let oldRange = this._range

        // 先插入再删除
        let range = document.createRange()
        // 插入的点是一个没有范围的点
        range.setStart(oldRange.startContainer, oldRange.startOffset)
        range.setEnd(oldRange.startContainer, oldRange.startOffset)
        // 先删除会引起一个bug， 全空的 range 会被下一个 range 吞进去
        this[RENDER_TO_DOM](range)

        // 将老的 range 的start移到range之后
        oldRange.setStart(range.endContainer, range.endOffset)
        oldRange.deleteContents()
    }

    setState(newState) {
        // 短路逻辑，state 不是对象说明值类型 可直接替换
        if (this.state === null || typeof this.state !== 'object') {
            this.state = newState
            this.rerender()
            return
        }
        let merge = (oldState, newState) => {
            for (const p in newState) {
                if (oldState[p] === null || typeof oldState[p] !== 'object') {
                    oldState[p] = newState[p]
                } else {
                    merge(oldState[p], newState[p])
                }
            }
        }

        merge(this.state, newState)
        this.rerender()
    }

    // 当 appendChild 被调用，传参 component.root 时会被调用
    // get root() {
    //     if (!this._root) {
    //         console.log('root', this.render().root)
    //         // this.render() 是自定义组件自己一定会实现的方法
    //         this._root = this.render().root
    //     }
    //     return this._root
    // }
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
    if (typeof type !== 'string') {
        e = new type
    } else {
        e = new ElementWrapper(type)
    }

    for (const key in attr) {
        if (key === 'className') {
            e.setAttribute('class', attr[key])
        } else {
            e.setAttribute(key, attr[key])
        }
    }
    let insertChildren = (children) => {
        children.forEach(child => {
            if (typeof child === 'string') {
                child = new TextWrapper(child)
            }
            if (Array.isArray(child)) {
                insertChildren(child)
            } else {
                e.appendChild(child)
            }
        })
    }
    insertChildren(children)

    return e
}

/**
 * 渲染
 * @param component createElement 生成的dom
 * @param parentElement 挂载的目标dom
 */
export function render(component, parentElement) {
    console.log('render', component)
    let range = document.createRange()
    range.setStart(parentElement, 0)
    range.setEnd(parentElement, parentElement.childNodes.length)
    range.deleteContents()
    component[RENDER_TO_DOM](range)
}
