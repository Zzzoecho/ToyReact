import {createElement, render, Component } from "./toy-react";

// setAttribute 和 appendChild 非必须, 如果该组件没有修改 attr 或者 appendChild 的需求可以不写, 但要有个默认的函数

class MyComponent extends Component {
    render() {
        return <div>my component</div>
    }
}

render(<MyComponent class='title'>
    <h1>hello world</h1>
    <span>hi</span>
</MyComponent>)