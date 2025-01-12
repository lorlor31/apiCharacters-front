# PROJET REACT VITE FROM SCRATCH

## Créer le projet

` npm create vite@latest`
`npm install axios`
## Organisation des dossiers

cf la structure du projet

```bash

my-app/
│
├── public/                          # Dossier pour les fichiers statiques
│   └── index.html                   # Fichier HTML principal
│
├── src/                             # Dossier source pour le code de l'application
│   ├── assets/                      # Ressources statiques comme images, polices, etc.
│   ├── components/                  # Dossier pour les composants réutilisables
│   │   └── Character.js             # Composant Character
│   │   └── Header.js                # Composant Header
│   │   └── Button.js                # Composant Button (exemple de composant réutilisable)
│   ├── pages/                       # Dossier pour les pages spécifiques
│   │   └── CharacterPage.js         # Page Character qui utilise le composant Character
│   ├── App.js                       # Point d'entrée principal de l'application
│   ├── main.js                      # Fichier de démarrage avec ReactDOM.render()
│   └── style.css                    # Fichier de style global
│
├── .gitignore                       # Fichier gitignore pour ignorer certains fichiers
├── package.json                     # Dépendances et scripts du projet
├── vite.config.js                   # Configuration de Vite
└── README.md                        # Documentation du projet


```


## Problème de CORS

Résolution temporaire en attendant de config le CORS sur l'api
ajouter un proxy dans vite.config.js

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/characters': {
        target: 'http://0.0.0.0:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

```

et remplacer l'adresse 
dans `const response = await axios.get(`http://0.0.0.0:8000/characters/1`);`
par `const response = await axios.get(`/characters/1`);`