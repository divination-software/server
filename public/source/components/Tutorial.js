import React from 'react';
import One from './tutorialComponents/One';
import Two from './tutorialComponents/Two';
import Three from './tutorialComponents/Three';
import Four from './tutorialComponents/Four';
import Five from './tutorialComponents/Five';
import Six from './tutorialComponents/Six';
import '../styles/tutorial.css';

const Pages = {
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
}

const Tutorial = (props) => {
  const { tutorial, prev, next } = props;
  if (tutorial.open === false ) {
    return <div/>
  }
  return (
    <div className="tutorial">
      <h1 className="tutorial-main-title">TUTORIAL</h1>
      {Pages[props.tutorial.page]}
      <button onClick={e=>prev()}>Prev</button>
      <button onClick={e=>next()}>Next</button>
    </div>
  );
}
export default Tutorial;
