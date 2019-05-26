import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [state, setState] = useState({
    menu: false
  });

  const toggleMenu = () => {
    setState({ menu: !state.menu });
  };

  const show = state.menu ? 'show' : '';

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-minimalist">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" src="/images/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            // data-toggle="collapse"
            // data-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={'collapse navbar-collapse ' + show}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item dropdown dropwdown-toggle">
                <DropdownButton id="dropdown-item-button" title="About">
                  <Link to="/team">
                    <Dropdown.Item as="button">Team</Dropdown.Item>
                  </Link>
                  <Link to="/contact">
                    <Dropdown.Item as="button">Contact</Dropdown.Item>
                  </Link>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
            <div className="social-link">
              <a className="px-2" href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="px-2" href="#">
                <i className="fab fa-twitter" />
              </a>
              <a className="px-2" href="#">
                <i className="fab fa-medium-m" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
