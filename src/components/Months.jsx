import React from 'react';
import PropTypes from 'prop-types';

function Months(props){
  return (
    <div>
      <h4>{props.month}</h4>
      <ul>
        {props.selection.map((crop, index) =>
          <li key={index}>{crop}</li>
        )}
      </ul>
    </div>
  );
}

Months.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  selectionIndex: PropTypes.number
};

export default Months;
