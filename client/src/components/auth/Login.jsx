import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { REGISTER } from '../../contexts/auth/types';
// import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  // const [, dispatch] = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    console.log('login in');

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
      <form onSubmit={login}>
        <input name="email" type="email" onChange={handleChange} />
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Login;
