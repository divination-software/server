import React from 'react';

export default class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = { login: true };
  }
  render() {
    const { loginActions, user } = this.props;
    return (
      <div className="data-container">
        Suppp
      </div>
    )
  }
}
