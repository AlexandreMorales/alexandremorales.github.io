import React from 'react';

import './index.css';

export default ({ text, onClick }) =>
    (<div>
        <label className="container">
            <input type="checkbox" onChange={event => onClick && onClick(event.target.checked)} />
            <span className="checkmark"></span>
            {text}
        </label>
    </div>)