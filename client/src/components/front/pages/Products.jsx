import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { convertToEuro, ucfirst } from '../../../utils/helpers';

/*
   Récupère les données qui sont dans products

   Faire un map classique

   products == error

   Ne pas oublier le props key
*/

const Products = ({ products }) => {
  return (
    <Fragment>
      {products.length ? (
        products.map(product => (
          <div key={product.id} className="product">
            <Link to={`product/${product.id}`}>
              <img src={product.image} alt={product.metaDescription} />
            </Link>
            <Link to={`product/${product.id}`}>
              <div className="product-name">{ucfirst(product.title)}</div>
            </Link>
            <div className="product-price">
              {convertToEuro(product.priceHT)}€
            </div>
          </div>
        ))
      ) : (
        <p>Rupture de stock</p>
      )}
    </Fragment>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
