import React, { Component } from 'react';

import './index.css';

class ScrollTo extends Component {
  scrollTo() {
    const { page } = this.props;
    const nextPage = document.querySelector(page);

    if (nextPage)
      nextPage.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  }

  render() {
    const { previous } = this.props;
    return (
      <div className="scroll-to" onClick={(e) => this.scrollTo()}>
        <div className={`arrow bounce-${previous ? "up" : "down"}`}>
          <button className={`fa fa-chevron-${previous ? "up" : "down"} fa-2x`} href="#" />
        </div>
      </div>
    );
  }
}

export default ScrollTo;
