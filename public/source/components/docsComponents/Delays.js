import React from 'react';

const Delays = (props) => (
  <div>
    <h2 className='doc-title'>Delay Types</h2>
    <table>
      <thead>
        <tr>
          <th>Delay Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Constant</td>
          <td>A constant delay type creates a delay for at a constant rate. For example, a constant delay of 20 will always and continuously create a delay of 20 seconds. Note that all delays are defined in seconds.</td>
        </tr>
        <tr>
          <td>Uniform</td>
          <td>A uniform delay type generates a delay unformly between a <strong>minimum</strong> and a <strong>maximum</strong>. This means that between the minimum and the maxmium, there is an equal probablity that any delay in that range will be generated.</td>
        </tr>
        <tr>
          <td>Triangular</td>
          <td>A triangular delay type generates a delay that is distributed triangularly between 3 points, a <strong>minimum</strong>, a <strong>middle</strong>, and a <strong>maximum</strong>. With a triangular distribution, most delays will be generated near the middle, with outliers to the minimum and the maxmimum.</td>
        </tr>
        <tr>
          <td>Exponential</td>
          <td>An exponential delay generates a delay based off a value given. This delay will most likely be near the value given, but has cases of extreme outliers.</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Delays;
