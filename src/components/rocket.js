import React from 'react';
import rocket1 from '../images/rocket1.jpg';

const Rocket = ({id,title,description}) => (
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

export default Rocket;
