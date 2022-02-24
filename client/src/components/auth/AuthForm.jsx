import React from 'react';
import PropTypes from 'prop-types';

const AuthForm = props => {
  return (
    <form onSubmit={register}>
      <input name="email" type="email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

AuthForm.propTypes = {};

export default AuthForm;
