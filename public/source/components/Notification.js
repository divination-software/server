import React from 'react';

const Notification = ({ click }) => (
  <div className='notification' onClick={e => click() }>
    <p>Click to View Simulation Results!</p>
  </div>
);

export default Notification;
