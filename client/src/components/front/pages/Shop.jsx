import React, { useEffect, useContext, Fragment, useState } from 'react';
import { ProductContext } from '../../../contexts/products';
import { CategoryContext } from '../../../contexts/categories';
import axios from 'axios';
import {
  GET_PRODUCTS,
  FILTERED_PRODUCTS,
} from '../../../contexts/products/types';
import { GET_CATEGORIES, FILTER_CAT } from '../../../contexts/categories/types';

import Products from './Products';

const Shop = () => {
  const [productsState, dispatch] = useContext(ProductContext);
  const [categoriesState, dispatchCats] = useContext(CategoryContext);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then(res => {
        dispatchCats({ type: GET_CATEGORIES, payload: res.data });
      })
      .catch(e => console.error(e));

    axios
      .get('/api/products')
      .then(res => {
        dispatch({ type: GET_PRODUCTS, payload: res.data });
      })
      .catch(e => console.error(e));
  }, [dispatch, dispatchCats]);

  useEffect(() => {
    dispatch({ type: FILTERED_PRODUCTS, payload: 'all' });
  }, [productsState.products]);

  const handleFilter = catId => {
    dispatch({ type: FILTERED_PRODUCTS, payload: catId });
  };

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
        <div className="">
          <h3>Trier par catégorie</h3>
          <ul>
            {/*<li onClick={() => handleFilter('all')}>All</li>*/}
            {categoriesState?.categories.map(cat => (
              <li key={cat.id} onClick={() => handleFilter(cat.id)}>
                {cat.name}
              </li>
            ))}
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
            <Products products={productsState?.filtered} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
