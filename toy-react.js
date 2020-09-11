// 渲染组件
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }

    // 注意传入参数 和 实际渲染的是 component.root
    appendChild(component) {
        if (Array.isArray(component)) {
            component.forEach(comp => {
                this.root.appendChild(comp.root)
            })
        } else {
            this.root.appendChild(component.root)
        }
    }
}

// 渲染文本
class TextWrapper {
    constructor(string) {
        this.root = document.createTextNode(string)
    }
}

// 为了组件不用每次手动实现setAttribute 或 appendChild
export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
        this._root = null
    }

    setAttribute(name, value) {
        this.props[name] = value
    }

    appendChild(component) {
        this.children.push(component)
        // this.children.appendChild(component)
    }

    // 当 appendChild 被调用，传参 component.root 时会被调用
    get root() {
        if (!this._root) {
            console.log('root', this.render().root)
            // this.render() 是自定义组件自己一定会实现的方法
            this._root = this.render().root
        }
        return this._root
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
    console.log('create', type, attr, children)
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
    children.forEach(child => {
        if (typeof child === 'string') {
            child = new TextWrapper(child)
        }
        e.appendChild(child)
    })
    return e
}

/**
 * 渲染
 * @param ele createElement 生成的dom
 * @param root 挂载的目标dom
 */
export function render(ele, root) {
    console.log('render', ele)
    root.appendChild(ele.root)
}
