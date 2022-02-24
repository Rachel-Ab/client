import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { LOGIN, ERROR } from '../../contexts/auth/types';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const Login = () => {
  const [authState, dispatch] = useContext(AuthContext);

  const login = data => {
    // Quand on reçoit le token, le mettre dans localStorage
    // Voir on maintient comment une 'session'
    // api/auth
    axios
      .post('/api/auth', data)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('token', token);

        dispatch({ type: LOGIN, payload: token });
      })
      .catch(e => console.error(e));
  };

  return (
    <Fragment>
      {authState.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="container">
          Login or <Link to="/register">Register</Link>
          <AuthForm method={login} />
        </div>
      )}
    </Fragment>
  );
};

export default Login;
