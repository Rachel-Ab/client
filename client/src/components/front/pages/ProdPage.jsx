import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductContext } from '../../../contexts/products';
import { CartContext } from '../../../contexts/cart';
import { GET_ONE_PRODUCT } from '../../../contexts/products/types';
import { ADD_TO_CART } from '../../../contexts/cart/types';

const ProdPage = () => {
  const { id } = useParams();
  const [prodState, dispatch] = useContext(ProductContext);
  const [, dispatchCart] = useContext(CartContext);

  useEffect(() => {
    // GET_ONE_PRODUCT
    // url : `/api/products/${id}`
    axios.get(`/api/products/${id}`).then(res => {
      dispatch({ type: GET_ONE_PRODUCT, payload: res.data });
    });
  }, [dispatch, id]);

  const addToCart = () => {
    // Ajouter les produits au localStorage
    const { product } = prodState;

    dispatchCart({ type: ADD_TO_CART, payload: product.id });
    // Puis créer une page qui permet d'afficher les produits qui sont dans le panier
    // Utiliser un tableau d'objets
  };

  return (
    <div className="container">
      <h3>Page Produit</h3>
      <div className="product">
        <img
          src={prodState?.product?.image}
          alt={prodState?.product?.metaDescription}
        />
        <p>{prodState?.product?.title}</p>
        <p>{prodState?.product?.description}</p>

        <button className="SubmitButton" onClick={addToCart}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProdPage;
