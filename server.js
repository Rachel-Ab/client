import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { param } from 'express-validator';
dotenv.config();
import cors from 'cors';
import dbconnexion from './db/index.js';
import usersRoutes from './routes/api/users.js';
import authRoutes from './routes/api/auth.js';
import categoriesRoutes from './routes/api/categories.js';
import articlesRoutes from './routes/api/articles.js';
import rolesRoutes from './routes/api/roles.js';
import stepsRoutes from './routes/api/reduxsteps.js';
import productsRoutes from './routes/api/products.js';
import cartRoutes from './routes/api/cart.js';
import installRoute from './install.js';

// Import pour tester les middleware avec controlleurs
import auth from './middleware/auth.js';
import getOneCategory from './routes/api/getOneCategory.js';
import { checkReq } from './middleware/checkReq.js';
//

const port = process.env.PORT || 5000;

//app.set('query parser', 'simple'); // Ne parse les query string qu'en string, pas en objets ou autre format de données.
app.use(cors());
app.use(express.json({ limit: '5mb', extended: false }));

app.get('/', (req, res) => res.send('API running'));

app.get('/install', installRoute); // Installation de l'application

// Middleware avec controlleurs : checkReq est un tableau situe dans le fichier middleware/checkReq.js, cette fonction ne fait que verifier un parametre nomme id
// getOneCategory est la fonction qui tourne si la validation passe : elle recupere une categorie
// Si on essaye l'URL http://localhost/api/categories/string : la validation ne passera pas
// Si on essaye l'URL http://localhost/api/categories/2 : 2 etant une id de categorie qui existe : la validation passe et on a la categorie en reponse
app.use('/api/categories/:id', checkReq, getOneCategory);
// Si on veut utiliser plusieurs middleware il faudra les mettre dans un tableau :
// Ici la requete plantera si on est pas authentifie.
// app.use('/api/categories/:id',  [auth, checkReq], getOneCategory);
app.get(
  '/uploads/:image',
  param('image', 'image is incorrect').escape().isString(),
  async (req, res) => {
    res
      .set('Content-Type', 'image/*')
      .sendFile(
        `/home/laurent/public_html/reactshop/uploads/${req.params.image}`
      );
  }
);
app.use('/blog/steps', stepsRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);

// Connect to SQL
dbconnexion();
app.listen(port);
