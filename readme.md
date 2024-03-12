# Demo Web API 02 - Swagger
Mise en place d'un API documenté avec Swagger

## Fonctionnalité de l'API 
Gestion d'équipe pour des activités sportives
- Ajouter ou modifier des joueurs
- Ajouter, Modifier, supprimer une équipe
- Ajouter ou retirer des joueurs dans une equipe

### Structure de données
Equipe:
- Nom
- Sport
- Périodicité
- Joueurs

Joueur:
- Email
- Prenom
- Nom

## Dépendences
Prod
- express
- express-async-errors
- dotenv
- morgan
Dev
- nodemon