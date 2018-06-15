import React from 'react';

import './index.css';

export default ({ children = [] }) => {
    const slideWidth = 100 / children.length;

    return (
        <div className={"slider-container flexbox-slider test"}>
            {children.map(slide =>
                (<div className={"flexbox-slide " + slide.className} style={{ background: slide.color, width: `${slideWidth}%` }}>
                    <div className="title">{slide.title}</div>
                    <div className="text-block">
                        <h3>{slide.title}</h3>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                        </div>
                    </div>
                </div>))}
        </div>);
}