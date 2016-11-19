import { SOCKET_CONNECT } from '../constants/ActionTypes';

export default function socket(state, action) {
  switch (action.type) {
    case SOCKET_CONNECT:
      return action.socket;
    default:
      return null;
  }
}
