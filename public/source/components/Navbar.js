import React, { PropTypes } from 'react';
import '../styles/nav.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  toggleMenu() {
    this.setState({open: !this.state.open})
  }
  getLogin() {
    if (window.SIGNEDIN) {
      return <li><this.props.Link to="/data">Data</this.props.Link></li>
    } else {
      return <li><this.props.Link onClick={e => this.props.login()}>Login</this.props.Link></li>
    }
  }
  render() {
    const { Link, params } = this.props;
    if (window.location.pathname === '/board') {
      if (!this.state.open) {
        return <div className='nav-absolute' onClick={e => this.toggleMenu()}><i className="material-icons">menu</i></div>
      } else {
        return (
          <div className='nav-abs-menu'>
            <div className='nav-absolute' onClick={e => this.toggleMenu()}><i className="material-icons">menu</i></div>
            <ul>
              <li onClick={e => this.toggleMenu()}><Link to="/board">Board</Link></li>
              <li onClick={e => this.toggleMenu()}><Link to="/docs">Docs</Link></li>
              <li onClick={e => this.toggleMenu()}><Link to="/data">Your Data</Link></li>
            </ul>
          </div>
        )
      }
    }
    return (
      <div className="nav br">
        <h1 className="nav-title"> Divination
          <span className="nav-title-span">Simulation Software </span>
        </h1>
        <ul>
          <li><Link to="/docs">Docs</Link></li>
          <li><Link to="/board">Board</Link></li>
          {this.getLogin()}
        </ul>
      </div>
    );
  };
}
