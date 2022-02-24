import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { LOGIN, ERROR } from '../../contexts/auth/types';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const Login = () => {
  const [, dispatch] = useContext(AuthContext);

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
    <div className="container">
      Login or <Link to="/register">Register</Link>
      <AuthForm method={login} />
    </div>
  );
};

export default Login;
