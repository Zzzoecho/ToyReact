import {createElement, render } from "./toy-react";

const dom = <div className='title'>
    <h2>hello world</h2>
    <span>hi</span>
</div>

console.log(dom)da t

render(dom, document.body)