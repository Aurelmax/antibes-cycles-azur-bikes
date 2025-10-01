import { describe, it, expect } from &apos;@jest/globals&apos;
import { 
  Product, 
  ProductVariant, 
  Booking, 
  Customer
} from &apos;../business&apos;

describe(&apos;Business Types&apos;, () => {
  describe(&apos;Product Type&apos;, () => {
    it(&apos;should create a valid product&apos;, () => {
      const product: Product = {
        id: &apos;samedi-28-1&apos;,
        name: &apos;Samedi 28.1&apos;,
        description: &apos;Vélo électrique urbain&apos;,
        basePrice: 1999,
        image: &apos;/images/samedi-28-1.jpg&apos;,
        category: {
          id: &apos;urbain&apos;,
          name: &apos;Urbain&apos;,
          description: &apos;Vélos urbains&apos;,
          icon: &apos;🚴‍♂️&apos;,
          displayOrder: 1,
          specifications: []
        },
        variants: [],
        specifications: [],
        available: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      expect(product.id).toBe(&apos;samedi-28-1&apos;)
      expect(product.name).toBe(&apos;Samedi 28.1&apos;)
      expect(product.basePrice).toBe(1999)
      expect(product.available).toBe(true)
    })
  })

  describe(&apos;ProductVariant Type&apos;, () => {
    it(&apos;should create a valid product variant&apos;, () => {
      const variant: ProductVariant = {
        id: &apos;samedi-28-1&apos;,
        name: &apos;Samedi 28.1&apos;,
        priceModifier: 0,
        images: [&apos;/images/samedi-28-1-1.jpg&apos;, &apos;/images/samedi-28-1-2.jpg&apos;],
        specifications: [],
        available: true
      }

      expect(variant.id).toBe(&apos;samedi-28-1&apos;)
      expect(variant.priceModifier).toBe(0)
      expect(variant.images).toHaveLength(2)
      expect(variant.available).toBe(true)
    })
  })

  describe(&apos;Booking Type&apos;, () => {
    it(&apos;should create a valid booking&apos;, () => {
      const customer: Customer = {
        id: &apos;customer-1&apos;,
        firstName: &apos;Jean&apos;,
        lastName: &apos;Dupont&apos;,
        email: &apos;jean.dupont@email.com&apos;,
        phone: &apos;04 93 95 67 89&apos;,
        address: {
          street: &apos;123 Rue de la Paix&apos;,
          city: &apos;Antibes&apos;,
          postalCode: &apos;06600&apos;,
          country: &apos;France&apos;
        },
        preferences: {
          newsletter: true,
          sms: false,
          language: &apos;fr&apos;
        }
      }

      const booking: Booking = {
        id: &apos;booking-1&apos;,
        customer,
        product: {
          id: &apos;samedi-28-1&apos;,
          name: &apos;Samedi 28.1&apos;,
          description: &apos;Vélo électrique urbain&apos;,
          basePrice: 1999,
          image: &apos;/images/samedi-28-1.jpg&apos;,
          category: {
            id: &apos;urbain&apos;,
            name: &apos;Urbain&apos;,
            description: &apos;Vélos urbains&apos;,
            icon: &apos;🚴‍♂️&apos;,
            displayOrder: 1,
            specifications: []
          },
          variants: [],
          specifications: [],
          available: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        startDate: new Date(&apos;2024-01-15&apos;),
        endDate: new Date(&apos;2024-01-16&apos;),
        duration: &apos;day&apos;,
        totalPrice: 40,
        status: &apos;pending&apos;,
        services: [],
        createdAt: new Date()
      }

      expect(booking.id).toBe(&apos;booking-1&apos;)
      expect(booking.customer.firstName).toBe(&apos;Jean&apos;)
      expect(booking.duration).toBe(&apos;day&apos;)
      expect(booking.status).toBe(&apos;pending&apos;)
    })
  })

  describe(&apos;Type Validation&apos;, () => {
    it(&apos;should validate enum values&apos;, () => {
      const validDurations = [&apos;halfday&apos;, &apos;day&apos;, &apos;weekend&apos;, &apos;week&apos;, &apos;month&apos;]
      const validStatuses = [&apos;pending&apos;, &apos;confirmed&apos;, &apos;active&apos;, &apos;completed&apos;, &apos;cancelled&apos;]

      expect(validDurations).toContain(&apos;halfday&apos;)
      expect(validDurations).toContain(&apos;day&apos;)
      expect(validDurations).toContain(&apos;weekend&apos;)

      expect(validStatuses).toContain(&apos;pending&apos;)
      expect(validStatuses).toContain(&apos;confirmed&apos;)
      expect(validStatuses).toContain(&apos;active&apos;)
    })
  })
})
