# 🏕️ Camplyze

**Plateforme de gestion moderne pour centres de loisirs et collectivités**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-06B6D4.svg)](https://tailwindcss.com/)

## ✨ Fonctionnalités

### 🔐 Authentification Multi-Rôles
- **Collectivités** : Interface d'administration complète
- **Directeurs** : Gestion d'équipe et séjours
- **Animateurs** : Suivi des activités

### 🎨 Interface Moderne
- **Design responsive** adaptatif mobile/desktop
- **Dashboard personnalisés** par rôle
- **Upload d'avatars** avec preview temps réel
- **Animations fluides** et feedback utilisateur

### 🛠️ Gestion Complète
- **Création et gestion d'équipes**
- **CRUD directeurs/animateurs** 
- **Système de notifications**
- **Profils utilisateurs éditables**

## 🚀 Technologies

### Frontend
- **React 18** + TypeScript
- **Vite** (build tool moderne)
- **Tailwind CSS** (styling utility-first)
- **React Router** (navigation SPA)
- **Lucide React** (icônes)

### Backend  
- **Node.js** + Express
- **Prisma ORM** (base de données)
- **SQLite** (développement)
- **JWT** (authentification sécurisée)
- **Multer** (upload de fichiers)

### Sécurité
- **Cookies httpOnly** (sessions sécurisées)
- **Hachage bcrypt** (mots de passe)
- **Middleware d'authentification**
- **Contrôle d'accès par rôle**

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### 1. Cloner le projet
```bash
git clone https://github.com/votre-username/camplyze.git
cd camplyze
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration environnement
```bash
# Créer le fichier .env
echo "DATABASE_URL=\"file:./dev.db\"" > .env
echo "JWT_SECRET=\"your-super-secret-key\"" >> .env
```

### 4. Initialiser la base de données
```bash
npx prisma generate
npx prisma db push
```

### 5. Lancer l'application
```bash
# Terminal 1 : Backend
npm run server

# Terminal 2 : Frontend  
npm run dev
```

L'application sera accessible sur :
- **Frontend** : http://localhost:5173
- **API** : http://localhost:4000

## 🎯 Utilisation

### 1. Créer une collectivité
- Aller sur http://localhost:5173
- Cliquer "Démarrer gratuitement"
- Remplir le formulaire d'inscription

### 2. Dashboard administrateur
- **Profil** : Modifier informations, upload avatar
- **Équipe** : Créer/gérer directeurs
- **Statistiques** : Vue d'ensemble globale

### 3. Connexion équipe
- Utiliser "Se Connecter > Équipe"  
- Dashboard adapté au rôle (directeur/animateur)
- Profil éditable avec organisation

## 📱 Responsive Design

L'application est **100% responsive** :

- **Mobile** (375px+) : Layout vertical optimisé
- **Tablet** (768px+) : Grilles 2 colonnes
- **Desktop** (1024px+) : Interface complète multi-colonnes

## 🏗️ Architecture

```
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── ui/             # System design (Avatar, Card, Badge...)
│   │   └── ...             # Header, Footer, etc.
│   ├── pages/              # Pages principales
│   │   ├── auth/           # Pages d'authentification
│   │   └── dashboards/     # Tableaux de bord
│   ├── auth/               # Contexte d'authentification
│   └── ...
├── server/                 # API Express
├── prisma/                 # Schéma base de données
└── uploads/               # Fichiers uploadés (ignoré git)
```

## 📊 Base de Données

### Modèles Prisma

**Organization** : Collectivités
- id, name, email, plan, createdAt

**User** : Utilisateurs multi-rôles  
- id, email, firstName, lastName, role, avatar, organizationId

**Camp** : Séjours (placeholder)
- id, name, startsAt, endsAt, organizationId

## 🔧 Scripts Disponibles

```bash
npm run dev          # Démarrer frontend (Vite)
npm run server       # Démarrer backend (Express) 
npm run build        # Build production
npm run lint         # Linter ESLint
npm run preview      # Preview build production
```

## 🛡️ Sécurité

- **JWT sécurisés** avec cookies httpOnly
- **Validation côté serveur** pour toutes les routes
- **Contrôle d'accès** par rôle utilisateur
- **Upload sécurisé** avec validation type/taille
- **Hachage mot de passe** bcrypt

## 🚀 Déploiement

### Production recommandée
- **Frontend** : Vercel, Netlify
- **Backend** : Railway, Render, DigitalOcean
- **Base de données** : PostgreSQL (Supabase, PlanetScale)

### Variables d'environnement production
```bash
DATABASE_URL="postgresql://..."
JWT_SECRET="complex-secret-key-256-bits"
NODE_ENV="production"
```

## 🎉 État du Projet

✅ **Système d'authentification** complet et sécurisé  
✅ **Dashboards** modernes et responsives  
✅ **Upload d'images** fonctionnel  
✅ **API REST** complète  
✅ **Design system** cohérent  
✅ **Mobile-first** responsive  

**Prêt pour la production !** 🚀
