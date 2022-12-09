import React from 'react';
import {NavLink} from "react-router-dom";
import {PAGESNAME} from "../../constants";

const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Static Pages</span>
        <div className="collapse navbar-collapse d-flex justify-content-end">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            {PAGESNAME.map(page => (
              <li key={page.id} className="nav-item">
                <NavLink to={"/pages/" + page.id} className="nav-link">
                  {page.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <NavLink to="/new-page" className="nav-link">
                New page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;