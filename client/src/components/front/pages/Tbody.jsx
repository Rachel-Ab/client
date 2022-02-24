import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../../../contexts/cart';
import { ucfirst, convertToEuro, formatPrice } from '../../../utils/helpers';
import { REMOVE_ITEM, UPDATE_QTY } from '../../../contexts/cart/types';

const Tbody = ({ products }) => {
  const [totalHT, setTotalHT] = useState(0);
  const [totalTTC, setTotalTTC] = useState(0);
  const [, dispatch] = useContext(CartContext);
  const count = products.length;

  //

  useEffect(() => {
    let HT = 0;

    products.forEach(p => {
      HT += p.priceHT * p.qty;
    });

    setTotalHT(convertToEuro(HT));
    setTotalTTC(formatPrice(HT));
  }, [products]);

  const handleUpdateQty = (id, e) => {
    e.preventDefault();

    dispatch({ type: UPDATE_QTY, payload: { id, qty: e.target.value } });
  };

  const removeProductHandler = (id, e) => {
    e.preventDefault();

    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <Fragment>
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/shop">Home</Link>
          <i className="fa fa-chevron-right breadcrumb-separator" />
          <span>Shopping Cart</span>
        </div>
      </div>

      <div className="cart-section container">
        <div>
          <h2>
            {count > 0
              ? `${count} items in Shopping Cart`
              : `Vous n'avez rien ajoute au panier`}{' '}
          </h2>
          <div className="cart-table">
            {products &&
              products.map(product => {
                return (
                  <div key={product.id} className="cart-table-row">
                    <div className="cart-table-row-left">
                      <Link to="/">
                        <img
                          src={product.image}
                          alt="item"
                          className="cart-table-img"
                        />
                      </Link>
                      <div className="cart-item-details">
                        <div className="cart-table-item">
                          <Link to={`/product/${product.id}`}>
                            {ucfirst(product.title)}
                          </Link>
                        </div>
                        <div className="cart-table-description">
                          15 inch, 1TB SSD, 32GB RAM
                        </div>
                      </div>
                    </div>
                    <div className="cart-table-row-right">
                      <div className="cart-table-actions">
                        <Link
                          onClick={e => removeProductHandler(product.id, e)}
                          to="/"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <select
                          className="quantity"
                          name="qty"
                          onChange={e => handleUpdateQty(product.id, e)}
                        >
                          <option defaultValue={product.qty}>
                            {product.qty}
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div>
                        {formatPrice(product.priceHT * product.qty)} &euro; TTC
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Link to="/" className="have-code">
            Have a Code?
          </Link>
          <div className="have-code-container">
            <form action="/">
              <input type="text" />
              <button type="submit" className="button button-plain">
                Apply
              </button>
            </form>
          </div>

          {count > 0 && (
            <div className="cart-totals">
              <div className="cart-totals-left">
                TODO: calculer prix livraison ?
              </div>

              <div className="cart-totals-right">
                <div>
                  Subtotal HT
                  <br />
                  Tax <br />
                  <span className="cart-totals-total">Total</span>
                </div>
                <div className="cart-totals-subtotal">
                  {totalHT} &euro;
                  <br />
                  {(totalTTC - totalHT).toFixed(2)} &euro;
                  <br />
                  <span className="cart-totals-total">{totalTTC} &euro;</span>
                </div>
              </div>
            </div>
          )}
          <div className="cart-buttons">
            <Link to="/shop" className="button">
              Continue Shopping
            </Link>
            {count > 0 && (
              <Link to="/checkout" className="button-primary">
                Proceed to Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Tbody.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Tbody;
