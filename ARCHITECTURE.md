# 🏗️ Architecture du Projet - Antibe Cycles AZUR

## 📋 Vue d'ensemble

Application e-commerce Next.js 15 (App Router) pour la vente et location de vélos électriques premium avec système de réservation intégré.

---

## 🎯 Stack Technologique

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND STACK                        │
├─────────────────────────────────────────────────────────┤
│ Framework       │ Next.js 15 (App Router)               │
│ Language        │ TypeScript 5.x                        │
│ Styling         │ Tailwind CSS 3.x                      │
│ State Mgmt      │ React Context API                     │
│ UI Components   │ Custom Components                     │
│ Maps            │ Mapbox GL                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    BACKEND STACK                         │
├─────────────────────────────────────────────────────────┤
│ API Routes      │ Next.js API Routes                    │
│ Database        │ PostgreSQL (via Prisma)               │
│ ORM             │ Prisma 5.x                            │
│ Validation      │ TypeScript Types                      │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Structure de l'Architecture

```
moustache-bike/
│
├── 📱 FRONTEND (src/)
│   │
│   ├── app/                          # Pages (App Router Next.js 15)
│   │   ├── layout.tsx               # Layout principal + Header/Footer
│   │   ├── page.tsx                 # 🏠 Page d'accueil
│   │   │
│   │   ├── catalogue/               # 🚴 Catalogue vélos
│   │   │   └── page.tsx
│   │   │
│   │   ├── produit/[id]/           # 📄 Détail produit
│   │   │   └── page.tsx
│   │   │
│   │   ├── location/               # 📅 Location vélos
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/               # 💳 Panier & Paiement
│   │   │   ├── page.tsx
│   │   │   └── success/
│   │   │
│   │   ├── atelier/                # 🔧 Services atelier
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/                   # 📝 Blog
│   │   │   ├── page.tsx
│   │   │   ├── [id]/page.tsx
│   │   │   └── reglage-postural/
│   │   │
│   │   ├── contact/                # 📞 Contact
│   │   │   └── page.tsx
│   │   │
│   │   └── api/                    # 🔌 API Routes
│   │       ├── products/
│   │       │   ├── route.ts       # GET /api/products
│   │       │   └── [id]/route.ts  # GET /api/products/:id
│   │       └── categories/
│   │           └── route.ts       # GET /api/categories
│   │
│   ├── components/                  # 🎨 Composants réutilisables
│   │   ├── Hero.tsx                # Hero sections
│   │   ├── ProductCard.tsx         # Carte produit
│   │   ├── ProductCarousel.tsx     # Carrousel produits
│   │   ├── CartButton.tsx          # Bouton panier
│   │   ├── CartModal.tsx           # Modal panier
│   │   ├── BookingForm.tsx         # Formulaire réservation
│   │   ├── LocationForm.tsx        # Formulaire location
│   │   ├── PaymentForm.tsx         # Formulaire paiement
│   │   ├── MapboxMap.tsx          # Carte interactive
│   │   ├── VirtualAssistant.tsx   # Assistant virtuel
│   │   └── BlogCard.tsx           # Carte article blog
│   │
│   ├── contexts/                    # 🔄 Context API
│   │   └── CartContext.tsx         # État global du panier
│   │
│   ├── types/                       # 📘 Définitions TypeScript
│   │   ├── api.ts                  # Types API
│   │   ├── business.ts             # Types métier
│   │   ├── cart.ts                 # Types panier
│   │   ├── display.ts              # Types affichage
│   │   ├── constants.ts            # Constantes
│   │   └── css.d.ts               # Déclarations CSS
│   │
│   └── hooks/                       # 🪝 Custom Hooks
│       └── useWindowSize.ts        # Hook taille fenêtre
│
├── 💾 DATABASE (prisma/)
│   ├── schema.prisma               # Schéma base de données
│   ├── migrations/                 # Migrations DB
│   └── seed.ts                    # Données de test
│
├── 🎨 STYLES
│   ├── src/app/globals.css        # Styles globaux
│   ├── tailwind.config.js         # Config Tailwind
│   └── postcss.config.js          # Config PostCSS
│
└── ⚙️ CONFIGURATION
    ├── next.config.ts             # Config Next.js
    ├── tsconfig.json              # Config TypeScript
    ├── eslint.config.mjs          # Config ESLint
    └── package.json               # Dépendances
```

