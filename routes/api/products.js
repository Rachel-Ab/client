import express from 'express';
import multer from 'multer';
const upload = multer({ dest: 'uploads' });
const router = express.Router();
import { check, param, validationResult } from 'express-validator';
import auth from '../../middleware/auth.js';
import Product from '../../models/Product.js';
import Category from '../../models/Category.js';
/**
 * @route GET /api/products
 */
router.get('/', async function (req, res) {
  //
  try {
    let productInstance = Product();
    // Exemple pour implementer un pagination
    // Le parametre offset doit venir de la requete en query string
    // Ne pas oublier de filtrer cette offset avant le mot cle async...
    let offset = 0;
    if (req.query.offset) {
      offset = req.query.offset;
    }

    const products = await productInstance.findAll({
      limit: 10,
      offset: offset,
    });

    res.status(200).json(products);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route GET /api/products/:id
 * @param INT id
 */
router.get('/:id', param('id').isInt(), async function (req, res) {
  //
  try {
    const { id } = req.params;
    let productInstance = Product();

    const product = await productInstance.findOne({ where: { id } });

    res.status(200).json(product);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
});

/**
 *
 * @route POST api/products/create
 * @body object product
 * @doNotForget validation
 */
router.post('/create', [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { category_id, title, metaDescription, description, priceHT, image } =
      req.body;

    const catInstance = Category();

    const cat = await catInstance.findOne({
      where: {
        id: category_id,
      },
    });
    let productInstance = Product();

    const product = await productInstance.create({
      category_id: cat.id,
      title: title,
      metaDescription: metaDescription,
      priceHT: priceHT,
      /*req.file.path.replace('uploads', 'http://localhost:5000/uploads')*/
      image: image,
      description: description,
    });

    res.status(200).json({ product, msg: 'Article cree' });
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route PATCH api/products/update
 * @body object category
 */
router.patch(
  '/update',
  [auth, [check('title', 'le titre est pas correct').trim().escape()]],
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      id,
      metaDescription,
      category_id,
      title,
      description,
      priceHT,
      image,
    } = req.body;

    try {
      const prodInstance = Product();

      // update products SET title = '?' where id = '?';
      // bindParam pour title tous les champs concernés
      // Ensuite on exécute la requête.
      await prodInstance.update(
        {
          title: title,
          metaDescription: metaDescription,
          category_id: category_id,
          description: description,
          priceHT: priceHT,
          image: image,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({ msg: 'Products updated' });
    } catch (e) {
      res.status(400).send('Server Error');
    }
  }
);

/**
 * @route POST api/products/destroy
 * @body json
 */
router.delete(
  '/destroy',
  [auth, [check('id', 'Id doit etre un  nombre').trim().escape().isInt()]],
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.body;
      const prodInstance = Product();
      await prodInstance.destroy({ where: { id: id } });

      res.status(200).json({ msg: 'Bye Bye product !!' });
    } catch (e) {
      res.status(400).send('Server Error');
    }
  }
);

export default router;
