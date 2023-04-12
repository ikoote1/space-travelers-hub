import React from 'react';
import PropTypes from 'prop-types';
import rocket1 from '../images/rocket1.jpg';

const Rocket = ({ title, description }) => (
  <div className="rocket">
    <div className="rocketImage"><img src={rocket1} alt="rocket" /></div>
    <div className="aboutR">
      <h1>{title}</h1>
      <p className="desc">{description}</p>
      <button type="button">Reserve Rocket</button>
      <button type="button">Cancel Reservation</button>
    </div>
  </div>
);

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
