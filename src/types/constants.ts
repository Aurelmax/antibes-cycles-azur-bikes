// Constantes et enums pour Antibe Cycles AZUR
// Définitions centralisées des valeurs statiques

// ===== ENUMS MÉTIER =====

export enum ProductCategory {
  URBAN = 'urbain',
  VTT = 'vtt',
  TREKKING = 'trekking',
  CARGO = 'cargo',
  ACCESSORIES = 'accessoires'
}

export enum ServiceCategory {
  ENTRETIEN = 'entretien',
  REPARATION = 'reparation',
  REGLAGE_POSTURAL = 'reglage-postural',
  PERSONNALISATION = 'personnalisation',
  CONSULTATION = 'consultation'
}

export enum RentalDuration {
  HALFDAY = 'halfday',
  DAY = 'day',
  WEEKEND = 'weekend',
  WEEK = 'week',
  MONTH = 'month'
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

export enum PaymentMethod {
  CARD = 'card',
  PAYPAL = 'paypal',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
  BANK_TRANSFER = 'bank_transfer'
}

// ===== CONSTANTES DE CONFIGURATION =====

export const BUSINESS_CONFIG = {
  COMPANY: {
    NAME: 'Antibe Cycles AZUR',
    LEGAL_NAME: 'Antibe Cycles AZUR SARL',
    SIRET: '123 456 789 00012',
    RCS: 'Antibes B 123 456 789',
    CAPITAL: 50000,
    ADDRESS: {
      STREET: '123 Avenue de la République',
      CITY: 'Antibes',
      POSTAL_CODE: '06600',
      COUNTRY: 'France'
    }
  },
  CONTACT: {
    PHONE: '04 93 95 67 89',
    EMAIL: 'contact@antibe-cycles-azur.fr',
    WEBSITE: 'https://antibe-cycles-azur.fr'
  },
  PRICING: {
    CURRENCY: 'EUR',
    TAX_RATE: 0.20,
    DEPOSIT_RATE: 0.30,
    CANCELLATION_FREE_HOURS: 24
  }
} as const;

// ===== CONSTANTES D'AFFICHAGE =====

export const DISPLAY_CONSTANTS = {
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
    '2XL': '1536px'
  },
  SPACING: {
    XS: '0.25rem',
    SM: '0.5rem',
    MD: '1rem',
    LG: '1.5rem',
    XL: '2rem',
    '2XL': '3rem',
    '3XL': '4rem',
    '4XL': '6rem',
    '5XL': '8rem'
  },
  COLORS: {
    PRIMARY: {
      MAIN: '#1a1a1a',
      LIGHT: '#2d2d2d',
      DARK: '#0a0a0a',
      CONTRAST: '#ffffff'
    },
    ACCENT: {
      GOLD: '#d4af37',
      SILVER: '#c0c0c0',
      BRONZE: '#cd7f32'
    },
    STATUS: {
      SUCCESS: '#10b981',
      WARNING: '#f59e0b',
      ERROR: '#ef4444',
      INFO: '#3b82f6'
    }
  },
  ANIMATIONS: {
    DURATION: {
      FAST: '150ms',
      NORMAL: '300ms',
      SLOW: '500ms'
    },
    EASING: {
      LINEAR: 'linear',
      EASE: 'ease',
      EASE_IN: 'ease-in',
      EASE_OUT: 'ease-out',
      EASE_IN_OUT: 'ease-in-out'
    }
  }
} as const;

// ===== CONSTANTES DE PRODUITS =====

export const PRODUCT_CONSTANTS = {
  SPECIFICATIONS: {
    MOTOR: {
      ACTIVE_LINE: 'Bosch Active Line',
      PERFORMANCE_LINE: 'Bosch Performance Line',
      CARGO_LINE: 'Bosch Cargo Line'
    },
    BATTERY: {
      '400WH': 'Bosch PowerPack 400Wh',
      '500WH': 'Bosch PowerPack 500Wh',
      '625WH': 'Bosch PowerPack 625Wh'
    },
    FRAME: {
      ALUMINUM: 'Aluminium aéronautique',
      CARBON: 'Fibre de carbone',
      STEEL: 'Acier chromoly'
    }
  },
  VARIANTS: {
    SAMEDI_28: {
      '28.1': { name: 'Samedi 28.1', priceModifier: 0 },
      '28.2': { name: 'Samedi 28.2', priceModifier: 5 },
      '28.4': { name: 'Samedi 28.4', priceModifier: 10 }
    }
  },
  SIZES: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  COLORS: ['Noir', 'Blanc', 'Rouge', 'Bleu', 'Vert', 'Gris']
} as const;

