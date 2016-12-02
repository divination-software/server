import React from 'react';

const Resource = (props) => (
  <div>
    <h2 className='doc-title'>Resource</h2>
    <img src="http://i.imgur.com/6Ef3IQz.png" />
    <p>Resources represent scarcity in your simulations and can be held by entities. They have two key features:</p>
    <ul>
      <li>They are finite</li>
      <li>They can be held by entities as those entities move through a simulation</li>
    </ul>
    <p>They can, in combination with Processes, delay the progress of entities by creating a queue in which entities wait for the Resource to become available before moving on. Resources, just like entities will be conceptualized differently depending on the context of the simulation. Using the same examples we used for entities in the discussion about Sources:</p>
    <ul>
      <li>A bank could use resources to model tellers, bankers, and managers</li>
      <li>An airline could use resources to model docking stations at an airport</li>
      <li>A shipyard could use resources to model the cranes used for loading and unloading container ships </li>
    </ul>
  </div>
)

export default Resource;
