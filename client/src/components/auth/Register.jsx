import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
// import { LOGIN } from '../../contexts/auth/types';
// import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';

const Register = () => {
  // const [, dispatch] = useContext(AuthContext);

  const register = e => {
    e.preventDefault();

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
      <form onSubmit={register}>
        <input name="email" type="email" onChange={handleChange} />
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Register;
