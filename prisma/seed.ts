import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const vttCategory = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'VTT électrique',
      description: 'Vélos tout-terrain électriques pour les aventures en nature'
    }
  })

  const urbainCategory = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Urbain électrique',
      description: 'Vélos électriques pour la ville et les déplacements quotidiens'
    }
  })

  const trekkingCategory = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Trekking électrique',
      description: 'Vélos électriques polyvalents pour les longues distances'
    }
  })

  // Create products
  const products = [
    {
      name: 'Samedi 27 Xroad',
      description: 'VTT électrique tout-suspendu pour les terrains les plus exigeants',
      price: 3499,
      categoryId: vttCategory.id,
      stock: 5,
    },
    {
      name: 'Lundi 26.1',
      description: 'Vélo urbain électrique élégant et pratique',
      price: 2899,
      categoryId: urbainCategory.id,
      stock: 8,
    },
    {
      name: 'Dimanche 28.7',
      description: 'Vélo de trekking électrique pour les longues escapades',
      price: 3199,
      categoryId: trekkingCategory.id,
      stock: 3,
    },
    {
      name: 'Friday 27.5',
      description: 'Vélo urbain électrique sportif et moderne',
      price: 2699,
      categoryId: urbainCategory.id,
      stock: 6,
    },
    {
      name: 'Game 6',
      description: 'VTT électrique haute performance',
      price: 4199,
      categoryId: vttCategory.id,
      stock: 2,
    },
    {
      name: 'Tuesday 27.1',
      description: 'Vélo de trekking électrique confortable',
      price: 3099,
      categoryId: trekkingCategory.id,
      stock: 4,
    }
  ]

  for (const productData of products) {
    await prisma.product.upsert({
      where: { id: 0 }, // Utiliser un ID temporaire pour l'upsert
      update: {
        ...productData,
        imageUrl: '/images/default-bike.jpg' // Ajouter l'imageUrl manquante
      },
      create: {
        ...productData,
        imageUrl: '/images/default-bike.jpg' // Ajouter l'imageUrl manquante
      }
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })