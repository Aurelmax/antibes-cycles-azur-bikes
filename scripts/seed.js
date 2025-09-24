const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create categories first
  console.log('Creating categories...')

  const vttCategory = await prisma.category.create({
    data: {
      name: 'VTT électrique',
      description: 'Vélos tout-terrain électriques pour les aventures en nature'
    }
  }).catch(() => null)

  const urbainCategory = await prisma.category.create({
    data: {
      name: 'Urbain électrique',
      description: 'Vélos électriques pour la ville et les déplacements quotidiens'
    }
  }).catch(() => null)

  const trekkingCategory = await prisma.category.create({
    data: {
      name: 'Trekking électrique',
      description: 'Vélos électriques polyvalents pour les longues distances'
    }
  }).catch(() => null)

  // Get categories if they already exist
  const categories = await prisma.category.findMany()
  const vtt = categories.find(c => c.name === 'VTT électrique')
  const urbain = categories.find(c => c.name === 'Urbain électrique')
  const trekking = categories.find(c => c.name === 'Trekking électrique')

  console.log('Creating products...')

  // Create products
  const products = [
    {
      name: 'Samedi 27 Xroad',
      description: 'VTT électrique tout-suspendu pour les terrains les plus exigeants',
      price: 3499,
      categoryId: vtt.id,
      stock: 5,
    },
    {
      name: 'Lundi 26.1',
      description: 'Vélo urbain électrique élégant et pratique',
      price: 2899,
      categoryId: urbain.id,
      stock: 8,
    },
    {
      name: 'Dimanche 28.7',
      description: 'Vélo de trekking électrique pour les longues escapades',
      price: 3199,
      categoryId: trekking.id,
      stock: 3,
    },
    {
      name: 'Friday 27.5',
      description: 'Vélo urbain électrique sportif et moderne',
      price: 2699,
      categoryId: urbain.id,
      stock: 6,
    },
    {
      name: 'Game 6',
      description: 'VTT électrique haute performance',
      price: 4199,
      categoryId: vtt.id,
      stock: 2,
    },
    {
      name: 'Tuesday 27.1',
      description: 'Vélo de trekking électrique confortable',
      price: 3099,
      categoryId: trekking.id,
      stock: 4,
    }
  ]

  for (const productData of products) {
    try {
      await prisma.product.create({
        data: productData
      })
      console.log(`Created product: ${productData.name}`)
    } catch (error) {
      console.log(`Product ${productData.name} already exists or error occurred`)
    }
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