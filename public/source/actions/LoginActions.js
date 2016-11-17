import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, CHECK_LOGIN } from '../constants/ActionTypes';

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
    fetch()
  };
}
