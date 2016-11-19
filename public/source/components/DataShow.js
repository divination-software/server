import React from 'react';

const DataShow = (props) => {
  const { data, close } = props;
  return (
    <div>
			<div onClick={e => close()} className='overlay'> </div>
			<div className='content'>
				<p>{data}</p>
			</div>
		</div>
    );
}

export default DataShow;
