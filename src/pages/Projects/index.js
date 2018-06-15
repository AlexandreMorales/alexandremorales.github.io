import React from 'react';
import ScrollTo from '../../components/ScrollTo';
import Slider from '../../components/Slider';

import './index.css';

export default () =>
    (<div className="projects">
        <ScrollTo page=".introduction" previous />
        <div className="projects-container">
            <div className="init">You are here for</div>
            <Slider
                children={[
                    {
                        title: 'Xandelier',
                        color: '#FFF000'
                    },
                    {
                        title: 'Xandernate',
                        color: '#5C2E91'
                    },
                    {
                        title: 'JS Fuck',
                        color: '#8D3B72', className:'test'
                    },
                    {
                        title: 'Music',
                        color: '#8A7090'
                    },
                    {
                        title: 'Poems',
                        color: '#89A7A7'
                    }
                ]}
            />
        </div>
    </div>);