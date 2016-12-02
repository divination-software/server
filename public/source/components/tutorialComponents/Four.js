import React from 'react';

const Four = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Four</h2>
      <h3 className="tutorial-header">Adding resources</h3>
      <p className="tutorial-text"> Now that we have customers coming in, we need to add some resources to our simulation. Resources can be things like workers or computers or anything that can be used! In our case, we'll make two resources, Tellers and Managers</p>
      <img className="tutorial-image" src="http://i.imgur.com/6Ef3IQz.png"/>
      <p className="tutorial-description">Resource Module</p>
      <p className="tutorial-text">To add a resource to the simulation, go to resources and drag it to the graph. Do this twice and name label them (double-click on them) as Tellers and Managers.</p>

    </div>
  );
}
export default Four;
