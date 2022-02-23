# Pagination

--- 


Pour faire une pagination, il faut 'jouer' avec les produits qu'on selectionne. Par exemple la requete suivante :
```sql
SELECT * FROM products LIMIT 10 OFFSET 5;
```
va limiter a 10 le nombre de produits qu'on va selectionner et OFFSET 5 va permettre d'omettre les 5 premiers produits de la BDD.  
Il suffit donc de faire quelque calculs et d'envoyer les donnees au client pour qu'il les retransmettent a la prochaine requete, qui est la requete executee lorsque qu'on clique sur le bouton pour afficher plus de produits.  
Pour calculer le nombre de pages qu'on va avoir, il faut savoir combien de produits on souhaite afficher par pages et connaitre le nombre de produits que l'on a en BDD.
```sql
-- Obtenir le nombre de produits
SELECT COUNT(id) FROM products;
```
Le nombre de pages sera egale a (`nombre de produits / nombre de produits a afficher`)

Pour que conserver les informations, il faudra envoyer un objet a chaque requete qui contient ces informations : Exemple pour afficher 20 produits par pages, avec 100 produits dans la BDD :
```javascript
const nbrProdPerPage = 20;
const nbrTotalProd = 100 // En vrai resultat de la requete SELECT COUNT
const nbrPages = nbrTotalProd / nbrProdPerPage; // 5 pages

const infos = {
    nbrProdPerPage,
    nbrTotalProd,
    nbrPages
}

res.status(200).json({products, infos});
```
la premiere requete sera `SELECT * FROM products LIMIT 20 OFFSET 0`, 
et on va envoyer au client les 20 premiers produits que l'on a trouve dans la BDD.
Avec l'objet `infos`, on pourra savoir combien de boutons afficher :
![illustration](/blog/pagination.png "exemple")  
Chaque bouton contiendra les informations necessaire pour effectuer la prochaine requete et obtenir les 20 produits correspondants a la page voulue. Si on clique sur le bouton `2`, on enverra en `QUERY STRING`  l'`OFFSET` correspondant : 20, la requete devrait ressembler a `/api/products?offset=20` et la requete effectue en base de donnees sera `SELECT * FROM PRODUCTS LIMIT 20 OFFSET 20;`

Si on clique sur le bouton `3`, on enverra en `QUERY STRING`  l'`OFFSET` correspondant : 40, la requete devrait ressembler a `/api/products?offset=40` et la requete effectue en base de donnees sera `SELECT * FROM PRODUCTS LIMIT 20 OFFSET 40;` etc etc...

Maintenant pour developper ce truc la, il faudra y reflechir, regarder des exemples disponibles sur le web, et se casser un peu la tete 😀 💀.
