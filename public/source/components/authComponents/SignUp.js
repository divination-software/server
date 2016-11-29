import React from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends React.Component {
  signUp() {

  }
  getMessage() {
    if (this.props.user.message) {
      return (<p style={{color:red}}>{this.props.user.message}</p>);
    } else {
      return <div/>
    }
  }
  render() {
    const { signUp } = this.props;
    return (
      <form>
          <input type='text' placeholder='First name...' ref='firstName'/>
          <input type='text' placeholder='Last name...' ref='lastName'/>
          <input type='text' placeholder='Email...' ref='email'/>
					<input type='password' placeholder='Enter Password...' ref='password'/>
					<input type='password' placeholder='Confirm Password...' ref='passConfirm'/>
          {this.getMessage()}
					<button onClick={e => this.signUp()} type='submit'>Log In</button>
			</form>
    )
  }
}
