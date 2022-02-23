import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const login = e => {
    e.preventDefault();

    console.log('login in');
  };

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div className="container">
      Login or <Link to="/register">Register</Link>
      <form onSubmit={login}>
        <input type="email" onChange={handleChange} />
        <input type="password" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Login;
