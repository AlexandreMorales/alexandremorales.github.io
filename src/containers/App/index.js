import React, { Component } from 'react';
import logo from './logo.svg';
import SocialIcons from '../../components/SocialIcons';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="intro">Hi, I'm Alexandre</div>
        <div className="sub-intro">and welcome to my page</div>
        <div className="tagline">Full Stack Developer | Functional Programming Defensor | Musician | Level 50 Bosmer</div>
        <SocialIcons />
      </div>
    );
  }
}

export default App;
