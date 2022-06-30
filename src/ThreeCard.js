import React, { Component } from 'react';
import CTA from './CTA';
import suvSVG from './images/icon-suvs.svg';
import sedansSVG from './images/icon-sedans.svg';
import luxurySVG from './images/icon-luxury.svg';


class ThreeCard extends Component {
  render() {
    return (
      <div class="three-card-row">
        <div class="card sedan">
          <img src={sedansSVG} alt="Sedans" />
          <h3 class="vehicle-type">Sedans</h3>
          <p>
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
          </p>
          <CTA />
        </div>
        <div class="card suv">
          <img src={suvSVG} alt="SUVs" />
          <h3 class="vehicle-type">SUVs</h3>
          <p>
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation or offroad adventures.
          </p>
          <CTA />
        </div>
        <div class="card luxury">
          <img src={luxurySVG} alt="Luxury" />
          <h3 class="vehicle-type">Luxury</h3>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <CTA />
        </div>
      </div>
    )
  }
}

export default ThreeCard; // Don’t forget to use export default!