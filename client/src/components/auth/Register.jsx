import React, { useState, useContext } from 'react';
// import { LOGIN } from '../../contexts/auth/types';
// import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Register = () => {
  // const [, dispatch] = useContext(AuthContext);

  const register = e => {
    e.preventDefault();
    console.log('registering');
  };

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="container">
      Register or <Link to="/login">Login</Link>
      <form onSubmit={register}>
        <input name="email" type="email" onChange={handleChange} />
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Register;
