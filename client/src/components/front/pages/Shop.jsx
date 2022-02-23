import React, { useEffect, useContext, Fragment } from 'react';
import axios from 'axios';
import { ProductContext } from '../../../contexts/products';
import { GET_PRODUCTS } from '../../../contexts/types';

const Shop = () => {
  const [productsState, dispatch] = useContext(ProductContext);

  useEffect(() => {
    dispatch({ type: GET_PRODUCTS, payload: null });

    console.log(productsState);
  }, []);

  return (
    <Fragment>
      <div className="breadcrumbs">
        <div className="container">
          <a href="!#">Home</a>
          <i className="fa fa-chevron-right breadcrumb-separator" />
          <span>Shop</span>
        </div>
      </div>

      <div className="products-section container">
        <div className="sidebar">
          <h3>Trier par catégorie</h3>
          <ul>
            <li>cat 1</li>
            <li>cat 2</li>
            <li>cat 3</li>
          </ul>
          <h3>Trier par prix</h3>
          <ul>
            <li>0€ - 150€</li>
            <li>150€ - €450</li>
            <li>€450 +</li>
          </ul>
        </div>

        <div>
          <div className="products text-center">
            <div className="product">
              <a href="#!">
                <img src="https://www.fillmurray.com/g/300/200" alt="" />
              </a>
              <a href="#!">
                <div className="product-name">nom produit</div>
              </a>
              <div className="product-price">200€</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
