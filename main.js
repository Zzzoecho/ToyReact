import {createElement, Component, render } from "./toy-react";

class My extends Component {
    render() {
        return (
            <div>
                <h4>This is My Component</h4>
                {this.children}
            </div>
        )
    }
}

const dom = <My className='title'>
    <h2>hello world</h2>
    <span>hi</span>
</My>

console.log(dom)

render(dom, document.body)