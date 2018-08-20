import React, { Component } from 'react';
import Checkbox from "../Checkbox";
import "xandelier/build/Xandelier.JSFuck.js";

import './index.css';

class JSFuck extends Component {
    constructor() {
        super();
        this.state = {
            wrapWithEval: false,
            result: ""
        };
    }

    render() {
        return (
            <div className="jsfuck-container">
                <div>
                    JSFuck is an esoteric programming style of JavaScript,
                    where code is written using only six characters:
                    <code> []()!+ </code>
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/JSFuck">more</a>
                </div>
                <br />
                <div>
                    <div className="compiler">
                        <label>Put your code in here:</label>
                        <div>
                            <input ref="input" type="text" />
                            <button
                                onClick={() => {
                                    let result = window.JSFuck.Encode(this.refs.input.value, this.state.wrapWithEval);
                                    this.setState({ result });
                                }}>
                                Encode
                            </button>
                            <div className="checkbox">
                                <Checkbox
                                    text="Wrap with eval"
                                    onClick={checked => this.setState({ wrapWithEval: checked })}
                                />
                            </div>
                        </div>
                        <textarea className="result" readOnly value={this.state.result}></textarea>
                    </div>
                    <div className="examples">
                        <h4 className="examples-title">Examples</h4>
                        <table>
                            <tbody>
                                <tr><td>false</td><td><code>![]</code></td></tr>
                                <tr><td>true </td><td><code>!![]</code></td></tr>
                                <tr><td>NaN </td><td><code>+[![]]</code></td></tr>
                                <tr><td>undefined</td><td><code>[][[]]</code></td></tr>
                                <tr><td>0</td><td><code>+[]</code></td></tr>
                                <tr><td>1</td><td><code>+!![]</code></td></tr>
                                <tr><td>10</td><td><code>+([+!![]]+[+[]])</code></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>);
    }
}

export default JSFuck;