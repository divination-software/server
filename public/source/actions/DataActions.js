import { GET_DATA, OPEN_DATA, CLOSE_DATA } from '../constants/ActionTypes';
import axios from 'axios';

export function getData(data) {
  return {
    type: GET_DATA,
    data: data,
  };
}

export function openData(data, index) {
  return {
    type: OPEN_DATA,
    data: data,
    index: index
  };
}

export function filterData(string) {
  
}

export function closeData(index) {
  return {
    type: CLOSE_DATA,
    index: index,
  };
}


export function importData() {
  return (dispatch) => {
    axios.get('/api/data/data')
    .then( response => {
      dispatch(getData(response.data))
    })
  };
}
