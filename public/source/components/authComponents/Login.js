import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  login(e) {
    var loginInfo = {
		  email: ReactDOM.findDOMNode(this.refs.email).value,
		  password: ReactDOM.findDOMNode(this.refs.password).value,
		}
    this.props.login(loginInfo)
    e.preventDefault();
  }
  getMessage() {
    if (this.props.user.message) {
      return (<p style={{color:'red'}}>{this.props.user.message}</p>);
    } else {
      return <div/>
    }
  }
  render() {
    const { swap } = this.props;
    return (
      <form className='auth-form'onSubmit={e => e.preventDefault}>
          <h2 className='auth-title'>LOGIN</h2>
          <input type='text' placeholder='Email...' ref='email'/><br/>
					<input type='password' placeholder='Enter Password...' ref='password'/>
          {this.getMessage()}
					<button onClick={e => this.login(e)} type='submit'>Log In</button>
          <p className="pointer" onClick={swap}>Sign up...</p>
			</form>
    )
  }
}
