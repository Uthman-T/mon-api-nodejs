![logo](https://img.shields.io/badge/npm-v11.9.0-blue)
![logo](https://img.shields.io/badge/npm-v25.6.1-blue)
![logo](https://img.shields.io/badge/Javascript-yellow)

# Mon API nodejs

# Table des matières

- [Document des spécialisations fonctionnelles] [1]
- [Documentation technique] [2]

[1]: ./functional_doc.md

## Description du projet
Il s'agit d'une API pour la gestion centralisé d'un forum.

## A qui s'adresse ce projet ?
Ce projet est destiné à des developpeurs qui souhaitent avoir un back qui communique avec differentes plateformes.

## Dépendances
```JSON

"dependencies": {
    "bcrypt": "^6.0.0",
    "cors": "^2.8.6",
    "cross-env": "^10.1.0",
    "dotenv": "^17.3.1",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongodb": "^7.1.0",
    "mongoose": "^9.2.3",
    "morgan": "^1.10.1",
    "nodemon": "^3.1.14",
    "redis": "^5.11.0",
    "sanitize-html": "^2.17.1"
},
"devDependencies": {
    "@eslint/js": "^10.0.1",
    "@faker-js/faker": "^10.3.0",
    "eslint": "^10.0.2",
    "globals": "^17.4.0"
}
```
## Instruction d'utilisation
Pour commencer à utiliser l'API, il suffit de cloner le projet.

### Installer le projet
1. Cloner le projet

    ```bash
    git clone https://github.com/Uthman-T/mon-client-nodejs.git
    ```

2. Changer le remote
    > Prérequis : vous devez créer un repository en amont sur votre compte github

    ```bash
    cd nom-dossier-projet/
    git add remote origin https://github.com/votre_pseudo/votre_repository.git
    git push -u origin nom-branch
    ```
3. Installer des dépendances

    ```bash
    npm install
    ```

## Exécuter le projet

```bash
npm run start
```
