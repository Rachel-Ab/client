import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../contexts/auth';
import { GET_USER } from '../../../contexts/auth/types';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [authState, dispatch] = useContext(AuthContext);

  useEffect(() => {
    axios.get('/api/auth').then(res => {
      dispatch({ type: GET_USER, payload: res.data });
    });
  }, []);

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {/*open bar*/}
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/dashboard">
              <span data-feather="home" />
              Dashboard
            </NavLink>
          </li>
          {/*employee ou admin*/}
          {authState?.user?.Role?.name === 'employee' ||
          authState?.user?.Role?.name === 'admin' ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/orders">
                  <span data-feather="file" />
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="shopping-cart" />
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="users" />
                  Customers
                </a>
              </li>
            </>
          ) : null}
          {/* admin */}
          {authState?.user?.Role?.name === 'admin' ? (
            <>
              <li>
                <a className="nav-link" href="#">
                  <span data-feather="bar-chart-2" />
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="layers" />
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="layers" />
                  Employees
                </a>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
