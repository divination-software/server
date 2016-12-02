import React from 'react';

const Eight = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Eight</h2>
      <h3 className="tutorial-header">Editing Process Data Pt 2</h3>
      <p className="tutorial-text">We're going to make this process a type of "Sieze Delay Release." This means that the process will grab a resource, wait with that resource, and then release the resource once the delay is over.</p>
      <img className="tutorial-image" src="http://cdn.pcwallart.com/images/cute-bernese-mountain-dog-puppies-wallpaper-1.jpg"/>
      <p className="tutorial-description">Current Graph Example</p>
      <p className="tutorial-text">In our simulation, let's select the "Teller" resource. This means that in our simulation, a customer will "sieze" a Teller, and the Teller won't be able to help anyone else until they have finished dealing with their current customer.</p>

    </div>
  );
}
export default Eight;
