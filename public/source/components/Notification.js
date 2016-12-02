import React from 'react';

const DataAlert = (props) => {
    const { click } = props;
    return (
      <div className='notification' onClick={e => click() }>
        <p>Click to View Simulation Results!</p>
      </div>);
};

export default DataAlert;