---

## 🔄 Flux de Données

### 1️⃣ Navigation Client → Page

```
┌─────────────┐
│   Client    │
│   Browser   │
└──────┬──────┘
       │ (Request URL)
       ▼
┌─────────────────────────────────┐
│     Next.js App Router          │
│  (Server Components by default) │
└──────┬──────────────────────────┘
       │
       ├─► /                    → app/page.tsx
       ├─► /catalogue           → app/catalogue/page.tsx
       ├─► /produit/[id]        → app/produit/[id]/page.tsx
       ├─► /location            → app/location/page.tsx
       ├─► /checkout            → app/checkout/page.tsx
       └─► /blog                → app/blog/page.tsx
```

### 2️⃣ API Call Flow

```
┌──────────────┐
│  Component   │
│ (Client Side)│
└──────┬───────┘
       │ fetch()
       ▼
┌─────────────────────┐
│   API Routes        │
│ /api/products       │
│ /api/categories     │
└──────┬──────────────┘
       │ Prisma Client
       ▼
┌─────────────────────┐
│   PostgreSQL        │
│   Database          │
└─────────────────────┘
```

### 3️⃣ Cart Management (Context)

```
┌────────────────────┐
│  CartProvider      │
│  (Context API)     │
└─────────┬──────────┘
          │
    ┌─────┴──────┬────────────┬──────────────┐
    ▼            ▼            ▼              ▼
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌──────────┐
│ Product │  │  Cart   │  │Checkout │  │  Cart    │
│  Card   │  │ Button  │  │  Page   │  │  Modal   │
└─────────┘  └─────────┘  └─────────┘  └──────────┘

Actions disponibles:
- addToCart(product)
- removeFromCart(productId)
- updateQuantity(productId, qty)
- clearCart()
```

---

## 🎨 Design System

### Palette de couleurs

```css
:root {
  --primary-black: #000000;      /* Fond principal */
  --secondary-black: #1a1a1a;    /* Cartes et composants */
  --accent-gold: #d4af37;        /* Accent doré premium */
  --accent-silver: #c0c0c0;      /* Texte secondaire */
  --border-color: #333333;       /* Bordures */
}
```

### Composants Styled

```
┌─────────────────────────────────────────────┐
│          DESIGN COMPONENTS                  │
├─────────────────────────────────────────────┤
│ • Hero Sections    → Bannières plein écran │
│ • Product Cards    → Cartes produits       │
│ • Cart Modal       → Modal panier          │
│ • Buttons          → Effets shimmer/pulse  │
│ • Forms            → Formulaires stylés    │
│ • Virtual Assist.  → Assistant flottant    │
└─────────────────────────────────────────────┘
```

### Animations CSS

- `button-shimmer` - Effet scintillant
- `button-pulse` - Pulsation dorée
- `button-glow-intense` - Effet lumineux au survol
- `hover-glow` - Box-shadow doré
- `slideUp` - Animation d'apparition

---

## 🗄️ Modèle de Données (Prisma)

```prisma
┌──────────────────────┐
│     Category         │
├──────────────────────┤
│ id: Int (PK)        │
│ name: String        │
│ description: String │
│ products ──────────┐│
└────────────────────┘│
                      │
                      │ 1:N
                      ▼
┌──────────────────────┐
│      Product         │
├──────────────────────┤
│ id: Int (PK)        │
│ name: String        │
│ price: Float        │
│ description: Text   │
│ imageUrl: String    │
│ categoryId: Int (FK)│
│ specs: Json         │
│ createdAt: DateTime │
│ updatedAt: DateTime │
└──────────────────────┘
```

---

## 🔐 Sécurité

### Protection actuelle
- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Input validation (types)
- ✅ CORS handled by Next.js
- ✅ SQL injection protection (Prisma)

