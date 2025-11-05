# 🔌 Intégration Hiboutik API - Proposition Technique

## 📋 Analyse de l'API Hiboutik

### Vue d'ensemble

**Hiboutik** est une solution de point de vente (POS) avec une API REST complète permettant de synchroniser:
- Produits et stocks
- Clients et adresses
- Ventes et transactions
- Inventaire et réapprovisionnement

---

## 🎯 Architecture de l'API

### URL de Base
```
https://[VOTRE_COMPTE].hiboutik.com/api/
```

### Authentification

Deux méthodes supportées:

#### 1. **Basic Authentication** (Recommandé pour backend)
```http
Authorization: Basic base64(user:api_key)
```

#### 2. **OAuth 2.0** (Pour applications tierces)
```http
Authorization: Bearer {access_token}
```

### Format des Données
- **Request:** JSON
- **Response:** JSON
- **Charset:** UTF-8

---

## 📦 Endpoints Principaux Disponibles

### 🛍️ Products (Produits)

| Endpoint | Méthode | Description | Scope OAuth |
|----------|---------|-------------|-------------|
| `/products/` | GET | Liste tous les produits | read_products |
| `/products/{id}` | GET | Détail d'un produit | read_products |
| `/products/` | POST | Créer un produit | write_products |
| `/products/{id}` | PUT | Modifier un produit | write_products |
| `/products/{id}` | DELETE | Supprimer un produit | write_products |

**Structure d'un Produit:**
```json
{
  "product_id": 123,
  "product_model": "Samedi 28.2",
  "product_barcode": "1234567890",
  "product_brand": "Moustache",
  "product_supplier": "Fournisseur",
  "product_price": 2799.00,
  "product_discount_price": null,
  "product_category": 5,
  "product_vat": 20,
  "product_stock_management": 1,
  "product_quantity": 10,
  "product_description": "Vélo électrique premium",
  "product_image": "url_image.jpg"
}
```

### 📊 Inventory (Stocks)

| Endpoint | Méthode | Description | Scope OAuth |
|----------|---------|-------------|-------------|
| `/inventory_levels/` | GET | Niveaux de stock | read_inventory |
| `/stock_orders/` | GET | Commandes de stock | read_inventory |
| `/stock_transfers/` | GET | Transferts de stock | read_inventory |
| `/inventory_counts/` | POST | Comptage inventaire | write_inventory |

### 👥 Customers (Clients)

| Endpoint | Méthode | Description | Scope OAuth |
|----------|---------|-------------|-------------|
| `/customers/` | GET | Liste des clients | read_customers |
| `/customers/{id}` | GET | Détail client | read_customers |
| `/customers/` | POST | Créer un client | write_customers |
| `/customers/{id}` | PUT | Modifier un client | write_customers |

**Structure d'un Client:**
```json
{
  "customer_id": 456,
  "customers_email_address": "client@email.com",
  "customers_first_name": "Jean",
  "customers_last_name": "Dupont",
  "customers_telephone": "0612345678",
  "customers_newsletter": 1
}
```

### 💰 Sales (Ventes)

| Endpoint | Méthode | Description | Scope OAuth |
|----------|---------|-------------|-------------|
| `/sales/` | GET | Liste des ventes | read_sales |
| `/sales/{id}` | GET | Détail d'une vente | read_sales |
| `/sales/` | POST | Créer une vente | write_sales |

### 📂 Categories

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/product_categories/` | GET | Liste catégories |
| `/product_categories/{id}` | GET | Détail catégorie |

---

## 🚀 Solution d'Intégration Proposée

### Option 1: Synchronisation Unidirectionnelle (Hiboutik → Site)

**Flux:** Hiboutik (source de vérité) → Application Next.js

```
┌──────────────┐
│   Hiboutik   │  ← Gestion des produits/stocks
│   (Backend)  │
└──────┬───────┘
       │ API REST
       ▼
