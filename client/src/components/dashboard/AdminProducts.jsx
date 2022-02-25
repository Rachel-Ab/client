import React, { useContext } from 'react';

// Les champs name pour créer un prod category_id, title, metaDescription, description, priceHT
// + image

const AdminProducts = () => {
  // /api/products
  // /api/categories
  return (
    <div className="container-fluid">
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

      <div className="half-form col-md-8">
        <form className="Form half-form">
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="title">
                Title
              </label>
              <input type="text" name="title" id="title" placeholder="title" />
            </div>
          </div>
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="metaDescription">
                meta desc
              </label>
              <input
                type="text"
                name="metaDescription"
                id="metaDescription"
                placeholder="metaDescription"
              />
            </div>
          </div>
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="description"
              />
            </div>
          </div>
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="image">
                Image
              </label>
              <input type="file" name="image" id="image" placeholder="image" />
            </div>
          </div>
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="category_id">
                Category
              </label>
              <select name="category_id" id="category_id">
                <option value="1">nom de la cat</option>
                <option value="2">nom de la cat</option>
                <option value="3">nom de la cat</option>
                <option value="4">nom de la cat</option>
              </select>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminProducts;
