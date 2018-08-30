import React from 'react';
import PropTypes from 'prop-types';

function Months(props){
  return (
    <div>
      <h4>{props.month}</h4>
      <div className='row'>
        {props.selection.map((crop, index) =>
          <div className='col-3' key={index}>{crop}</div>
        )}
      </div>
    </div>
  );
}

Months.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  selectionIndex: PropTypes.number
};

export default Months;