┌──────────────────┐
│  Next.js API     │  ← Sync périodique (webhook ou cron)
│  Routes          │
└──────┬───────────┘
       │ Prisma
       ▼
┌──────────────────┐
│  PostgreSQL      │  ← Cache local des données
│  (Local DB)      │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Frontend        │  ← Affichage rapide
│  Next.js         │
└──────────────────┘
```

**Avantages:**
- ✅ Performance optimale (données en cache)
- ✅ Site fonctionnel même si Hiboutik temporairement indisponible
- ✅ SEO optimal (données statiques)
- ✅ Pas de latence API en temps réel

**Inconvénients:**
- ⚠️ Délai de synchronisation (5-15 min selon config)
- ⚠️ Complexité de la synchro

### Option 2: Requêtes en Temps Réel

**Flux:** Frontend → API Next.js → API Hiboutik

```
┌──────────────┐
│  Frontend    │
└──────┬───────┘
       │ fetch()
       ▼
┌──────────────────┐
│  Next.js API     │  ← Proxy sécurisé
│  /api/products   │
└──────┬───────────┘
       │ REST
       ▼
┌──────────────────┐
│  Hiboutik API    │  ← Données temps réel
└──────────────────┘
```

**Avantages:**
- ✅ Données toujours à jour
- ✅ Simple à implémenter
- ✅ Pas de duplication de données

**Inconvénients:**
- ⚠️ Dépendance à la disponibilité Hiboutik
- ⚠️ Latence des requêtes API
- ⚠️ Rate limiting potentiel

### Option 3: Hybride (Recommandée) ⭐

**Flux:** Cache + Webhooks + Sync périodique

```
┌──────────────┐
│   Hiboutik   │
└──────┬───────┘
       │
       ├─► Webhook (événements temps réel)
       │
       └─► Cron Job (sync complète 1x/jour)
       │
       ▼
┌──────────────────┐
│  Next.js API     │
│  + Background    │
│  Workers         │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  PostgreSQL      │  ← Cache intelligent
│  + Redis (opt.)  │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│  Frontend        │
└──────────────────┘
```

**Avantages:**
- ✅ Meilleur des deux mondes
- ✅ Performance + Fraîcheur des données
- ✅ Résilience maximale
- ✅ SEO optimal

---

## 💻 Implémentation Technique

### 1. Structure des Fichiers

```
src/
├── lib/
│   ├── hiboutik/
│   │   ├── client.ts           # Client API Hiboutik
│   │   ├── types.ts            # Types TypeScript
│   │   ├── sync.ts             # Logique de synchronisation
│   │   └── webhooks.ts         # Gestion webhooks
│   │
│   └── prisma/
│       └── schema.prisma       # Schéma DB étendu
│
├── app/
│   └── api/
│       ├── hiboutik/
│       │   ├── sync/route.ts   # Endpoint sync manuelle
│       │   └── webhook/route.ts # Réception webhooks
│       │
│       ├── products/
│       │   └── route.ts        # GET products (depuis DB locale)
│       │
│       └── cron/
│           └── sync-hiboutik/route.ts # Cron job
│
└── scripts/
    └── sync-hiboutik.ts        # Script CLI pour sync
```

### 2. Configuration (.env)

```env
# Hiboutik API Credentials
HIBOUTIK_ACCOUNT="votre-compte"
HIBOUTIK_API_USER="api_user"
HIBOUTIK_API_KEY="your-api-key"
HIBOUTIK_API_URL="https://votre-compte.hiboutik.com/api"

# OU OAuth
HIBOUTIK_OAUTH_TOKEN="oauth_access_token"

# Webhook Secret
HIBOUTIK_WEBHOOK_SECRET="webhook_secret_key"

# Sync Configuration
HIBOUTIK_SYNC_INTERVAL="*/15 * * * *"  # Toutes les 15 min
```

### 3. Client API Hiboutik

**Fichier:** `src/lib/hiboutik/client.ts`

```typescript
// Client API Hiboutik avec authentification et gestion d'erreurs