// ===== CONSTANTES DE SERVICES =====

export const SERVICE_CONSTANTS = {
  DURATION: {
    ENTRETIEN: 60, // minutes
    REPARATION: 120,
    REGLAGE_POSTURAL: 90,
    PERSONNALISATION: 180,
    CONSULTATION: 30
  },
  PRICING: {
    ENTRETIEN: 50,
    REPARATION: 80,
    REGLAGE_POSTURAL: 120,
    PERSONNALISATION: 200,
    CONSULTATION: 30
  }
} as const;

// ===== CONSTANTES DE LOCATION =====

export const RENTAL_CONSTANTS = {
  DURATIONS: {
    [RentalDuration.HALFDAY]: { hours: 4, label: 'Demi-journée', price: 25 },
    [RentalDuration.DAY]: { hours: 24, label: 'Journée', price: 40 },
    [RentalDuration.WEEKEND]: { hours: 48, label: 'Week-end', price: 70 },
    [RentalDuration.WEEK]: { hours: 168, label: 'Semaine', price: 200 },
    [RentalDuration.MONTH]: { hours: 720, label: 'Mois', price: 600 }
  },
  CONDITIONS: {
    MIN_AGE: 18,
    MAX_AGE: 80,
    REQUIRED_DOCUMENTS: ['pièce_identité', 'permis_conduire'],
    DEPOSIT_AMOUNT: 200
  }
} as const;

// ===== CONSTANTES DE FINANCEMENT =====

export const FINANCING_CONSTANTS = {
  OPTIONS: [
    { months: 3, rate: 0, label: '3x sans frais' },
    { months: 4, rate: 2.5, label: '4x à 2.5%' },
    { months: 6, rate: 4.9, label: '6x à 4.9%' },
    { months: 12, rate: 8.9, label: '12x à 8.9%' }
  ],
  MIN_AMOUNT: 500,
  MAX_AMOUNT: 10000
} as const;

// ===== CONSTANTES D'API =====

export const API_CONSTANTS = {
  ENDPOINTS: {
    PRODUCTS: '/api/products',
    CATEGORIES: '/api/categories',
    SERVICES: '/api/services',
    BOOKINGS: '/api/bookings',
    CONTACT: '/api/contact',
    PRICING: '/api/pricing'
  },
  LIMITS: {
    MAX_PAGE_SIZE: 100,
    DEFAULT_PAGE_SIZE: 20,
    MAX_SEARCH_RESULTS: 50
  },
  CACHE: {
    TTL: 300, // 5 minutes
    MAX_AGE: 3600 // 1 heure
  }
} as const;

// ===== CONSTANTES DE VALIDATION =====

export const VALIDATION_CONSTANTS = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
  POSTAL_CODE_REGEX: /^[0-9]{5}$/,
  SIRET_REGEX: /^[0-9]{14}$/,
  MIN_PASSWORD_LENGTH: 8,
  MAX_NAME_LENGTH: 50,
  MAX_MESSAGE_LENGTH: 1000
} as const;

// ===== CONSTANTES DE NOTIFICATION =====

export const NOTIFICATION_CONSTANTS = {
  TYPES: {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
  },
  DURATION: {
    SHORT: 3000,
    NORMAL: 5000,
    LONG: 10000
  },
  POSITIONS: {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    TOP_CENTER: 'top-center',
    BOTTOM_CENTER: 'bottom-center'
  }
} as const;

// ===== CONSTANTES DE PERFORMANCE =====

export const PERFORMANCE_CONSTANTS = {
  IMAGE_SIZES: {
    THUMBNAIL: { width: 150, height: 150 },
    SMALL: { width: 300, height: 300 },
    MEDIUM: { width: 600, height: 600 },
    LARGE: { width: 1200, height: 1200 }
  },
  LAZY_LOADING: {
    THRESHOLD: 0.1,
    ROOT_MARGIN: '50px'
  },
  CACHE: {
    BROWSER: 86400, // 24 heures
    CDN: 604800 // 7 jours
  }
} as const;
