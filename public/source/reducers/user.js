import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/ActionTypes';

const defaultState = {
  user: null,
  signedIn: false,
  message: null
}

export default function user(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.user = action.user;
      state.message = null;
      state.signedIn = true;
      return state;
    case LOGIN_FAIL:
      state.user = null;
      state.message = action.message;
      state.signedIn = false;
      return state;
    default:
      return state;
  }
}
