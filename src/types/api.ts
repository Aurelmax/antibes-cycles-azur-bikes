// Types API pour Antibe Cycles AZUR
// Conventions de typage pour les endpoints et réponses API

import { Product, Service, Booking, Customer, RentalPricing } from './business';

// ===== RÉPONSES API GÉNÉRIQUES =====

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: ApiError[];
  meta?: ApiMeta;
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
  details?: Record<string, any>;
}

export interface ApiMeta {
  pagination?: PaginationMeta;
  filters?: FilterMeta;
  sorting?: SortingMeta;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface FilterMeta {
  applied: Record<string, any>;
  available: Record<string, string[]>;
}

export interface SortingMeta {
  field: string;
  order: 'asc' | 'desc';
}

// ===== ENDPOINTS PRODUITS =====

export interface ProductsResponse {
  products: Product[];
  categories: string[];
  filters: ProductFilters;
}

export interface ProductFilters {
  categories: string[];
  priceRange: { min: number; max: number };
  availability: boolean[];
  specifications: Record<string, string[]>;
}

export interface ProductRequest {
  name?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  available?: boolean;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ProductCreateRequest {
  name: string;
  description: string;
  basePrice: number;
  image: string;
  categoryId: string;
  specifications: Array<{
    key: string;
    value: string;
    unit?: string;
    category: string;
  }>;
}

export interface ProductUpdateRequest extends Partial<ProductCreateRequest> {
  id: string;
}

// ===== ENDPOINTS SERVICES =====

export interface ServicesResponse {
  services: Service[];
  categories: string[];
  pricing: ServicePricing[];
}

export interface ServicePricing {
  serviceId: string;
  basePrice: number;
  options: Array<{
    name: string;
    priceModifier: number;
  }>;
}

export interface ServiceRequest {
  category?: string;
  available?: boolean;
  search?: string;
}

export interface ServiceBookingRequest {
  serviceId: string;
  customerId: string;
  scheduledDate: string;
  notes?: string;
  options: string[];
}

// ===== ENDPOINTS RÉSERVATIONS =====

export interface BookingsResponse {
  bookings: Booking[];
  summary: BookingSummary;
}

export interface BookingSummary {
  total: number;
  pending: number;
  confirmed: number;
  active: number;
  completed: number;
  cancelled: number;
}

export interface BookingRequest {
  productId: string;
  variantId?: string;
  customer: CustomerRequest;
  startDate: string;
  endDate: string;
  duration: string;
  services?: string[];
  notes?: string;
}

export interface CustomerRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export interface BookingUpdateRequest {
  id: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  notes?: string;
}

// ===== ENDPOINTS TARIFS =====

export interface PricingResponse {
  rental: RentalPricing[];
  services: ServicePricing[];
  financing: FinancingOption[];
}

export interface FinancingOption {
  id: string;
  name: string;
  months: number;
  rate: number;
  minAmount: number;
  maxAmount: number;
}

export interface PricingCalculationRequest {
  productId: string;
  variantId?: string;
  duration: string;
  services?: string[];
  financing?: string;
}

export interface PricingCalculationResponse {
  basePrice: number;
  services: number;
  total: number;
  financing?: {
    monthlyPayment: number;
    totalCost: number;
    interest: number;
  };
  breakdown: Array<{
    item: string;
    price: number;
    quantity?: number;
  }>;
}

// ===== ENDPOINTS UTILITAIRES =====

export interface SearchRequest {
  query: string;
  type: 'products' | 'services' | 'all';
  filters?: Record<string, any>;
  page?: number;
  limit?: number;
}

export interface SearchResponse {
  results: Array<{
    type: 'product' | 'service';
    id: string;
    name: string;
    description: string;
    price?: number;
    image?: string;
    relevance: number;
  }>;
  suggestions: string[];
  filters: Record<string, string[]>;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}

// ===== ENDPOINTS CONFIGURATION =====

export interface ConfigResponse {
  company: {
    name: string;
    address: string;
    contact: {
      phone: string;
      email: string;
      website: string;
    };
  };
  features: {
    enableBooking: boolean;
    enableFinancing: boolean;
    enableServices: boolean;
    enableBlog: boolean;
    enableMap: boolean;
  };
  display: {
    theme: string;
    primaryColor: string;
    accentColor: string;
    language: string;
  };
}

// ===== TYPES D'ERREURS =====

export enum ApiErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  MAINTENANCE = 'MAINTENANCE'
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: ApiErrorCode;
    message: string;
    details?: Record<string, any>;
    timestamp: string;
    requestId: string;
  };
}

// ===== TYPES DE CACHE =====

export interface CacheConfig {
  ttl: number; // Time to live en secondes
  key: string;
  tags?: string[];
}

export interface CacheResponse<T> {
  data: T;
  cached: boolean;
  expiresAt: Date;
  tags: string[];
}

// ===== TYPES DE MIDDLEWARE =====

export interface RequestContext {
  userId?: string;
  sessionId?: string;
  ip: string;
  userAgent: string;
  timestamp: Date;
}

export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: any) => string;
}

// ===== TYPES DE VALIDATION =====

export interface ValidationRule {
  field: string;
  type: 'required' | 'email' | 'phone' | 'number' | 'date' | 'url' | 'custom';
  message: string;
  customValidator?: (value: any) => boolean;
}

export interface ValidationSchema {
  [key: string]: ValidationRule[];
}

// ===== TYPES DE LOGGING =====

export interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: Date;
  context?: Record<string, any>;
  userId?: string;
  requestId?: string;
}

export interface AuditLog {
  action: string;
  resource: string;
  resourceId: string;
  userId?: string;
  changes?: Record<string, { from: any; to: any }>;
  timestamp: Date;
  ip: string;
}

// ===== TYPES DE NOTIFICATIONS =====

export interface NotificationRequest {
  type: 'email' | 'sms' | 'push';
  recipient: string;
  template: string;
  data: Record<string, any>;
  priority: 'low' | 'normal' | 'high';
}

export interface NotificationResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

// ===== TYPES DE STATISTIQUES =====

export interface StatsResponse {
  period: {
    start: string;
    end: string;
  };
  metrics: {
    bookings: {
      total: number;
      revenue: number;
      averageValue: number;
    };
    products: {
      total: number;
      available: number;
      popular: string[];
    };
    customers: {
      total: number;
      new: number;
      returning: number;
    };
  };
  trends: Array<{
    date: string;
    value: number;
    metric: string;
  }>;
}
