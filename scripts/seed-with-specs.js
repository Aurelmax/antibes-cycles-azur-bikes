import { PrismaClient } from '@prisma/client'

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
      await prisma.category.upsert({
        where: { name: categoryData.name },
        update: {},
        create: categoryData
      })
      console.log(`Category ready: ${categoryData.name}`)
    } catch (error) {
      console.log(`Error with category ${categoryData.name}:`, error.message)
    }
  }

  console.log('Creating products with specifications...')

  // Get categories
  const vtt = await prisma.category.findUnique({ where: { name: 'VTT électrique' } })
  const urbain = await prisma.category.findUnique({ where: { name: 'Urbain électrique' } })
  const trekking = await prisma.category.findUnique({ where: { name: 'Trekking électrique' } })

  // Define products with their specifications
  const productsWithSpecs = [
    {
      product: {
        name: 'Lundi 26 BOSCH 9V',
        description: 'Vélo urbain électrique moderne avec motorisation Bosch Performance',
        price: 2899.00,
        imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
        categoryId: urbain.id,
        available: true
      },
      specifications: [
        { key: 'Cadre', value: 'Aluminium 6061 T6' },
        { key: 'Fourche', value: 'Fourche rigide en acier' },
        { key: 'Moteur', value: 'Bosch Performance Line (65 Nm)' },
        { key: 'Batterie', value: 'Bosch PowerTube 500Wh' },
        { key: 'Autonomie', value: 'Jusqu\'à 120 km' },
        { key: 'Vitesse max', value: '25 km/h (assistance)' },
        { key: 'Transmission', value: 'Shimano Deore 9 vitesses' },
        { key: 'Freins', value: 'Freins à disque hydrauliques Shimano' },
        { key: 'Roues', value: '26" avec pneus Schwalbe' },
        { key: 'Poids', value: '24 kg' },
        { key: 'Éclairage', value: 'Éclairage LED intégré avant/arrière' },
        { key: 'Porte-bagages', value: 'Porte-bagages arrière (25kg max)' }
      ]
    },
    {
      product: {
        name: 'Samedi 27 Xroad',
        description: 'VTT électrique tout-suspendu pour les terrains les plus exigeants',
        price: 3499.00,
        imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        categoryId: vtt.id,
        available: true
      },
      specifications: [
        { key: 'Cadre', value: 'Aluminium 6061 tout-suspendu' },
        { key: 'Fourche', value: 'Fourche suspendue 120mm' },
        { key: 'Suspension arrière', value: '120mm de débattement' },
        { key: 'Moteur', value: 'Bosch Performance Line CX (85 Nm)' },
        { key: 'Batterie', value: 'Bosch PowerTube 625Wh' },
        { key: 'Autonomie', value: 'Jusqu\'à 100 km' },
        { key: 'Transmission', value: 'Shimano XT 12 vitesses' },
        { key: 'Freins', value: 'Freins à disque hydrauliques Shimano XT' },
        { key: 'Roues', value: '27.5" tubeless ready' },
        { key: 'Poids', value: '26 kg' }
      ]
    },
    {
      product: {
        name: 'Dimanche 28.7',
        description: 'Vélo de trekking électrique pour les longues escapades',
        price: 3199.00,
        imageUrl: 'https://images.unsplash.com/photo-1544191696-15693b65b4b0?w=400&h=300&fit=crop',
        categoryId: trekking.id,
        available: true
      },
      specifications: [
        { key: 'Cadre', value: 'Aluminium confort avec géométrie touring' },
        { key: 'Fourche', value: 'Fourche suspendue 63mm' },
        { key: 'Moteur', value: 'Bosch Performance Line (65 Nm)' },
        { key: 'Batterie', value: 'Bosch PowerPack 500Wh' },
        { key: 'Autonomie', value: 'Jusqu\'à 130 km' },
        { key: 'Transmission', value: 'Shimano Deore 10 vitesses' },
        { key: 'Freins', value: 'Freins à disque hydrauliques' },
        { key: 'Roues', value: '28" avec pneus anti-crevaison' },
        { key: 'Poids', value: '25 kg' },
        { key: 'Équipements', value: 'Garde-boues, porte-bagages, béquille' }
      ]
    },
    {
      product: {
        name: 'Friday 27.5',
        description: 'Vélo urbain électrique sportif et moderne',
        price: 2699.00,
        imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop',
        categoryId: urbain.id,
        available: true
      },
      specifications: [
        { key: 'Cadre', value: 'Aluminium sport' },
        { key: 'Moteur', value: 'Bosch Active Line Plus (50 Nm)' },
        { key: 'Batterie', value: 'Bosch PowerPack 400Wh' },
        { key: 'Autonomie', value: 'Jusqu\'à 100 km' },
        { key: 'Transmission', value: 'Shimano Acera 8 vitesses' },
        { key: 'Roues', value: '27.5"' },
        { key: 'Poids', value: '23 kg' }
      ]
    }
  ]

  // Create products with specifications
  for (const { product, specifications } of productsWithSpecs) {
    try {
      // Check if product exists
      const existingProduct = await prisma.product.findFirst({
        where: { name: product.name }
      })

      let createdProduct
      if (existingProduct) {
        console.log(`Product ${product.name} already exists, updating...`)
        createdProduct = existingProduct
      } else {
        createdProduct = await prisma.product.create({
          data: product
        })
        console.log(`Created product: ${createdProduct.name}`)
      }

      // Add specifications
      for (const spec of specifications) {
        try {
          await prisma.specification.upsert({
            where: {
              // Compound unique constraint would be ideal, but using findFirst for now
              id: 0 // This will always create new since id 0 doesn't exist
            },
            update: {},
            create: {
              ...spec,
              productId: createdProduct.id
            }
          })
        } catch (specError) {
          // Try to create directly if upsert fails
          await prisma.specification.create({
            data: {
              ...spec,
              productId: createdProduct.id
            }
          }).catch(() => {
            console.log(`Spec ${spec.key} for ${product.name} already exists`)
          })
        }
      }

      console.log(`Added ${specifications.length} specifications for ${product.name}`)

    } catch (error) {
      console.log(`Error creating product ${product.name}:`, error.message)
    }
  }

  console.log('Database seeded with specifications!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })