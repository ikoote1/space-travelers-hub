import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRockets, cancelRockets } from '../features/rockets/rocketsSlice';

const Rockets = () => {
  const { rocketStore, isLoading } = useSelector((store) => store.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rocketStore.length) {
      dispatch(getRockets());
    }
  }, [dispatch, rocketStore]);

  if (isLoading) {
    return (
      <div><h1>Loading...</h1></div>
    );
  }
  if(!rocketStore.length) {
    <div><h1>No rockets found</h1></div>
  }

  return (
    <div className="rockets">
      {rocketStore.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="rocketImage"><img src={rocket.flickr_images} alt="rocket" /></div>
          <div className="aboutR">
            <h1>{rocket.name}</h1>
            <p className="desc">
              { rocket.reserved && <span className="cheked">Reserved</span>}
              {' '}
              {rocket.description}
            </p>
            { rocket.reserved
            && (
            <button className="cancel" type="button" onClick={() => dispatch(cancelRockets(rocket.id))}>
              Cancel Reservation
            </button>
            )}

            {!rocket.reserved && (
            <button className="reserve" type="button" onClick={() => dispatch(reserveRockets(rocket.id))}>
              Reserve Rocket
            </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
