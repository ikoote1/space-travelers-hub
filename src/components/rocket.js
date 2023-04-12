import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ image, name, description }) => (
  <div className="rocket">
    <div className="rocketImage"><img src={image} alt="rocket" /></div>
    <div className="aboutR">
      <h1>{name}</h1>
      <p className="desc">{description}</p>
      <button type="button">Reserve Rocket</button>
      <button type="button">Cancel Reservation</button>
    </div>
  </div>
);

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
