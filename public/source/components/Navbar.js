import React, { PropTypes } from 'react';
import '../styles/nav.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  toggleMenu(tutorial) {
    this.setState({open: !this.state.open})
    if (this.props.tutorial.open && tutorial === false) {
      this.props.tutorialActions.toggleTutorial();
    }
  }
  getLogin() {
    if (window.SIGNEDIN) {
      return <li><this.props.Link to="/data">Data</this.props.Link></li>
    } else {
      return <li><this.props.Link className="pointer"
      onClick={e => this.props.login()}>Login</this.props.Link></li>
    }
  }
  handleOverlay(e) {
    if (e.target.classList[0] === 'overlay') {
      this.toggleMenu(true);
    }
  }
  render() {
    const { Link, params } = this.props;
    if (window.location.pathname === '/board') {
      if (!this.state.open) {
        return <div className='nav-absolute' onClick={e => this.toggleMenu(true)}><i className="material-icons">menu</i></div>
      } else {
        return (
          <div style={{backgroundColor: 'rgba(0,0,0,0)'}} onClick={e => this.handleOverlay(e)} className="overlay">
            <div className='nav-abs-menu'>
              <div className='nav-absolute' onClick={e => this.toggleMenu(true)}><i className="material-icons">menu</i></div>
              <ul>
                <li onClick={e => this.toggleMenu(false)}><Link to="/board">Board</Link></li>
                <li onClick={e => this.toggleMenu(false)}><Link to="/docs">Docs</Link></li>
                <li onClick={e => this.toggleMenu(false)}><Link to="/data">Your Data</Link></li>
                <li className="pointer" onClick={e => {this.props.tutorialActions.toggleTutorial(); this.toggleMenu(true);}}><Link>Tutorial</Link></li>
              </ul>
            </div>
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
          <li onClick={e => this.props.tutorialActions.toggleTutorial()}><Link to="/board">Tutorial</Link></li>
          {this.getLogin()}
        </ul>
      </div>
    );
  };
}
