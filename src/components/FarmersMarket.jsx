import React from 'react';
import PropTypes from 'prop-types';

function FarmersMarket(props){
  return (
    <div className='col-sm-2'>
      <h5>{props.day}</h5>
      <p>{props.hours}<br/>
        {props.location}<br/>
      Booth: {props.booth}</p>
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
