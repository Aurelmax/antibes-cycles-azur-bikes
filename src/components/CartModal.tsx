'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-card-bg border border-accent-gold rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-accent-gold text-primary-black px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">PANIER D'ACHAT</h2>
            <button
              onClick={onClose}
              className="text-primary-black hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-96 overflow-y-auto">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 text-accent-gold">🛒</div>
                <h3 className="text-xl font-bold text-white mb-2">Votre panier est vide</h3>
                <p className="text-accent-silver mb-6">Découvrez nos vélos électriques haut de gamme</p>
                <Link
                  href="/catalogue"
                  onClick={onClose}
                  className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense"
                >
                  VOIR LE CATALOGUE
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="bg-secondary-black border border-border-color rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      {/* Image du produit */}
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Informations du produit */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm mb-1">{item.product.name}</h4>
                        <p className="text-accent-silver text-xs mb-2">{item.product.category}</p>
                        
                        {/* Options sélectionnées */}
                        {item.selectedOptions && (
                          <div className="text-xs text-accent-silver mb-2">
                            {item.selectedOptions.frame && (
                              <span className="block">Cadre: {item.selectedOptions.frame}</span>
                            )}
                            {item.selectedOptions.battery && (
                              <span className="block">Batterie: {item.selectedOptions.battery}</span>
                            )}
                            {item.selectedOptions.size && (
                              <span className="block">Taille: {item.selectedOptions.size}</span>
                            )}
                          </div>
                        )}
                        
                        {/* Prix et quantité */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-accent-gold text-primary-black rounded-full flex items-center justify-center text-sm font-bold hover:bg-white transition-colors"
                            >
                              -
                            </button>
                            <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-accent-gold text-primary-black rounded-full flex items-center justify-center text-sm font-bold hover:bg-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-accent-gold font-bold">
                              {(item.product.price * item.quantity).toFixed(2)} €
                            </div>
                            <div className="text-accent-silver text-xs">
                              {item.product.price.toFixed(2)} € × {item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bouton supprimer */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors p-1"
                        title="Supprimer du panier"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-border-color p-6 bg-secondary-black">
              {/* Résumé */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold">Total ({cart.itemCount} article{cart.itemCount > 1 ? 's' : ''})</span>
                <span className="text-2xl font-bold text-accent-gold">{cart.total.toFixed(2)} €</span>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={clearCart}
                  className="flex-1 bg-secondary-black border border-border-color text-accent-silver px-4 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                >
                  VIDER LE PANIER
                </button>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="flex-1 bg-accent-gold text-primary-black px-4 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense text-center"
                >
                  COMMANDER
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
