import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, OPEN_LOGIN, CLOSE_LOGIN } from '../constants/ActionTypes';

export function openLogin(auth) {
  var auth = auth || 'login'
  return {
    type: OPEN_LOGIN,
    auth: auth
  };
}
export function closeLogin() {
  return {
    type: CLOSE_LOGIN,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}

export function loginFailed(message) {
  return {
    type: LOGIN_FAIL,
    message: message,
  };
}

export function signUpSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
}

export function signUpFailed(message) {
  return {
    type: SIGNUP_FAIL,
    message: message,
  };
}

export function checkLogin() {
  return (dispatch, getState) => {
    const { user } = getState();

    if (user) {
      return;
    }

    dispatch(loginFailed('Please log in'));
  };
}
export function signup(signupInfo) {
  return (dispatch) => {
    axios.post('/api/users/signup',signupInfo)
    .then( response => {
      dispatch(loginFailed('Sign Up Success! Please Login'))
      dispatch(openLogin())
    })
    .catch( err => {
      dispatch(loginFailed('Error Occured'))
    })
  }
}

export function login(loginInfo) {
  return (dispatch, getState) => {
    const { socket } = getState()
    axios.post('/api/users/login', loginInfo)
    .then( response => {
      if (response.status === 500) {
        dispatch(loginFailed('Email is not registered'));
      } else if (response.status === 401) {
        dispatch(loginFailed('Password is incorrect'));
      } else {
        socket.emit('loggedIn', response.data._id);
        window.SIGNEDIN = true;
        dispatch(loginSuccess(response.data));
        dispatch(closeLogin())
      }
    })
    .catch( response =>  {
      dispatch(loginFailed('Email or password is incorrect'))
    })
  };
}
