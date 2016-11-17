import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/ActionTypes';

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

export function checkLogin() {
  return (dispatch, getState) => {
    const { user } = getState();

    if (user) {
      return;
    }

    dispatch(loginFailed('Please log in'));
  };
}

export function login(email, password) {
  return (dispatch) => {
    axios.post('/api/users/login', {
      email: 'test@gmail.com',
      password: 'test'
    })
    .then( response => {
      if (response.status === 500) {
        dispatch(loginFailed('Email is not registered'));
      } else if (response.status === 401) {
        dispatch(loginFailed('Password is incorrect'));
      } else {
        dispatch(loginSuccess(response.data));
      }
    })
  };
}
