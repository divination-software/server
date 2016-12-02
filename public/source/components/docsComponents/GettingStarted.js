import React from 'react';

const GettingStarted = (props) => (
  <div>
    <h2 className='doc-title'>Getting Started</h2>
    <img src="http://i.imgur.com/DsvCjeG.png" />
    <p>Divination is an analytic tool that simulates processes and provides insight into the efficiency of those processes. Simulations are built by chaining different nodes together. Each of these nodes affects the simulation in specific, and customizable, ways.</p>
    <table>
      <thead>
        <tr>
          <th>Node</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Source</td>
          <td>The beginning of every simulation and the generator of Entities.</td>
        </tr>
        <tr>
          <td>Exit</td>
          <td>The end-of-the-line of every simulation. Data about Entities which have traversed your simulation is collected once those Entities reach an Exit.</td>
        </tr>
        <tr>
          <td>Decision</td>
          <td>A representation of choice. Entities which encounter a Decision will continue in one of two directions.</td>
        </tr>
        <tr>
          <td>Process</td>
          <td>Handles delaying Entities, and seizing and/or releasing Resources.</td>
        </tr>
        <tr>
          <td>Resource</td>
          <td>A finite resource which Entities can possess (exclusively) as they move through the simulation.</td>
        </tr>
      </tbody>
    </table>
    <p>Customize the properties of a node by right clicking on it and selecting “Edit Data”.</p>
    <img src="http://i.imgur.com/Epkz9hO.png" />
  </div>
)

export default GettingStarted;
