import { OPEN_LOGIN, CLOSE_LOGIN } from '../constants/ActionTypes';



export default function auth(state = false, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return action.auth;
    case CLOSE_LOGIN:
      return false;
    default:
      return state;
  }
}
