import {createElement, Component, render } from "./toy-react";

class My extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 3
        }
    }

    handleClick() {
        this.setState({
            a: this.state. a + 1
        })
    }

    render() {
        return (
            <div>
                <h4>This is My Component</h4>
                <button onClick={() => this.handleClick()}>add</button>
                <span>  {this.state.a.toString()}</span>
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