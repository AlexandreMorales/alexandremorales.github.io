import React from 'react';

import './index.css';

export default ({ text }) =>
    (<div>
        <label class="container">{text}
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
    </div>)