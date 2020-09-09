

/**
 * 创建Dom元素
 * @param type
 * @param {object} attr 属性
 * @param children
 * @returns {*}
 */
export function createElement(type, attr, ...children) {
    console.log('create', type, attr, children)
    debugger
    let e = document.createElement(type)

    for (const key in attr) {
        e.setAttribute(key, attr[key])
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child)
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
    root.appendChild(ele)
}
