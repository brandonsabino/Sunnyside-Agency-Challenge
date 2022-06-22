import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div class="header-container">
        <h2>sunnyside</h2>
        <ul class="nav-container">
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navigation; // Don’t forget to use export default!