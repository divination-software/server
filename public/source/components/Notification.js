import React from 'react';

export default class Notification extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      right: '-200px';
    }
  }
  componentDidMount() {

  }
  render() {
  return (
    const nStyle = {
      width: '200px',
      height: '40px',
      position: 'fixed',
      bottom: 0,
      right: this.state.right
    }
    <div style={nStyle} Click={e => console.log('Notification') }>
      <p>Click to View Simulation Results!</p>
    </div>);
  }
};
