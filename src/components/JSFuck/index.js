import React from 'react';
import "xandelier/Xandelier.js";
import "xandelier/Xandelier.JSFuck.js";

import './index.css';

export default () =>
    (<div>
        <p>
            JSFuck is an esoteric programming style of JavaScript,
            where code is written using only six characters:
            <code> []()!+ </code>
            The name is derived from Brainfuck, an esoteric programming
            language which also uses a minimalistic alphabet of only punctuation.
        </p>
        <div style={{ textAlign: 'left' }}>
            <h4>Examples</h4>
            <code>false     ![]</code><br />
            <code>true      !![] or !+[]</code><br />
            <code>NaN       +[![]]</code><br />
            <code>undefined [][[]]</code><br />
            <code>0	        +[]</code><br />
            <code>1	        +!![] or +!+[]</code><br />
            <code>10	    +([+!![]]+[+[]])</code><br />
        </div>
        <a href="https://en.wikipedia.org/wiki/JSFuck">more</a>
    </div>);