### À implémenter (Payload CMS)
- 🔄 Authentication & Authorization
- 🔄 Role-based access control
- 🔄 API rate limiting
- 🔄 CSRF protection
- 🔄 Environment variables validation

---

## 🚀 Déploiement

### Stack de Déploiement

```
┌─────────────────────────────────────────┐
│          PRODUCTION STACK               │
├─────────────────────────────────────────┤
│ Hosting      │ Vercel                  │
│ Database     │ PostgreSQL (Cloud)      │
│ CDN          │ Vercel Edge Network     │
│ Repository   │ GitHub                  │
│ CI/CD        │ Vercel Auto-Deploy      │
└─────────────────────────────────────────┘
```

### Workflow Git

```
Local Dev → Git Commit → GitHub Push → Vercel Deploy
    ↓
  npm run dev
    ↓
  http://localhost:3000
```

---

## 📊 Pages & Routes

| Route | Page | Type | Description |
|-------|------|------|-------------|
| `/` | Accueil | SSR | Page principale avec hero et produits |
| `/catalogue` | Catalogue | SSR | Liste des vélos disponibles |
| `/produit/[id]` | Détail | SSR | Fiche produit détaillée |
| `/location` | Location | CSR | Réservation avec carte |
| `/checkout` | Panier | CSR | Validation commande |
| `/checkout/success` | Confirmation | SSR | Page de succès |
| `/atelier` | Atelier | SSR | Services d'entretien |
| `/blog` | Blog | SSR | Liste articles |
| `/blog/[id]` | Article | SSR | Détail article |
| `/contact` | Contact | SSR | Formulaire de contact |
| `/apropos` | À propos | SSR | Présentation entreprise |

**Légende:**
- SSR = Server-Side Rendering
- CSR = Client-Side Rendering

---

## 🎯 Fonctionnalités Principales

### ✅ Implémentées

1. **E-Commerce**
   - Catalogue produits avec filtres
   - Panier d'achat (Context API)
   - Checkout simplifié
   - Page de confirmation

2. **Location**
   - Formulaire de réservation
   - Carte interactive (Mapbox)
   - Calcul des tarifs

3. **Contenu**
   - Blog avec images Unsplash
   - Pages services (atelier, réglage postural)
   - FAQ intégrée

4. **UX**
   - Assistant virtuel statique
   - Design responsive
   - Animations premium
   - Navigation intuitive

### 🔄 À Développer (avec Payload CMS)

1. **Backend Admin**
   - Panel d'administration
   - Gestion produits
   - Gestion réservations
   - Gestion blog

2. **Authentification**
   - Login admin
   - Espace client
   - Suivi commandes

3. **Paiement**
   - Intégration Stripe
   - Gestion transactions
   - Facturation

---

## 📦 Dépendances Principales

```json
{
  "next": "15.5.4",
  "react": "^19",
  "typescript": "^5",
  "prisma": "^5.22.0",
  "@prisma/client": "^5.22.0",
  "tailwindcss": "^3.4.17",
  "mapbox-gl": "^3.9.1"
}
```

---

## 🔮 Roadmap - Intégration Payload CMS

### Phase 1: Installation
- [ ] Installation Payload CMS
- [ ] Configuration MongoDB/PostgreSQL
- [ ] Setup admin panel

### Phase 2: Collections
- [ ] Collection Products
- [ ] Collection Categories
- [ ] Collection Blog Posts
- [ ] Collection Bookings
- [ ] Collection Orders

### Phase 3: Intégration
- [ ] Remplacer données statiques
- [ ] API Payload → Frontend
- [ ] Media management
- [ ] SEO optimization

### Phase 4: Fonctionnalités avancées
- [ ] Système de paiement
- [ ] Gestion clients
- [ ] Emails automatiques
- [ ] Analytics

---

## 📞 Contact & Support

**Développeur:** Aurélien LAVAYSSIERE
**Entreprise:** GestionMax
**Localisation:** Antibes, France

---

*Document généré le 05/11/2025*
*Version: 1.0.0*
