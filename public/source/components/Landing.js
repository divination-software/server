import React from 'react';

const Landing = (props) => {
  return (<button onClick={e => props.loginActions.login() }>Login</button>);
}
export default Landing;
