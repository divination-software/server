import React from 'react';

const Process = (props) => (
  <div>
    <h2 className='doc-title'>Process</h2>
    <img src="http://i.imgur.com/iycvoZZ.png" />
    <p>Processes affect entities as they move through your simulation. The primary purpose of a Process is to delay entities. This delay commonly represents the time it takes an entity to perform a task. Processes also integrate with Resources and are the point at which entities can seize and/or release Resources. Entities which are required to seize a Resource will form a queue if all instances of the Resource are currently being used by other entities.</p>
    <p>There are five modes a Process can operate in:</p>
    <ul>
      <li>Delay</li>
      <li>Seize</li>
      <li>Release</li>
      <li>Seize Delay</li>
      <li>Seize Delay Release</li>
    </ul>
    <p>These modes should be thought of from the perspective of the entities.</p>
    <ul>
      <li><strong>Delay:</strong> Delays the entity for some amount of time. The amount of time can be set as a constant value or generated as a random number.</li>
      <li><strong>Seize:</strong> Take ownership of a Resource. Entities will queue if all instances of the Resource they’re set to seize are currently owned by other entities.</li>
      <li><strong>Release:</strong> Release ownership of a Resource. The released Resource will then be available for the next entity in the queue(s).</li>
    </ul>

  </div>
)

export default Process;
