import express from 'express';
const router = express.Router();
import pkg from 'sequelize';
const { QueryTypes, Op } = pkg;
import getConnexion from '../../models/getConnexion.js';
import { check, validationResult } from 'express-validator';
import Product from '../../models/Product.js';

/**
 * @route POST /api/cart
 * filtrer req.body, peut être envoyer un objet
 * @route inutilisee, demo pour utiliser SELECT ... IN ..
 */
router.post(
  '/',
  [check('ids', 'Un probleme est survenu').isArray()],
  async function (req, res) {
    //
    try {
      const errors = validationResult(req);
      const ids = req.body.ids;
      console.log(ids);
      for (let id of ids) {
        if (!parseInt(id)) {
          return res.status(400).json({ errors: ['Id incorrect'] });
        }
      }
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let productInstance = Product();

      // Faire une requête pour aller chercher les produits dont l'id est parmi celle qu'on a en param
      // Nos ids sont un tableau
      // SELECT * FROM `products` WHERE id IN (2, 3)
      // Chercher la méthode de sequelize qui permet de faire des requêtes de type IN

      const products = await productInstance.findAll({
        where: {
          id: {
            [Op.in]: ids, // Ne pas utiliser req.body directement
          },
        },
      });
      // const sequelize = getConnexion();
      // const products = await sequelize.query(
      //   'SELECT * FROM products WHERE id IN(:ids)',
      //   {
      //     replacements: { ids: ids },  // Ne pas utiliser req.body directement
      //     type: QueryTypes.SELECT,
      //   }
      // );

      res.status(200).json(products);
    } catch (e) {
      console.error(e);
      console.error(e.message);
      res.status(500).send('Server Error');
    }
  }
);

export default router;
