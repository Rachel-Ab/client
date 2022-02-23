import { NavLink } from "react-router-dom";
import kenshiro from "../assets/img/kenshiro.jpg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="with-background">
      <div className="top-nav container">
        <div className="logo">
          <NavLink exact to="/">
            React / Redux / Express / MySQL Ecommerce
          </NavLink>
        </div>
        <Nav />
      </div>

      <div className="hero container">
        <div className="hero-copy">
          <h1>Le roi de la merguez a encore frappe</h1>

          <p>Des produits, Des categories, un panier et Stripe</p>
          <div className="hero-buttons">
            <a href="!#" className="button button-white">
              Blog Post
            </a>
            <a href="!#" className="button button-white">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={kenshiro} alt="heropages" />
        </div>
      </div>
    </header>
  );
};

export default Header;
