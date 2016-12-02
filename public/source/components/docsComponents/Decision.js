import React from 'react';

const Decision = (props) => (
  <div>
    <h2 className='doc-title'>Decision</h2>
    <img src="http://i.imgur.com/8CgHE1T.png" />
    <p>Decisions enable entities to move along different routes in your simulation. They can be thought of as a switch at the point where a single train track diverges into two tracks. Entities (trains in this example) would all be on one track then, at the switch (Decision), they would split into two tracks.</p>
    <p>The way entities are split up when they encounter a Decision is determined by probability.</p>
  </div>
)

export default Decision;
