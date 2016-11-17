import React from 'react';

const Landing = (props) => {
  console.log(props.loginActions)
  return (<button onClick={e => props.loginActions.login() }>Login</button>);
}
export default Landing;
