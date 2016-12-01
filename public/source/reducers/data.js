import { GET_DATA } from '../constants/ActionTypes';

export default function data(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return action.data;
    default:
      return state;
  }
}
