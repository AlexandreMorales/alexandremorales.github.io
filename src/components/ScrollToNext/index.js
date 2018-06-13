import React, { Component } from 'react';

import './style.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    // scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="arrow bounce">
          <div className="scroll-text">Click Me</div>
          <button className="fa fa-chevron-down fa-2x" href="#" />
        </div>
      </div>
    );
  }
}

export default ScrollToNext;
