import { TOGGLE_TUTORIAL, TUTORIAL_PREV, TUTORIAL_NEXT } from '../constants/ActionTypes';

const defaultState = {
  open: false,
  page: 1,
}

export default function newData(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_TUTORIAL:
      state.open = !state.open;
      return Object.assign({},state);
    case TUTORIAL_PREV:
      if (state.page !== 1) {
        state.page = state.page - 1;
      }
      return Object.assign({},state);
    case TUTORIAL_NEXT:
      if (state.page !== 6) {
        state.page = state.page + 1;
      }
      return Object.assign({},state);
    default:
      return state;
  }
}
