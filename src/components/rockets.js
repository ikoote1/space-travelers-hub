import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from './rocket';

const Rockets = () => {
  const { rocketStore } = useSelector((store) => store.rocket);
  return (
    <div className="rockets">
      {rocketStore.map((rocket) => <Rocket key={rocket.id} {...rocket} />)}
    </div>
  );
};

export default Rockets;
