import React from 'react';
import ScrollTo from '../../components/ScrollTo';

import './index.css';

export default () =>
    (<div className="projects">
        <ScrollTo page=".introduction" previous />
        <div className="projects-container">
            <div className="init">You are here for</div>
        </div>
    </div>);