interface HiboutikConfig {
  account: string
  apiUser: string
  apiKey: string
  baseUrl?: string
}

export class HiboutikClient {
  private config: HiboutikConfig
  private baseUrl: string

  constructor(config: HiboutikConfig) {
    this.config = config
    this.baseUrl = config.baseUrl || `https://${config.account}.hiboutik.com/api`
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const auth = Buffer.from(
      `${this.config.apiUser}:${this.config.apiKey}`
    ).toString('base64')

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error_description || 'Hiboutik API Error')
    }

    return response.json()
  }

  // Products
  async getProducts() {
    return this.request<HiboutikProduct[]>('/products/')
  }

  async getProduct(id: number) {
    return this.request<HiboutikProduct>(`/products/${id}`)
  }

  async createProduct(data: CreateProductInput) {
    return this.request<HiboutikProduct>('/products/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateProduct(id: number, data: UpdateProductInput) {
    return this.request<HiboutikProduct>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // Inventory
  async getInventoryLevels() {
    return this.request('/inventory_levels/')
  }

  // Customers
  async getCustomers() {
    return this.request<HiboutikCustomer[]>('/customers/')
  }

  async createCustomer(data: CreateCustomerInput) {
    return this.request<HiboutikCustomer>('/customers/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Categories
  async getCategories() {
    return this.request('/product_categories/')
  }
}

// Singleton instance
export const hiboutikClient = new HiboutikClient({
  account: process.env.HIBOUTIK_ACCOUNT!,
  apiUser: process.env.HIBOUTIK_API_USER!,
  apiKey: process.env.HIBOUTIK_API_KEY!,
})
```

### 4. Types TypeScript

**Fichier:** `src/lib/hiboutik/types.ts`

```typescript
// Types pour l'API Hiboutik

export interface HiboutikProduct {
  product_id: number
  product_model: string
  product_barcode?: string
  product_brand?: string
  product_supplier?: string
  product_price: number
  product_discount_price?: number
  product_category?: number
  product_vat: number
  product_stock_management: 0 | 1
  product_quantity?: number
  product_description?: string
  product_image?: string
  product_created_at?: string
  product_updated_at?: string
}

export interface HiboutikCustomer {
  customer_id: number
  customers_email_address: string
  customers_first_name: string
  customers_last_name: string
  customers_telephone?: string
  customers_newsletter: 0 | 1
  customers_created_at?: string
}

export interface HiboutikCategory {
  category_id: number
  category_name: string
  category_parent?: number
}

export interface CreateProductInput {
  product_model: string
  product_price: number
  product_vat: number
  product_barcode?: string
  product_brand?: string
  product_category?: number
  product_description?: string
}

export interface UpdateProductInput extends Partial<CreateProductInput> {}

export interface CreateCustomerInput {
  customers_email_address: string
  customers_first_name: string
  customers_last_name: string
  customers_telephone?: string
  customers_newsletter?: 0 | 1
}
```

### 5. Service de Synchronisation

**Fichier:** `src/lib/hiboutik/sync.ts`

```typescript
// Service de synchronisation Hiboutik → Base de données locale

import { prisma } from '@/lib/prisma'
import { hiboutikClient } from './client'

export class HiboutikSyncService {
  // Synchroniser tous les produits
  async syncProducts() {
    console.log('[Hiboutik Sync] Starting products sync...')

    try {
      // 1. Récupérer produits depuis Hiboutik
      const hiboutikProducts = await hiboutikClient.getProducts()

      console.log(`[Hiboutik Sync] Found ${hiboutikProducts.length} products`)

      // 2. Synchroniser dans la DB
      for (const hibProduct of hiboutikProducts) {
        await prisma.product.upsert({
          where: { hiboutikId: hibProduct.product_id },
          update: {
            name: hibProduct.product_model,
            price: hibProduct.product_price,
            description: hibProduct.product_description || '',
            imageUrl: hibProduct.product_image || '',
            stock: hibProduct.product_quantity || 0,
            updatedAt: new Date(),
          },
          create: {
            hiboutikId: hibProduct.product_id,
            name: hibProduct.product_model,
            price: hibProduct.product_price,
            description: hibProduct.product_description || '',
            imageUrl: hibProduct.product_image || '',
            stock: hibProduct.product_quantity || 0,
            categoryId: hibProduct.product_category || 1,
          },
        })
      }

      console.log('[Hiboutik Sync] Products sync completed!')

      return { success: true, count: hiboutikProducts.length }
    } catch (error) {
      console.error('[Hiboutik Sync] Error:', error)
      throw error
    }
  }

  // Synchroniser les catégories
  async syncCategories() {
    const hibCategories = await hiboutikClient.getCategories()

    for (const hibCategory of hibCategories) {
      await prisma.category.upsert({
        where: { hiboutikId: hibCategory.category_id },
        update: {
          name: hibCategory.category_name,
        },
        create: {
          hiboutikId: hibCategory.category_id,
          name: hibCategory.category_name,
          description: '',
        },
      })
    }
  }

  // Synchronisation complète
  async syncAll() {
    await this.syncCategories()
    await this.syncProducts()
    // ... autres ressources
  }
}

export const syncService = new HiboutikSyncService()
```

### 6. API Route de Synchronisation

**Fichier:** `src/app/api/hiboutik/sync/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { syncService } from '@/lib/hiboutik/sync'

// Endpoint pour déclencher une synchronisation manuelle
// GET /api/hiboutik/sync
export async function GET(request: NextRequest) {
  try {
    // Vérifier un secret token pour sécuriser
    const authHeader = request.headers.get('authorization')
    const expectedToken = `Bearer ${process.env.SYNC_SECRET_TOKEN}`

    if (authHeader !== expectedToken) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Lancer la synchronisation
    const result = await syncService.syncAll()

    return NextResponse.json({
      success: true,
      message: 'Synchronization completed',
      ...result,
    })
  } catch (error) {
    console.error('Sync error:', error)
    return NextResponse.json(
      { error: 'Synchronization failed' },
      { status: 500 }
    )
  }
}
```

### 7. Webhook Handler

**Fichier:** `src/app/api/hiboutik/webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hiboutikClient } from '@/lib/hiboutik/client'

// Endpoint pour recevoir les webhooks Hiboutik
// POST /api/hiboutik/webhook
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()

    // Vérifier la signature du webhook
    const signature = request.headers.get('x-hiboutik-signature')
    // ... validation de signature

    // Traiter l'événement selon le type
    switch (payload.event_type) {
      case 'product.updated':
        await handleProductUpdate(payload.data.product_id)
        break

      case 'product.created':
        await handleProductCreate(payload.data.product_id)
        break

      case 'stock.updated':
        await handleStockUpdate(payload.data)
        break

      default:
        console.log(`Unknown event: ${payload.event_type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleProductUpdate(productId: number) {
  // Récupérer le produit mis à jour depuis Hiboutik
  const hibProduct = await hiboutikClient.getProduct(productId)

  // Mettre à jour dans la DB locale
  await prisma.product.update({
    where: { hiboutikId: productId },
    data: {
      name: hibProduct.product_model,
      price: hibProduct.product_price,
      stock: hibProduct.product_quantity,
      updatedAt: new Date(),
    },
  })
}
```

### 8. Schéma Prisma Étendu

**Fichier:** `prisma/schema.prisma`

```prisma
model Category {
  id          Int       @id @default(autoincrement())
  hiboutikId  Int?      @unique  // ID depuis Hiboutik
  name        String
  description String
  products    Product[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Product {
  id          Int       @id @default(autoincrement())
  hiboutikId  Int?      @unique  // ID depuis Hiboutik
  name        String
  price       Float
  description String    @db.Text
  imageUrl    String
  stock       Int       @default(0)
  barcode     String?
  brand       String?
  categoryId  Int
  category    Category  @relation(fields: [categoryId], references: [id])
  lastSyncAt  DateTime? // Dernière sync Hiboutik
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@index([hiboutikId])
  @@index([categoryId])
}
```

---

## 📅 Plan d'Implémentation

### Phase 1: Setup (1-2 jours)
- [ ] Créer compte Hiboutik test
- [ ] Obtenir credentials API
- [ ] Configurer variables d'environnement
- [ ] Tester connexion API avec Postman

### Phase 2: Client API (2-3 jours)
- [ ] Implémenter HiboutikClient
- [ ] Créer types TypeScript
- [ ] Ajouter gestion d'erreurs
- [ ] Tests unitaires

### Phase 3: Synchronisation (3-4 jours)
- [ ] Implémenter SyncService
- [ ] Étendre schéma Prisma
- [ ] Créer migration DB
- [ ] API route de sync manuelle
- [ ] Logs et monitoring

### Phase 4: Webhooks (2 jours)
- [ ] Configurer webhooks Hiboutik
- [ ] Implémenter handler
- [ ] Validation signatures
- [ ] Tests événements temps réel

### Phase 5: Automatisation (1-2 jours)
- [ ] Cron job sync périodique
- [ ] Dashboard monitoring
- [ ] Alertes erreurs
- [ ] Documentation admin

### Phase 6: Frontend (2-3 jours)
- [ ] Adapter pages catalogue
- [ ] Affichage stocks temps réel
- [ ] Indicateurs de disponibilité
- [ ] Tests E2E

**Durée totale estimée: 11-16 jours**

---

## 💰 Coûts et Considérations

### API Hiboutik
- **Gratuit** avec abonnement Hiboutik
- Vérifier les limites de rate limiting
- Prévoir cache pour réduire appels API

### Infrastructure
- Aucun coût supplémentaire (Next.js + Vercel)
- PostgreSQL déjà en place
- Optionnel: Redis pour cache avancé (~$10-20/mois)

---

## ⚠️ Points d'Attention

1. **Rate Limiting**
   - Respecter les limites d'appels API
   - Implémenter retry logic
   - Cache intelligent

2. **Sécurité**
   - Ne jamais exposer credentials côté client
   - Valider signatures webhooks
   - Sanitiser données entrantes

3. **Performance**
   - Synchronisation asynchrone
   - Ne pas bloquer l'UI
   - Pagination pour grandes quantités

4. **Résilience**
   - Gestion d'erreurs robuste
   - Retry automatique
   - Fallback sur cache local

5. **Monitoring**
   - Logs détaillés
   - Alertes sur échecs
   - Dashboard de santé

---

## 📊 Métriques de Succès

- ✅ Synchronisation < 5 minutes
- ✅ Disponibilité 99.9%
- ✅ Stocks toujours à jour (< 1h délai)
- ✅ 0 perte de données
- ✅ Performance catalogue maintenue

---

## 🎯 Recommandation Finale

**Je recommande l'Option 3 (Hybride)** pour votre projet car:

1. ✅ **Performance optimale** - Données en cache local
2. ✅ **Fraîcheur garantie** - Webhooks pour mises à jour instantanées
3. ✅ **Résilience** - Site fonctionnel même si Hiboutik down
4. ✅ **SEO** - Pages statiques avec données complètes
5. ✅ **Scalabilité** - Supporte forte charge

Cette solution offre le meilleur équilibre entre temps réel et performance pour un site e-commerce professionnel.

---

**Prêt à démarrer l'intégration ?** 🚀

Je peux commencer par implémenter le client API et les types TypeScript si vous validez cette approche.
