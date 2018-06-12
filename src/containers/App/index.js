import React, { Component } from 'react';
import Introduction from '../../components/Introduction';
import SocialIcons from '../../components/SocialIcons';

import logo from './logo.svg';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="logo" />
        <Introduction />
        <SocialIcons />
      </div>
    );
  }
}

export default App;