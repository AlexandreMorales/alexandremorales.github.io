import React from 'react';
import SocialIcons from '../../components/SocialIcons';
import ScrollTo from '../../components/ScrollTo';

import './index.css';

import logo from './logo.svg';

export default () =>
    (<div className="introduction">
        <div className="introduction-container">
            <img src={logo} className="logo" alt="logo" />
            <div className="intro">Hi, I'm Alexandre</div>
            and welcome to my page
            <div className="tagline">Full Stack Developer | Functional Programming Defensor | Musician | Level 70 Bosmer</div>
            <SocialIcons />
        </div>
        <ScrollTo page=".projects" />
    </div>);