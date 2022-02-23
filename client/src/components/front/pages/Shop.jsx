import React, { useEffect, useContext, Fragment } from 'react';
import { ProductContext } from '../../../contexts/products';
import axios from 'axios';
import { GET_PRODUCTS } from '../../../contexts/products/types';
import Products from './Products';

const Shop = () => {
  const [productsState, dispatch] = useContext(ProductContext);

  useEffect(() => {
    axios.get('/api/products').then(res => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    });
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
            {/*optional chaining : productsState?.products :
              Si productsState n'est pas prêt, grâce au ? on
              n'aura pas d'erreur.
              */}
            <Products products={productsState?.products} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
