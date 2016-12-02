import React from 'react';

const Five = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Five</h2>
      <h3 className="tutorial-header">Editing Resource Data</h3>
      <p className="tutorial-text">Now we need to edit our resources. Resources can be edited just like sources can (as with every module). As a reminder, you can do this by right clicking on the resource and clicking "Edit Data" or by pressing Ctrl+m.</p>
      <img className="tutorial-image" src="http://i.imgur.com/nKDd3xq.png"/>
      <p className="tutorial-description">Example Teller Resource</p>
      <p className="tutorial-text">In our simulation, let's give the Teller resource the name "Teller" and give it a count of 2 representing the two tellers on staff. Do the same for the Manager resource, but only give it a count of one. For more information on resources, please visit our docs.</p>

    </div>
  );
}
export default Five;
