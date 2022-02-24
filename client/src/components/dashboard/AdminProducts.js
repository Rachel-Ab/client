import React, { useContext } from 'react';

// Les champs name pour créer un prod category_id, title, metaDescription, description, priceHT
// + image
const AdminProducts = () => {
  return (
    <div>
      Page admin products
      <p>Recupérer tous les produits</p>
      <p>Faire un form pour créer un produit</p>
      <p>Faire un form pour mettre a jour les produits</p>
      <p>
        Quand on clique sur un produit de la liste, le formulaire de pré-remplit
      </p>
      <p>
        Récuperer les categories pour en associer une au produit que l'on créer
      </p>
    </div>
  );
};

export default AdminProducts;
