import React from 'react';

const Eleven = (props) => {
  return (
    <div className="tutorial-data">
      <h2 className="tutorial-title">Step Eleven</h2>
      <h3 className="tutorial-header">Adding a Decision</h3>
      <p className="tutorial-text">Let's assume that one out ten customers have a problem that can't be handle by a Teller. In this case, we'll want to send them to a manager</p>
      <img className="tutorial-image" src="http://i.imgur.com/8CgHE1T.png"/>
      <p className="tutorial-description">Decision Module</p>
      <p className="tutorial-text">To handle this, Let's add a Decision module. Add one to your graph now and connect your process to the new decision module.</p>

    </div>
  );
}
export default Eleven;
