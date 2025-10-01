export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  description?: string;
  specifications?: {
    motor?: string;
    battery?: string;
    autonomy?: string;
    weight?: string;
  };
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedOptions?: {
    frame?: string;
    battery?: string;
    size?: string;
  };
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number, options?: any) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}
