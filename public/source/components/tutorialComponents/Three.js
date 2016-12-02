import React from 'react';

const Three = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Three</h2>
      <h3 className="tutorial-header">Editing Source Data</h3>
      <p className="tutorial-text"> Hooray! We have a source now! Let's go head and give it the name "Customers." To do this, double click on the source and type the new name. Next, we're going to have to edit the source, to define the rate at which customers enter.</p>
      <img className="tutorial-image" src="http://i.imgur.com/7nxYz1D.png"/>
      <p className="tutorial-description">Example source data</p>
      <p className="tutorial-text">To edit the source data, right click on the source or click on the source and press ctrl+m. For this simulation, we'll say that the customers come in at a uniform rate between 1 and 5 minutes. You can find more information about delays and the possible delay rates in our docs.</p>

    </div>
  );
}
export default Three;
