import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../contexts/cart';

const Nav = () => {
  const [cartState] = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartState?.products.length);
  }, [cartState]);

  return (
    <header>
      <div className="top-nav container">
        <div className="logo">
          <NavLink exact to="/">
            MERN Ecommerce
          </NavLink>
        </div>

        <ul>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/register">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/login">Sign in</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Panier <span className="badge">{count > 0 ? count : null}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Votre compte</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
