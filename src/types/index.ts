// Point d'entrée pour tous les types Antibe Cycles AZUR
// Export centralisé des conventions de typage

// Types métier (sélectionnés pour éviter les conflits)
export type { Product, ProductVariant, Service, Booking, Customer } from './business';
export type { ProductCategory, ServiceCategory, BookingStatus, RentalDuration } from './business';

// Types API
export type { ApiResponse, ApiError, ApiMeta } from './api';

// Types d'affichage
export type { DisplayConfig, ThemeConfig, ColorConfig } from './display';

// Constantes et enums
export { BUSINESS_CONFIG, DISPLAY_CONSTANTS, VALIDATION_CONSTANTS, API_CONSTANTS } from './constants';

// Types utilitaires
export type ID = string;
export type Timestamp = Date;
export type Currency = 'EUR' | 'USD' | 'GBP';
export type Language = 'fr' | 'en' | 'es' | 'de';

export type Status = 'active' | 'inactive' | 'pending' | 'completed' | 'cancelled';
export type Priority = 'low' | 'normal' | 'high' | 'urgent';

export type ValidationResult = {
  isValid: boolean;
  errors: Array<{
    field: string;
    message: string;
    code: string;
  }>;
};

export type PaginationParams = {
  page: number;
  limit: number;
  total?: number;
  totalPages?: number;
};

export type SortParams = {
  field: string;
  order: 'asc' | 'desc';
};

export type FilterParams = {
  [key: string]: any;
};
