import React from 'react';

import './index.css';

export default ({ children = [], component }) => {
    const slideWidth = 100 / children.length;

    return (
        <div className={"slider-container flexbox-slider"}>
            {children.map(slide => {
                const InnerComponent = slide.component;

                return (
                    <div key={slide.color} className={"flexbox-slide " + slide.className} style={{ background: slide.color, width: `${slideWidth}%` }}>
                        <div className="title">{slide.title}</div>
                        <div className="text-block">
                            <h3>{slide.title}</h3>
                            {slide.component && (<InnerComponent />)}
                        </div>
                    </div>);
            })}
        </div>);
}