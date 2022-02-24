import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../../contexts/cart';
import { AuthContext } from '../../../contexts/auth';

const Nav = () => {
  const [cartState] = useContext(CartContext);
  const [authState] = useContext(AuthContext);
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
          {/*Cacher les liens register et login si loggedin*/}
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
          {authState?.isAuthenticated ? (
            <li>
              <NavLink to="/dashboard">Votre compte</NavLink>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
