import React from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends React.Component {
  signUp(e) {
    e.preventDefault();
    var signUpInfo = {
      firstName: ReactDOM.findDOMNode(this.refs.lastName).value,
      lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
		  email: ReactDOM.findDOMNode(this.refs.email).value,
		  password: ReactDOM.findDOMNode(this.refs.password).value,
		}
    var passwordConfirm = ReactDOM.findDOMNode(this.refs.passConfirm).value
    if (passwordConfirm !== signUpInfo.password) {
      this.props.fail('Password confirmation does not match');
      return;
    }
    this.props.signup(signUpInfo);
  }
  getMessage() {
    if (this.props.user.message) {
      return (<p style={{color:'red'}}>{this.props.user.message}</p>);
    } else {
      return <div/>
    }
  }
  render() {
    const { signUp, swap } = this.props;
    return (
      <form onSubmit={e => e.preventDefault}>
          <h2>Sign Up</h2>
          <input type='text' placeholder='First name...' ref='firstName'/>
          <input type='text' placeholder='Last name...' ref='lastName'/>
          <input type='text' placeholder='Email...' ref='email'/>
					<input type='password' placeholder='Enter Password...' ref='password'/>
					<input type='password' placeholder='Confirm Password...' ref='passConfirm'/>
          {this.getMessage()}
					<button onClick={e => this.signUp(e)} type='submit'>SignUp</button>
          <p onClick={swap}>Log in...</p>
			</form>
    )
  }
}
