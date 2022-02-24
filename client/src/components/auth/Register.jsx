import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../contexts/auth';
import { REGISTER, ERROR } from '../../contexts/auth/types';
import AuthForm from './AuthForm';

const Register = () => {
  const [, dispatch] = useContext(AuthContext);

  const register = data => {
    // Quand on reçoit le token, le mettre dans localStorage
    // Voir on maintient comment une 'session

    // api/users/register

    // fetch : let data = new  FormData();
    //  data.append('data', data);
    axios
      .post('/api/users/register', data)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('token', token);

        dispatch({ type: REGISTER, payload: token });
      })
      .catch(e => console.error(e));
  };

  return (
    <div className="container">
      Register or <Link to="/login">Login</Link>
      <AuthForm method={register} />
    </div>
  );
};

export default Register;
