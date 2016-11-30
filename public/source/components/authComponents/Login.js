import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
  login(e) {
    this.props.login()
    e.preventDefault();
  }
  getMessage() {
    if (this.props.user.message) {
      return (<p style={{color:red}}>{this.props.user.message}</p>);
    } else {
      return <div/>
    }
  }
  render() {
    const { swap } = this.props;
    return (
      <form onSubmit={e => e.preventDefault}>
          <h2>Login</h2>
          <input type='text' placeholder='Email...' ref='email'/>
					<input type='password' placeholder='Enter Password...' ref='password'/>
          {this.getMessage()}
					<button onClick={e => this.login(e)} type='submit'>Log In</button>
          <p onClick={swap}>Sign up...</p>
			</form>
    )
  }
}
