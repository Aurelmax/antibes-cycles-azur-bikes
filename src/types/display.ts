// Types d'affichage pour Antibe Cycles AZUR
// Conventions de typage pour l'interface utilisateur et l'affichage

// ===== COMPOSANTS D'AFFICHAGE =====

export interface DisplayConfig {
  theme: ThemeConfig;
  colors: ColorConfig;
  typography: TypographyConfig;
  spacing: SpacingConfig;
  breakpoints: BreakpointConfig;
  animations: AnimationConfig;
}

export interface ThemeConfig {
  mode: 'dark' | 'light' | 'auto';
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
}

export interface ColorConfig {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrast: string;
  };
  accent: {
    gold: string;
    silver: string;
    bronze: string;
  };
  neutral: {
    black: string;
    white: string;
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  status: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export interface TypographyConfig {
  fontFamily: {
    primary: string;
    secondary: string;
    mono: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
}

export interface SpacingConfig {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
}

export interface BreakpointConfig {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface AnimationConfig {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    linear: string;
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
  effects: {
    fade: string;
    slide: string;
    scale: string;
    rotate: string;
    shimmer: string;
    glow: string;
  };
}

// ===== COMPOSANTS SPÉCIFIQUES =====

export interface ProductCardConfig {
  layout: 'grid' | 'list' | 'carousel';
  showPrice: boolean;
  showSpecs: boolean;
  showActions: boolean;
  imageAspect: 'square' | 'landscape' | 'portrait';
  maxSpecs: number;
}

export interface HeroConfig {
  height: 'small' | 'medium' | 'large' | 'full';
  aspectRatio: '16:9' | '4:3' | '1:1' | 'auto';
  overlay: boolean;
  overlayOpacity: number;
  contentPosition: 'top' | 'center' | 'bottom';
  showCTA: boolean;
  ctaStyle: 'primary' | 'secondary' | 'outline';
}

export interface NavigationConfig {
  style: 'horizontal' | 'vertical' | 'sidebar';
  showLogo: boolean;
  showSearch: boolean;
  showCart: boolean;
  showUser: boolean;
  mobileMenu: 'drawer' | 'dropdown' | 'fullscreen';
}

export interface FooterConfig {
  showNewsletter: boolean;
  showSocial: boolean;
  showMap: boolean;
  showContact: boolean;
  columns: number;
  maxLinks: number;
}

// ===== RESPONSIVE DESIGN =====

export interface ResponsiveConfig {
  mobile: DisplayConfig;
  tablet: DisplayConfig;
  desktop: DisplayConfig;
  wide: DisplayConfig;
}

export interface MediaQuery {
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  orientation?: 'portrait' | 'landscape';
  prefersColorScheme?: 'light' | 'dark';
  prefersReducedMotion?: boolean;
}

// ===== LAYOUTS =====

export interface LayoutConfig {
  container: {
    maxWidth: string;
    padding: string;
    margin: string;
  };
  grid: {
    columns: number;
    gap: string;
    breakpoints: Record<string, number>;
  };
  flex: {
    direction: 'row' | 'column';
    wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  };
}

export interface SectionConfig {
  id: string;
  type: 'hero' | 'products' | 'services' | 'testimonials' | 'contact' | 'custom';
  title?: string;
  subtitle?: string;
  background?: string;
  padding: string;
  margin: string;
  maxWidth?: string;
  centered: boolean;
  visible: boolean;
  order: number;
}

// ===== INTERACTIONS =====

export interface InteractionConfig {
  hover: {
    scale: number;
    shadow: string;
    color: string;
    duration: string;
  };
  focus: {
    outline: string;
    ring: string;
    duration: string;
  };
  active: {
    scale: number;
    duration: string;
  };
  disabled: {
    opacity: number;
    cursor: string;
  };
}

export interface LoadingConfig {
  type: 'spinner' | 'skeleton' | 'pulse' | 'dots' | 'bars';
  size: 'sm' | 'md' | 'lg' | 'xl';
  color: string;
  duration: string;
  overlay: boolean;
}

// ===== FORMULAIRES =====

export interface FormConfig {
  layout: 'vertical' | 'horizontal' | 'inline';
  spacing: string;
  labelPosition: 'top' | 'left' | 'right';
  requiredIndicator: boolean;
  errorDisplay: 'inline' | 'tooltip' | 'modal';
  validation: 'onChange' | 'onBlur' | 'onSubmit';
}

export interface InputConfig {
  size: 'sm' | 'md' | 'lg';
  variant: 'outline' | 'filled' | 'underlined' | 'flushed';
  color: 'primary' | 'secondary' | 'accent' | 'neutral';
  state: 'default' | 'focus' | 'error' | 'success' | 'disabled';
}

export interface ButtonConfig {
  size: 'sm' | 'md' | 'lg' | 'xl';
  variant: 'solid' | 'outline' | 'ghost' | 'link';
  color: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error';
  state: 'default' | 'hover' | 'active' | 'disabled' | 'loading';
  icon?: string;
  iconPosition?: 'left' | 'right';
}

// ===== MODALES =====

export interface ModalConfig {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  position: 'center' | 'top' | 'bottom' | 'left' | 'right';
  backdrop: boolean;
  closable: boolean;
  animation: 'fade' | 'slide' | 'scale' | 'none';
  zIndex: number;
}

export interface ToastConfig {
  position: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  duration: number;
  maxToasts: number;
  animation: 'slide' | 'fade' | 'scale';
  closable: boolean;
  progress: boolean;
}

// ===== CARROUSELS =====

export interface CarouselConfig {
  autoplay: boolean;
  autoplaySpeed: number;
  infinite: boolean;
  dots: boolean;
  arrows: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Array<{
    breakpoint: string;
    settings: Partial<CarouselConfig>;
  }>;
}

export interface GalleryConfig {
  layout: 'grid' | 'masonry' | 'justified';
  columns: number;
  gap: string;
  aspectRatio: string;
  lightbox: boolean;
  thumbnails: boolean;
  navigation: boolean;
  autoplay: boolean;
}

// ===== ACCESSIBILITÉ =====

export interface AccessibilityConfig {
  focusVisible: boolean;
  skipLinks: boolean;
  ariaLabels: boolean;
  colorContrast: 'AA' | 'AAA';
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

// ===== PERFORMANCE =====

export interface PerformanceConfig {
  lazyLoading: boolean;
  imageOptimization: boolean;
  codeSplitting: boolean;
  preloading: boolean;
  caching: boolean;
  compression: boolean;
}

// ===== INTERNATIONALISATION =====

export interface I18nConfig {
  defaultLocale: string;
  supportedLocales: string[];
  fallbackLocale: string;
  currency: string;
  dateFormat: string;
  timeFormat: string;
  numberFormat: string;
}

// ===== CONSTANTES D'AFFICHAGE =====

export const DISPLAY_CONSTANTS = {
  BREAKPOINTS: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  SPACING: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  ANIMATIONS: {
    DURATION: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    EASING: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    }
  }
} as const;

// ===== TYPES D'ÉTAT =====

export interface DisplayState {
  theme: string;
  locale: string;
  sidebar: boolean;
  modal: string | null;
  loading: boolean;
  error: string | null;
  notifications: NotificationState[];
}

export interface NotificationState {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration: number;
  closable: boolean;
}

// ===== TYPES DE CONTEXTE =====

export interface DisplayContextType {
  config: DisplayConfig;
  state: DisplayState;
  updateConfig: (config: Partial<DisplayConfig>) => void;
  updateState: (state: Partial<DisplayState>) => void;
  resetConfig: () => void;
  resetState: () => void;
}
