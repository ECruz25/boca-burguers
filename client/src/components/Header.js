import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <NavLink
      to="/"
      className="navbar-brand"
      activeClassName="active"
      exact={true}
    >
      Home
    </NavLink>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/order" className="nav-link" activeClassName="active">
            Order
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
