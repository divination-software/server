import React from 'react';

const Source = (props) => (
  <div>
    <h2 className='doc-title'>Source</h2>
    <img src="http://i.imgur.com/9NNbVV4.png" />
    <p>Sources are the beginning of all simulations but to talk about them we need to start off by talking about Entities.</p>
    <p>Entities are an abstract representation of the things that move through your simulations. They’re an abstract representation because there is no visual representation of entities in Divination. Different simulations will conceptualize entities differently:</p>
    <ul>
      <li>A bank could think of entities as customers and loan-seekers</li>
      <li>An airline may write a simulation which thinks of entities as individual planes moving around the world</li>
      <li>A shipyard could think of entities as ships moving in and out of harbor</li>
    </ul>
    <p>Sources have only one job in your simulations: generate entities.</p>
  </div>
)

export default Source;
