import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import quillModule from '../../utils/quillModule';
import { ProductContext } from '../../contexts/products';
import { CategoryContext } from '../../contexts/categories';
import { GET_PRODUCTS } from '../../contexts/products/types';
import { GET_CATEGORIES } from '../../contexts/categories/types';
// Les champs name pour créer un prod category_id, title, metaDescription, description, priceHT
// + image

const AdminProducts = () => {
  // /api/products
  // /api/categories
  const initialState = {
    category_id: '',
    title: '',
    metaDescription: '',
    description: '',
    priceHT: '',
    image: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [prodState, dispatchProds] = useContext(ProductContext);
  const [categoriesState, dispatchCats] = useContext(CategoryContext);

  useEffect(() => {
    axios
      .get('/api/products')
      .then(res => {
        dispatchProds({ type: GET_PRODUCTS, payload: res.data });
      })
      .catch(e => console.error(e));

    axios
      .get('/api/categories')
      .then(res => {
        dispatchCats({ type: GET_CATEGORIES, payload: res.data });
      })
      .catch(e => console.error(e));
  }, [dispatchProds, dispatchCats]);

  const onChangeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeQuill = value => {
    setFormData({ ...formData, description: value });
  };

  const loadImage = e => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = e => {
      setFormData({ ...formData, image: e.target.result });
    };
  };

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post('/api/products/create', formData)
      .then(res => console.log(res))
      .catch(e => console.log(e));
  };

  const { title, metaDescription, description, priceHT, image } = formData;

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Page admin products</h2>
        </div>
        <p>Recupérer tous les produits</p>
        <p>
          Quand on clique sur un produit de la liste, le formulaire se
          pré-remplit avec les infos correctes du produit qu'on veut mettre à
          jour
        </p>
        <p>
          Récuperer les categories pour en associer une au produit que l'on
          créer
        </p>
      </div>

      {/*FormRow */}
      {/*FormRow:first-child*/}

      {/*<div className="col-md-4">*/}
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="form col-md-6"
      >
        <div className="form-group FormGroup">
          <div className="FormRow">
            <label className="FormRowLabel" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="title"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group FormGroup">
          <div className="FormRow">
            <label className="FormRowLabel" htmlFor="prixHT">
              prixHT
            </label>
            <input
              type="number"
              name="priceHT"
              id="prixHT"
              value={priceHT}
              placeholder="prixHT en centimes: 1€ = 100cents"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group FormGroup">
          <div className="FormRow">
            <label className="FormRowLabel" htmlFor="metaDescription">
              meta desc
            </label>
            <input
              type="text"
              value={metaDescription}
              name="metaDescription"
              id="metaDescription"
              placeholder="metaDescription"
              onChange={onChangeHandler}
            />
          </div>
        </div>

        <div className=" mb-5">
          <label className="form-label" htmlFor="description">
            Description
          </label>

          <ReactQuill
            value={description || ''}
            name="body"
            id="body"
            modules={quillModule}
            onChange={handleChangeQuill}
          />
        </div>

        <div className="form-group FormGroup">
          <div className="FormRow">
            <label className="FormRowLabel" htmlFor="image">
              Image
            </label>
            <input
              onChange={loadImage}
              type="file"
              name="image"
              id="image"
              placeholder="image"
            />
          </div>
          {image ? <img src={image} alt="alt" /> : null}
        </div>
        <div className="form-group FormGroup">
          <div className="FormRow">
            <label className="FormRowLabel form-label" htmlFor="category_id">
              Category
            </label>
            <select
              className="form-select"
              name="category_id"
              id="category_id"
              onChange={onChangeHandler}
            >
              <option defaultValue>
                Cliquer pour sélectionner la catégorie du produit
              </option>
              {categoriesState?.categories.map(cat => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
    // </div>
  );
};

export default AdminProducts;
