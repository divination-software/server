import React from 'react';

const Two = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Two</h2>
      <h3 className="tutorial-header">Adding a Source</h3>
      <p className="tutorial-text">Currently, our simulation has nothing on it. First, we'll be adding a source. A source is a module that acts as the entry point of any entities into our simulation. In our case, these will be customers.</p>
      <img className="tutorial-image" src="http://i.imgur.com/9NNbVV4.png"/>
      <p className="tutorial-description">Modules | Source is top left</p>
      <p className="tutorial-text">To add a source to our simulation. Go to the modules on the top left of your screen. Find the source module. Then, drag and drop the source to the graph.</p>

    </div>
  );
}
export default Two;
