import React, { Component } from 'react';
import transformImage from './images/desktop/image-transform.jpg';

class AlternatingImages extends Component {
  render() {
    return (
      <div class="alternating-images">
        <div class="alternating-block content">
          <div>
            <h2>
              Transform your brand
            </h2>
            <p>
              We are a full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a></a>
          </div>
        </div>
        <div class="alternating-block transform-image"></div>
        <div class="alternating-block">Image</div>
        <div class="alternating-block">Text</div>
      </div>
    )
  }
}

export default AlternatingImages; // Don’t forget to use export default!