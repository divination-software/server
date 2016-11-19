import React from 'react';

const DataShow = (props) => {
  return (<button onClick={e => props.loginActions.login() }>Login</button>);
}
export default DataShow;
