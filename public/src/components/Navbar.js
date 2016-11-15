import React, { PropTypes } from 'react';

const Navbar = (props) => {
  const { Link } = props;
  return (
    <div className="nav">
      <h1 className="nav-title"> Divination
        <span className="nav-title-span">Simulation Software </span>
      </h1>
      <ul>
        <li><Link to="/landing">Landing</Link></li>
        <li><Link to="/">Board</Link></li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  Link: PropTypes.func.isRequired,
};

export default Navbar;
