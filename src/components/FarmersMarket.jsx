import React from 'react';
import PropTypes from 'prop-types';

function FarmersMarket(props){
  return (
    <div>
      <h3>{props.day}</h3>
      <ul>
        <li>{props.location}</li>
        <li>{props.hours}</li>
        <li>{props.booth}</li>
      </ul>
    </div>
  );
}

FarmersMarket.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default FarmersMarket;
