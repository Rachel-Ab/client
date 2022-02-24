import React, { useContext } from 'react';

// Les champs name pour créer un prod category_id, title, metaDescription, description, priceHT
// + image

const AdminProducts = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 className="h2">Page admin products</h2>
        </div>
        <p>Recupérer tous les produits</p>
        <p>Faire un form pour créer un produit</p>
        <p>Faire un form pour mettre a jour les produits</p>
        <p>
          Quand on clique sur un produit de la liste, le formulaire de
          pré-remplit
        </p>
        <p>
          Récuperer les categories pour en associer une au produit que l'on
          créer
        </p>
      </div>

      {/*FormRow */}
      {/*FormRow:first-child*/}

      <div>
        <form className="half-form Form">
          <div className="form-group FormGroup">
            <div className="FormRow">
              <label className="FormRowLabel" htmlFor="title" />
              <input type="text" name="title" id="title" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="metaDescription" />
            <input type="text" name="metaDescription" id="metaDescription" />
          </div>
          <div className="form-group">
            <label htmlFor="description" />
            <input type="text" name="description" id="description" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminProducts;
