import { OPEN_DATA, CLOSE_DATA } from '../constants/ActionTypes';

const defaultState = {
  0: null,
  1: null
}

export default function dataShow(state = defaultState, action) {
  switch (action.type) {
    case OPEN_DATA:
      state[action.index] = action.data
      return Object.assign({},state);
    case CLOSE_DATA:
      if (action.index = 1) {
        state[1] = null;
      } else {
        state[0] = state[1];
        state[1] = null;
      }
      return Object.assign({},state);
    default:
      return state;
  }
}
