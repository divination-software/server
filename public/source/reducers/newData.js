import { NEW_DATA, DATA_CHECK, DATA_CLOSE } from '../constants/ActionTypes';

const defaultState = {
  data: null,
  checked: false,
  closed: true
}

export default function newData(state = defaultState, action) {
  switch (action.type) {
    case NEW_DATA:
      state.data = action.data;
      state.checked = false;
      state.closed = true;
      return Object.assign({},state);
    case DATA_CHECK:
      state.checked = true;
      state.closed = false;
      return Object.assign({},state);
    case DATA_CLOSE:
      state.data = null;
      state.checked = false;
      state.closed = true;
      return Object.assign({},state);
    default:
      return state;
  }
}
