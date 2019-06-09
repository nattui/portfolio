import React from 'react';

import logo from '../resources/logo.png';
import iconGithub from '../resources/social-github-icon.png';

class Header extends React.Component {
  render() {
    return (
      <header id="navbar">
        <div id="navbar-main">
          <a id="navbar-brand" href="#main">
            <img src={logo} alt="Nhat Nguyen's Logo" />
          </a>
          <div id="navbar-info">
            <h2>Nhat Nguyen</h2>
            <span>Software Developer</span>
          </div>
          <a id="navbar-toggle" href="https://github.com/nguyen-nhat">
            <img src={iconGithub} alt="GitHub's mark logo leds to Nhat's GitHub profile" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
