import React from 'react';

const DataShow = (props) => {
  const { data, close } = props;
  return (
    <div>
			<div onClick={e => close()} className='overlay'> </div>
			<div className='content'>
        <h1>{data.name}</h1>
				<p>{data.data}</p>
			</div>
		</div>
    );
}

export default DataShow;
