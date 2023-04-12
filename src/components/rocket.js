import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRockets, cancelRockets } from '../features/rockets/rocketsSlice';

const Rocket = ({ reserved, id, image, name, description }) => {
  const dispatch = useDispatch();

  const handleReserve = (rocketId) => {
    dispatch(reserveRockets(rocketId));
  }

  const handleCancel = (rocketId) => {
    dispatch(cancelRockets(rocketId));
  }

  return(
    <div className="rocket">
      <div className="rocketImage"><img src={image} alt="rocket" /></div>
      <div className="aboutR">
        <h1>{name}</h1>
        <p className="desc">
        {{reserved} && <span className="cheked">Reserved</span>}
          {' '}
          {description}
        </p>
        {{reserved} ? (
  <button className="cancel" type="button" onClick={() => handleCancel({id})}>
    Cancel Reservation
  </button>
) : (
  <button className="reserve" type="button" onClick={() => handleReserve({id})}>
    Reserve Rocket
  </button>
)}
      </div>
    </div>
  )
};




Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default Rocket;
