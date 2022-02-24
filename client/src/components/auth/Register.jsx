import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AuthForm from './AuthForm';
// import { LOGIN } from '../../contexts/auth/types';
// import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Register = () => {
  // const [, dispatch] = useContext(AuthContext);

  const register = e => {
    e.preventDefault();
    // Quand on reçoit le token, le mettre dans localStorage
    // Voir on maintient comment une 'session

    // api/users/register
    // axios
    //   .post('/api/users/register', { email:'test@test.com', password: 'testing' })
    //   .then(res => console.log(res.data))
    //   .catch(e => console.error(e));

    console.log('registering');
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="container">
      Register or <Link to="/login">Login</Link>
      <AuthForm method={register} />
    </div>
  );
};

export default Register;
