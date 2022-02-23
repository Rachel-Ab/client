import { NavLink } from "react-router-dom";

const Nav = () => {
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
        </ul>
      </div>
    </header>
  );
};

export default Nav;
