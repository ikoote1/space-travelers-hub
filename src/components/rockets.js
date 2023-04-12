import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './rocket';
import { getRockets } from '../features/rockets/rocketsSlice';

const Rockets = () => {
  const { rocketStore, isLoading } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  if (isLoading) {
    return (
      <div><h1>Loading...</h1></div>
    );
  }

  return (
    <div className="rockets">
      {rocketStore.map((rocket) => (
        <Rocket
          key={rocket.id}
          image={rocket.flickr_images}
          name={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Rockets;
