import { NEW_DATA, DATA_CHECK, DATA_CLOSE } from '../constants/ActionTypes';

export function newData(data) {
  return {
    type: NEW_DATA,
    data: data,
  };
};

export function dataCheck() {
  return {
    type: DATA_CHECK,
  };
};

export function dataClose() {
  return {
    type: DATA_CLOSE,
  };
};

export function listenForData() {
  return (dispatch, getState) => {
    const { socket } = getState();
    socket.on('newData', (data) => {
      dispatch(newData(data));
    })
  };
};
