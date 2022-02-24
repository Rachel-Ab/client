import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthForm = ({ method }) => {
  const [formData, setFormData] = useState();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    method(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
};

AuthForm.propTypes = {
  method: PropTypes.func.isRequired,
};

export default AuthForm;
