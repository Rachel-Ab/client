import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductContext } from '../../../contexts/products';
import { GET_ONE_PRODUCT } from '../../../contexts/products/types';

const ProdPage = () => {
  const { id } = useParams();
  const [prodState, dispatch] = useContext(ProductContext);

  useEffect(() => {
    // GET_ONE_PRODUCT
    // url : `/api/products/${id}`
    axios.get(`/api/products/${id}`).then(res => {
      dispatch({ type: GET_ONE_PRODUCT, payload: res.data });
    });
  }, []);

  const addToCart = () => {
    console.log('Adding to cart');
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

        <button onClick={addToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProdPage;
