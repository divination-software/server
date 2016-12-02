import React from 'react';
import One from './tutorialComponents/One';
import Two from './tutorialComponents/Two';
import Three from './tutorialComponents/Three';
import Four from './tutorialComponents/Four';
import Five from './tutorialComponents/Five';
import Six from './tutorialComponents/Six';
import Seven from './tutorialComponents/Seven';
import Eight from './tutorialComponents/Eight';
import Nine from './tutorialComponents/Nine';
import Ten from './tutorialComponents/Ten';
import Eleven from './tutorialComponents/Eleven';
import Twelve from './tutorialComponents/Twelve';
import Thirteen from './tutorialComponents/Thirteen';
import Fourteen from './tutorialComponents/Fourteen';
import Fifteen from './tutorialComponents/Fifteen';
import '../styles/tutorial.css';

const Pages = {
  1: <One />,
  2: <Two />,
  3: <Three />,
  4: <Four />,
  5: <Five />,
  6: <Six />,
  7: <Seven/ >,
  8: <Eight />,
  9: <Nine />,
  10: <Ten />,
  11: <Eleven />,
  12: <Twelve />,
  13: <Thirteen />,
  14: <Fourteen />,
  15: <Fifteen/>,
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
      <div className="tutorial-buttons">
        <button className="tutorial-button" onClick={e=>prev()}>Prev</button>
        <button className="tutorial-button" onClick={e=>next()}>Next</button>
      </div>
    </div>
  );
}
export default Tutorial;
