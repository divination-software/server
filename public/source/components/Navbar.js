import React, { PropTypes } from 'react';
import '../styles/nav.css';

const Navbar = (props) => {
  const { Link, params } = props;
  if (window.location.pathname === '/board') {
    return <div></div>
  }
  return (
    <div className="nav">
      <h1 className="nav-title"> Divination
        <span className="nav-title-span">Simulation Software </span>
      </h1>
      <ul>
        <li><Link to="/landing">Landing</Link></li>
        <li><Link to="/board">Board</Link></li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  Link: PropTypes.func.isRequired,
};

export default Navbar;
