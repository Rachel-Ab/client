import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../../contexts/cart';
import { GET_CART_ITEMS } from '../../../contexts/cart/types';
import Tbody from './Tbody';

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  useEffect(() => {
    //
    dispatch({ type: GET_CART_ITEMS, payload: null });

    // state?.products?.length
  }, []);

  return (
    <div className="container">
      {state?.products.length ? (
        <table>
          <thead>
            <tr>
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <Tbody products={state.products} />
        </table>
      ) : null}
    </div>
  );
};

export default Cart;
