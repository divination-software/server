import React from 'react';

const Nine = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Nine</h2>
      <h3 className="tutorial-header">Editing Process Data Pt 3</h3>
      <p className="tutorial-text">Let's now set the time it takes to help a customer. Let's make the delay a triangular distribution with a min of 1, a mid of 3, and a max of 10</p>
      <img className="tutorial-image" src="http://i.imgur.com/8JidrHt.png"/>
      <p className="tutorial-description">Process Data</p>
      <p className="tutorial-text">This means that most customers will take around 3 minutes but some customers may take more or less time. If all of the Tellers are siezed, then the customers will enter a queue and wait for the next available Teller.</p>

    </div>
  );
}
export default Nine;
