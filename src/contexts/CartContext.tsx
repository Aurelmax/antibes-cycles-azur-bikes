'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem, Product, CartContextType } from '@/types/cart';

// État initial du panier
const initialCart: Cart = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Types d'actions pour le reducer
type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; options?: any } }
  | { type: 'REMOVE_FROM_CART'; payload: { itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: Cart };

// Reducer pour gérer les actions du panier
function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, options } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id && 
        JSON.stringify(item.selectedOptions) === JSON.stringify(options)
      );

      let newItems: CartItem[];
      
      if (existingItem) {
        // Augmenter la quantité si l'article existe déjà
        newItems = state.items.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Ajouter un nouvel article
        const newItem: CartItem = {
          id: `${product.id}-${Date.now()}`,
          product,
          quantity,
          selectedOptions: options,
          addedAt: new Date(),
        };
        newItems = [...state.items, newItem];
      }

      return calculateCartTotals({ ...state, items: newItems });
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload.itemId);
      return calculateCartTotals({ ...state, items: newItems });
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { itemId } });
      }
      
      const newItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return calculateCartTotals({ ...state, items: newItems });
    }

    case 'CLEAR_CART':
      return initialCart;

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
}

// Fonction pour calculer les totaux du panier
function calculateCartTotals(cart: Cart): Cart {
  const total = cart.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
  return {
    ...cart,
    total: Math.round(total * 100) / 100, // Arrondir à 2 décimales
    itemCount,
  };
}

// Création du contexte
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider du contexte
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const savedCart = localStorage.getItem('moustache-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Convertir les dates string en objets Date
        parsedCart.items = parsedCart.items.map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt),
        }));
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Erreur lors du chargement du panier:', error);
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('moustache-cart', JSON.stringify(cart));
  }, [cart]);

  // Fonctions du contexte
  const addToCart = (product: Product, quantity: number = 1, options?: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, options } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { itemId } });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (productId: string) => {
    return cart.items.some(item => item.product.id === productId);
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Hook pour utiliser le contexte
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart doit être utilisé dans un CartProvider');
  }
  return context;
}
