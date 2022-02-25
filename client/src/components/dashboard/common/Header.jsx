import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth';
import { LOGOUT } from '../../../contexts/auth/types';

const Header = () => {
  const [, dispatch] = useContext(AuthContext);

  const logout = e => {
    e.preventDefault();

    dispatch({ type: LOGOUT, payload: null });
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/shop">
        Home
      </Link>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <Link className="nav-link px-3" to="/logout" onClick={logout}>
            Sign out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
