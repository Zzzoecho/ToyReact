class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }

    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }

    appendChild(component) {
        this.root.appendChild(component.root)
    }
}

/**
 * 文本节点
 */
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
}


export function render(component, parentElement) {
    parentElement.appendChild(component.root)
}


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
    }
    // 真实的渲染过程
    get root() {
        if (!this._root) {
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
    let e
    if (typeof type === 'string') {
        e = new ElementWrapper(type)
    } else {
        e = new type
    }
    for (let p in attr) {
        e.setAttribute(p, attr[p])
    }
    for (let child of children) {
        if (typeof child === 'string') {
            child = new TextWrapper(child)
        }
        e.appendChild(child)
    }
    console.log(e)
    return e
}

