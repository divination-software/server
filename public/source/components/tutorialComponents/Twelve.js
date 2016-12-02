import React from 'react';

const Twelve = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Twelve</h2>
      <h3 className="tutorial-header">Editing Decision Data</h3>
      <p className="tutorial-text">Decision data only has one data point, the "If" statement. In our case, we'll just enter ".10" to show that 1/10 customers need to see a manager</p>
      <img className="tutorial-image" src="http://i.imgur.com/iLZUtrl.png"/>
      <p className="tutorial-description">Decision Data</p>
      <p className="tutorial-text">If the customer is in that 10% of customers that need a manager, they'll be directed to the top edge, else they'll be directed to the bottom edge</p>

    </div>
  );
}
export default Twelve;
