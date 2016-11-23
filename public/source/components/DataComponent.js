import React from 'react';
import DataShow from './DataShow';
import Notification from './Notification';

const DataComponent = (props) => {
  const { newData, newDataActions } = props;
  if (newData.checked === false && newData.data) {
    return <Notification click={newDataActions.dataCheck}/>
  } else if (newData.checked === true) {
    return <DataShow data={newData.data} close={newDataActions.dataClose}/>
  } else {
    return <div></div>
  }
}

export default DataComponent;
