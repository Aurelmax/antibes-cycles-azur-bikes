'use client';

import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/cart';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  options?: any;
  className?: string;
  children?: React.ReactNode;
}

export default function AddToCartButton({ 
  product, 
  quantity = 1, 
  options, 
  className = "",
  children 
}: AddToCartButtonProps) {
  const { addToCart, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulation d'un délai pour l'UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart(product, quantity, options);
    setIsAdding(false);
  };

  const isProductInCart = isInCart(product.id);

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`
        ${className}
        ${isProductInCart 
          ? 'bg-green-500 hover:bg-green-400' 
          : 'bg-accent-gold hover:bg-white'
        }
        text-primary-black px-6 py-3 rounded-lg font-bold transition-all duration-300 button-glow-intense
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center space-x-2
      `}
    >
      {isAdding ? (
        <>
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>AJOUT EN COURS...</span>
        </>
      ) : isProductInCart ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>DÉJÀ DANS LE PANIER</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
          </svg>
          <span>{children || 'AJOUTER AU PANIER'}</span>
        </>
      )}
    </button>
  );
}
