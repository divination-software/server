import io from 'socket.io-client';
import { SOCKET_CONNECT } from '../constants/ActionTypes';

export function socketConnect(socket) {
  return {
    type: SOCKET_CONNECT,
    socket: socket,
  };
};

export function connect(email, password) {
  return (dispatch) => {
    dispatch(socketConnect(io.connect(window.location.origin)));
  };
};
