import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const register = e => {
    e.preventDefault();
    console.log('registering');
  };

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div className="container">
      Register or <Link to="/login">Login</Link>
      <form onSubmit={register}>
        <input type="email" onChange={handleChange} />
        <input type="password" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Register;
