import React from 'react';
import Login from './authComponents/Login';
import SignUp from './authComponents/SignUp';

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: true };
  }
  render() {
    const { auth, loginActions, user } = this.props;
    if (!auth) {
      return <div></div>
    } else if (this.state.login) {
      return (
        <div className='overlay' onClick={loginActions.closeLogin}>
          <div className='content'>
            <Login user={user} login={loginActions.login}/>
            </div>
        </div>)
    } else  {
      return (
        <div className='overlay' onClick={loginActions.closeLogin}>
          <div className='content'>
            <SignUp user={user} signup={loginActions.signUp}/>
            </div>
        </div>)
    }
  }
}
