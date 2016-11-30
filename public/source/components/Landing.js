import React from 'react';
import '../styles/landing.css';

const Landing = (props) => {
  return (
    <div className='landing'>
      <div className='landingImage'>
        <div className='landingInfo'>
          <h3>Make Decisions With Confidence</h3>
        </div>
      </div>
      <button onClick={e => props.loginActions.openLogin() }>Login</button>
    </div>
  );
}
export default Landing;
