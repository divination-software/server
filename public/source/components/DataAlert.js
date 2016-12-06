import React from 'react';

const DataAlert = ({ close, name }) => {
  return (
    <div>
      <div onClick={e => close()} className='overlay'> </div>
      <div className="content popup">
        <h1>Simulation Completed!</h1>
        <p>The results for {name} are available in the <strong>Data</strong> section.</p>
      </div>
    </div>
    );
}

export default DataAlert;
