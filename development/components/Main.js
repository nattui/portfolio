import React from 'react';

import signature from '../resources/signature.png';
import iconlocation from '../resources/location-icon.png';


class Header extends React.Component {
  render() {
    const heroDescription = 'I am super-psyched that you are reading this! I am a software engineering student at San Jose State University, and Web Engineering Intern at Adobe.My talents and passions are my guide as I learn computer science and design theories in the next chapter of my career.🌟';
    return (
      <main id="main">
        <div id="hero">
          <div id="hero-content">

            <div id="hero-contact">
              <p>LinkedIn:</p>
              <a href="https://www.linkedin.com/in/nguyen-nhat/">nguyen-nhat</a>
            </div>

            <section>
              <h1>Hi! I'm Nhat, <span class="gradient">software developer</span>.</h1>
              <p>{heroDescription}</p>
              <img src={signature} alt="Signature" />
            </section>

            <div id="hero-location">
              <img src={iconlocation} alt="Location Icon" />
              <div>
                <p>Based In</p>
                <p class="uppercase"><b>San Jose, California</b></p>
              </div>
            </div>

          </div>
          <div id="hero-image"></div>
        </div>
      </main>
    );
  }
}

export default Header;
