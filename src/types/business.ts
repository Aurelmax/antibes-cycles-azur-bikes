// Types métier pour Antibe Cycles AZUR
// Conventions de typage pour la gestion des spécificités

// ===== PRODUITS =====

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: ProductCategory;
  variants: ProductVariant[];
  specifications: ProductSpecification[];
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  id: string;
  name: string; // "Samedi 28.1", "Samedi 28.2", "Samedi 28.4"
  priceModifier: number; // +0€, +5€, +10€
  images: string[];
  specifications: ProductSpecification[];
  available: boolean;
}

export interface ProductSpecification {
  key: string; // "Moteur", "Batterie", "Autonomie", "Poids"
  value: string; // "Bosch Active Line", "400Wh", "108 km", "24.5 kg"
  unit?: string; // "km", "kg", "Wh", "Nm"
  category: 'motor' | 'battery' | 'frame' | 'weight' | 'other';
}

export interface ProductOption {
  type: 'frame' | 'battery' | 'size' | 'color' | 'accessory';
  name: string;
  priceImpact: number;
  available: boolean;
  compatibleVariants: string[];
}

// ===== CATÉGORIES =====

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  displayOrder: number;
  specifications: CategorySpecification[];
}

export interface CategorySpecification {
  key: string;
  required: boolean;
  options: string[];
  defaultValue?: string;
}

// ===== SERVICES =====

export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: number; // en minutes
  category: ServiceCategory;
  options: ServiceOption[];
  available: boolean;
}

export interface ServiceOption {
  name: string;
  priceModifier: number;
  durationModifier: number; // en minutes
  required: boolean;
}

export type ServiceCategory = 
  | 'entretien' 
  | 'reparation' 
  | 'reglage-postural' 
  | 'personnalisation' 
  | 'consultation';

// ===== LOCATION =====

export interface RentalPricing {
  id: string;
  durationType: RentalDuration;
  durationHours: number;
  price: number;
  popular: boolean;
  available: boolean;
  conditions: RentalCondition[];
}

export type RentalDuration = 
  | 'halfday'    // 4h
  | 'day'        // 24h
  | 'weekend'    // 48h
  | 'week'        // 168h
  | 'month';     // 720h

export interface RentalCondition {
  type: 'age' | 'license' | 'deposit' | 'insurance';
  value: string;
  required: boolean;
}

// ===== RÉSERVATIONS =====

export interface Booking {
  id: string;
  customer: Customer;
  product: Product;
  variant?: ProductVariant;
  startDate: Date;
  endDate: Date;
  duration: RentalDuration;
  totalPrice: number;
  status: BookingStatus;
  services: ServiceBooking[];
  createdAt: Date;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  preferences: CustomerPreferences;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CustomerPreferences {
  newsletter: boolean;
  sms: boolean;
  language: 'fr' | 'en';
}

export interface ServiceBooking {
  service: Service;
  scheduledDate: Date;
  notes?: string;
}

export type BookingStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'active' 
  | 'completed' 
  | 'cancelled';

// ===== FINANCEMENT =====

export interface FinancingOption {
  id: string;
  name: string;
  months: number;
  rate: number; // taux en %
  minAmount: number;
  maxAmount: number;
  available: boolean;
}

export interface FinancingCalculation {
  basePrice: number;
  selectedOption: FinancingOption;
  monthlyPayment: number;
  totalCost: number;
  interest: number;
}

// ===== CONFIGURATION =====

export interface BusinessConfig {
  company: CompanyInfo;
  contact: ContactInfo;
  pricing: PricingConfig;
  display: DisplayConfig;
  features: FeatureFlags;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  address: Address;
  siret: string;
  rcs: string;
  capital: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  social: SocialMedia;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface PricingConfig {
  currency: 'EUR';
  taxRate: number;
  depositRate: number; // pourcentage de caution
  cancellationPolicy: CancellationPolicy;
}

export interface CancellationPolicy {
  freeCancellationHours: number;
  refundRate: number; // pourcentage de remboursement
}

export interface DisplayConfig {
  theme: 'dark' | 'light';
  primaryColor: string;
  accentColor: string;
  language: 'fr' | 'en';
  currency: string;
}

export interface FeatureFlags {
  enableBooking: boolean;
  enableFinancing: boolean;
  enableServices: boolean;
  enableBlog: boolean;
  enableMap: boolean;
}

// ===== UTILITAIRES =====

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  available?: boolean;
  search?: string;
}

// ===== CONSTANTES =====

export const PRODUCT_CATEGORIES = {
  URBAN: 'urbain',
  VTT: 'vtt',
  TREKKING: 'trekking',
  CARGO: 'cargo'
} as const;

export const RENTAL_DURATIONS = {
  HALFDAY: { type: 'halfday', hours: 4, label: 'Demi-journée' },
  DAY: { type: 'day', hours: 24, label: 'Journée' },
  WEEKEND: { type: 'weekend', hours: 48, label: 'Week-end' },
  WEEK: { type: 'week', hours: 168, label: 'Semaine' },
  MONTH: { type: 'month', hours: 720, label: 'Mois' }
} as const;

export const SERVICE_CATEGORIES = {
  ENTRETIEN: 'entretien',
  REPARATION: 'reparation',
  REGLAGE_POSTURAL: 'reglage-postural',
  PERSONNALISATION: 'personnalisation',
  CONSULTATION: 'consultation'
} as const;

// ===== TYPES DE VALIDATION =====

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface FormState<T> {
  data: T;
  errors: ValidationError[];
  isValid: boolean;
  isSubmitting: boolean;
}

// ===== TYPES D'ÉVÉNEMENTS =====

export interface BusinessEvent {
  type: 'booking_created' | 'booking_updated' | 'booking_cancelled' | 'product_updated';
  data: any;
  timestamp: Date;
  userId?: string;
}

export interface NotificationConfig {
  email: boolean;
  sms: boolean;
  push: boolean;
  channels: NotificationChannel[];
}

export interface NotificationChannel {
  type: 'email' | 'sms' | 'push';
  enabled: boolean;
  template: string;
}
