import React from 'react';
import PropTypes from 'prop-types';
import { ucfirst, convertToEuro } from '../../../utils/helpers';

const Tbody = ({ products }) => {
  return (
    <tbody>
      {products.map(prod => (
        <tr key={prod.id}>
          <td>{ucfirst(prod.title)}</td>
          <td>{prod.description}</td>
          <td>{convertToEuro(prod.priceHT)}</td>
        </tr>
      ))}
    </tbody>
  );
};

Tbody.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Tbody;
