import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { REGISTER } from '../../contexts/auth/types';
// import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const Login = () => {
  // const [, dispatch] = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    console.log('login in');

    // Quand on reçoit le token, le mettre dans localStorage
    // Voir on maintient comment une 'session'
    // api/auth
    // axios
    //   .post('/api/auth', { email:'test@test.com', password: 'testing' })
    //   .then(res => console.log(res.data))
    //   .catch(e => console.error(e));
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="container">
      Login or <Link to="/register">Register</Link>
      <AuthForm method={login} />
    </div>
  );
};

export default Login;
