import React from 'react';
import Rocket from './rocket';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const {rocketStore} = useSelector((store) => store.rocket)
  return(
  <div className="rockets">
    {rocketStore.map( (rocket) => { return <Rocket key = {rocket.id} {...rocket} />;})}
  </div>
)};

export default Rockets;
