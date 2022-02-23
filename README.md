# React E-commerce example

---

Technologies utilisées pour ce projet :
React, Express, MySQL, Nodejs

La librairie utilisée pour se connecter a la BDD est sequelize

## Pour installer le projet :


1. Renommer `.env.example` en `.env`.
2. Mettre les informations de connection a la BDD dans le fichier .env (`DB_NAME`, `DB_HOST`, `DB_PASSWD`, `DB_USERNAME`, `DB_ENV`).
3. Dans le terminal, faire `cd /chemin/du/projet`.
4. Exécuter `npm run init`.
5. Exécuter `npm run watch`.
6. Aller sur l'url `http://localhost:5000/install`, ce script installe un base de données avec un admin : login: `admin@admin.com` pwd: `admin`, une catégorie, un produit et 3 roles utilisateurs.
7. Le site est installé, vous pouvez aller sur `http://localhost:3000`
8. Faire fonctionner le front avec l'API Context de React
9. Créer les composants qui correspondent aux routes : /shop : composant Shop.jsx, dans ce composant on récupère les catégories et les produits, et on les affiche
