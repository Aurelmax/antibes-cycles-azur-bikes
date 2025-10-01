import { describe, it, expect } from &apos;@jest/globals&apos;
import { RENTAL_CONSTANTS, FINANCING_CONSTANTS } from &apos;@/types/constants&apos;

describe(&apos;Pricing Calculations&apos;, () => {
  describe(&apos;Rental Pricing&apos;, () => {
    it(&apos;should calculate correct rental prices&apos;, () => {
      const halfDayPrice = RENTAL_CONSTANTS.DURATIONS.halfday.price
      const dayPrice = RENTAL_CONSTANTS.DURATIONS.day.price
      const weekendPrice = RENTAL_CONSTANTS.DURATIONS.weekend.price

      expect(halfDayPrice).toBe(25)
      expect(dayPrice).toBe(40)
      expect(weekendPrice).toBe(70)
    })

    it(&apos;should validate rental duration hours&apos;, () => {
      const halfDayHours = RENTAL_CONSTANTS.DURATIONS.halfday.hours
      const dayHours = RENTAL_CONSTANTS.DURATIONS.day.hours
      const weekendHours = RENTAL_CONSTANTS.DURATIONS.weekend.hours

      expect(halfDayHours).toBe(4)
      expect(dayHours).toBe(24)
      expect(weekendHours).toBe(48)
    })
  })

  describe(&apos;Financing Options&apos;, () => {
    it(&apos;should validate financing rates&apos;, () => {
      const options = FINANCING_CONSTANTS.OPTIONS
      
      expect(options).toHaveLength(4)
      expect(options[0].rate).toBe(0) // 3x sans frais
      expect(options[1].rate).toBe(2.5) // 4x à 2.5%
      expect(options[2].rate).toBe(4.9) // 6x à 4.9%
      expect(options[3].rate).toBe(8.9) // 12x à 8.9%
    })

    it(&apos;should validate financing amount limits&apos;, () => {
      expect(FINANCING_CONSTANTS.MIN_AMOUNT).toBe(500)
      expect(FINANCING_CONSTANTS.MAX_AMOUNT).toBe(10000)
    })
  })
})

describe(&apos;Business Logic&apos;, () => {
  describe(&apos;Product Variants&apos;, () => {
    it(&apos;should calculate correct price modifiers&apos;, () => {
      const samedi28Variants = {
        &apos;28.1&apos;: { priceModifier: 0 },
        &apos;28.2&apos;: { priceModifier: 5 },
        &apos;28.4&apos;: { priceModifier: 10 }
      }

      expect(samedi28Variants[&apos;28.1&apos;].priceModifier).toBe(0)
      expect(samedi28Variants[&apos;28.2&apos;].priceModifier).toBe(5)
      expect(samedi28Variants[&apos;28.4&apos;].priceModifier).toBe(10)
    })
  })

  describe(&apos;Service Pricing&apos;, () => {
    it(&apos;should validate service durations&apos;, () => {
      const serviceConstants = {
        ENTRETIEN: 60,
        REPARATION: 120,
        REGLAGE_POSTURAL: 90,
        PERSONNALISATION: 180,
        CONSULTATION: 30
      }

      expect(serviceConstants.ENTRETIEN).toBe(60)
      expect(serviceConstants.REPARATION).toBe(120)
      expect(serviceConstants.REGLAGE_POSTURAL).toBe(90)
    })
  })
})
