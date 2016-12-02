import React from 'react';
import Login from './authComponents/Login';
import SignUp from './authComponents/SignUp';
import '../styles/auth.css';

export default class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: true };
  }
  handleClick(e) {
    if (e.target.classList[0] === 'overlay') {
      this.props.loginActions.closeLogin();
    }
  }
  render() {
    const { auth, loginActions, user } = this.props;
    if (!auth) {
      return <div></div>
    } else if (this.props.auth === 'login') {
      return (
        <div className='overlay' onClick={e => this.handleClick(e)}>
          <div className='content'>
            <Login user={user} swap={e => loginActions.openLogin('signup')} login={loginActions.login}/>
            </div>
        </div>)
    } else  {
      return (
        <div className='overlay' onClick={e => this.handleClick(e)}>
          <div className='content'>
            <SignUp user={user} swap={e => loginActions.openLogin('login')} fail={loginActions.loginFailed} signup={loginActions.signup}/>
            </div>
        </div>)
    }
  }
}
