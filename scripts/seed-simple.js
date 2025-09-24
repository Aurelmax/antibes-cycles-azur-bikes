const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Creating categories...')

  // Create categories
  const categories = [
    { name: 'VTT électrique', description: 'Vélos tout-terrain électriques pour les aventures en nature' },
    { name: 'Urbain électrique', description: 'Vélos électriques pour la ville et les déplacements quotidiens' },
    { name: 'Trekking électrique', description: 'Vélos électriques polyvalents pour les longues distances' }
  ]

  for (const categoryData of categories) {
    try {
      await prisma.category.create({
        data: categoryData
      })
      console.log(`Created category: ${categoryData.name}`)
    } catch (error) {
      console.log(`Category ${categoryData.name} already exists or error occurred`)
    }
  }

  console.log('Creating products...')

  // Get categories
  const vtt = await prisma.category.findUnique({ where: { name: 'VTT électrique' } })
  const urbain = await prisma.category.findUnique({ where: { name: 'Urbain électrique' } })
  const trekking = await prisma.category.findUnique({ where: { name: 'Trekking électrique' } })

  // Create products
  const products = [
    {
      name: 'Samedi 27 Xroad',
      description: 'VTT électrique tout-suspendu pour les terrains les plus exigeants',
      price: 3499.00,
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      categoryId: vtt.id,
      available: true
    },
    {
      name: 'Lundi 26.1',
      description: 'Vélo urbain électrique élégant et pratique',
      price: 2899.00,
      imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
      categoryId: urbain.id,
      available: true
    },
    {
      name: 'Dimanche 28.7',
      description: 'Vélo de trekking électrique pour les longues escapades',
      price: 3199.00,
      imageUrl: 'https://images.unsplash.com/photo-1544191696-15693b65b4b0?w=400&h=300&fit=crop',
      categoryId: trekking.id,
      available: true
    },
    {
      name: 'Friday 27.5',
      description: 'Vélo urbain électrique sportif et moderne',
      price: 2699.00,
      imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
      categoryId: urbain.id,
      available: true
    },
    {
      name: 'Game 6',
      description: 'VTT électrique haute performance',
      price: 4199.00,
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      categoryId: vtt.id,
      available: true
    },
    {
      name: 'Tuesday 27.1',
      description: 'Vélo de trekking électrique confortable',
      price: 3099.00,
      imageUrl: 'https://images.unsplash.com/photo-1544191696-15693b65b4b0?w=400&h=300&fit=crop',
      categoryId: trekking.id,
      available: true
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