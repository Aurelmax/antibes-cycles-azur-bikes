'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  // Informations de livraison
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  
  // Informations de facturation
  billingSameAsDelivery: boolean;
  billingFirstName: string;
  billingLastName: string;
  billingAddress: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;
  
  // Options de livraison
  deliveryMethod: string;
  deliveryInstructions: string;
  
  // Paiement
  paymentMethod: string;
  acceptTerms: boolean;
}

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
    billingSameAsDelivery: true,
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: 'France',
    deliveryMethod: 'standard',
    deliveryInstructions: '',
    paymentMethod: 'card',
    acceptTerms: false,
  });

  // Rediriger si le panier est vide
  useEffect(() => {
    if (cart.items.length === 0) {
      router.push('/catalogue');
    }
  }, [cart.items.length, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation du traitement de la commande
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Vider le panier et rediriger vers la confirmation
    clearCart();
    router.push('/checkout/success');
  };

  const steps = [
    { id: 1, title: 'Livraison', description: 'Adresse de livraison' },
    { id: 2, title: 'Facturation', description: 'Adresse de facturation' },
    { id: 3, title: 'Paiement', description: 'Méthode de paiement' },
    { id: 4, title: 'Confirmation', description: 'Récapitulatif' }
  ];

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-primary-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 text-accent-gold">🛒</div>
          <h1 className="text-2xl font-bold text-white mb-4">Votre panier est vide</h1>
          <Link 
            href="/catalogue"
            className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense"
          >
            RETOUR AU CATALOGUE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-black py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
            <span className="text-accent-gold">FINALISER</span> VOTRE COMMANDE
          </h1>
          <p className="text-xl text-accent-silver max-w-2xl mx-auto">
            Quelques étapes pour recevoir votre vélo électrique haut de gamme
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="flex items-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${currentStep >= step.id 
                      ? 'bg-accent-gold text-primary-black' 
                      : 'bg-secondary-black text-accent-silver border border-border-color'
                    }
                  `}>
                    {step.id}
                  </div>
                  <div className="ml-3">
                    <div className={`font-semibold ${currentStep >= step.id ? 'text-white' : 'text-accent-silver'}`}>
                      {step.title}
                    </div>
                    <div className="text-sm text-accent-silver">{step.description}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 ml-8 ${currentStep > step.id ? 'bg-accent-gold' : 'bg-border-color'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire principal */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Étape 1: Livraison */}
              {currentStep === 1 && (
                <div className="bg-card-bg border border-border-color rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">🚚</span>
                    ADRESSE DE LIVRAISON
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Prénom *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Nom *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-accent-silver mb-2 font-semibold">Adresse *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Ville *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Code postal *</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-accent-silver mb-2 font-semibold">Pays *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      >
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Suisse">Suisse</option>
                        <option value="Luxembourg">Luxembourg</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-accent-silver mb-2 font-semibold">Instructions de livraison</label>
                    <textarea
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                      placeholder="Instructions spéciales pour la livraison..."
                    />
                  </div>
                </div>
              )}

              {/* Étape 2: Facturation */}
              {currentStep === 2 && (
                <div className="bg-card-bg border border-border-color rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">🧾</span>
                    ADRESSE DE FACTURATION
                  </h2>
                  
                  <div className="mb-6">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="billingSameAsDelivery"
                        checked={formData.billingSameAsDelivery}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color rounded focus:ring-accent-gold"
                      />
                      <span className="text-white font-semibold">Même adresse que la livraison</span>
                    </label>
                  </div>

                  {!formData.billingSameAsDelivery && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-accent-silver mb-2 font-semibold">Prénom *</label>
                        <input
                          type="text"
                          name="billingFirstName"
                          value={formData.billingFirstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-accent-silver mb-2 font-semibold">Nom *</label>
                        <input
                          type="text"
                          name="billingLastName"
                          value={formData.billingLastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-accent-silver mb-2 font-semibold">Adresse *</label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-accent-silver mb-2 font-semibold">Ville *</label>
                        <input
                          type="text"
                          name="billingCity"
                          value={formData.billingCity}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-accent-silver mb-2 font-semibold">Code postal *</label>
                        <input
                          type="text"
                          name="billingPostalCode"
                          value={formData.billingPostalCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Étape 3: Paiement */}
              {currentStep === 3 && (
                <div className="bg-card-bg border border-border-color rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="text-3xl mr-3">💳</span>
                    MÉTHODE DE PAIEMENT
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-white">Carte bancaire</div>
                        <div className="text-sm text-accent-silver">Visa, Mastercard, American Express</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-white">PayPal</div>
                        <div className="text-sm text-accent-silver">Paiement sécurisé avec PayPal</div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="financing"
                        checked={formData.paymentMethod === 'financing'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
                      />
                      <div className="ml-4">
                        <div className="font-semibold text-white">Financement 3x/4x sans frais</div>
                        <div className="text-sm text-accent-silver">Paiement étalé sans intérêt</div>
                      </div>
                    </label>
                  </div>

                  <div className="mt-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color rounded focus:ring-accent-gold mt-1"
                      />
                      <span className="text-accent-silver text-sm">
                        J'accepte les{' '}
                        <Link href="/mentions-legales" className="text-accent-gold hover:text-white">
                          conditions générales de vente
                        </Link>
                        {' '}et la{' '}
                        <Link href="/politique-confidentialite" className="text-accent-gold hover:text-white">
                          politique de confidentialité
                        </Link>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-secondary-black border border-border-color text-accent-silver px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold hover:text-primary-black transition-all duration-300"
                  >
                    ← PRÉCÉDENT
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense"
                    >
                      SUIVANT →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.acceptTerms}
                      className="bg-accent-gold text-primary-black px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'TRAITEMENT...' : 'CONFIRMER LA COMMANDE'}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Récapitulatif du panier */}
          <div className="lg:col-span-1">
            <div className="bg-card-bg border border-border-color rounded-2xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">RÉCAPITULATIF</h3>
              
              {/* Articles */}
              <div className="space-y-4 mb-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">{item.product.name}</div>
                      <div className="text-accent-silver text-xs">Qté: {item.quantity}</div>
                    </div>
                    <div className="text-accent-gold font-bold text-sm">
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </div>
                  </div>
                ))}
              </div>

              {/* Totaux */}
              <div className="border-t border-border-color pt-4 space-y-2">
                <div className="flex justify-between text-accent-silver">
                  <span>Sous-total</span>
                  <span>{cart.total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-accent-silver">
                  <span>Livraison</span>
                  <span>Gratuite</span>
                </div>
                <div className="flex justify-between text-accent-silver">
                  <span>TVA (20%)</span>
                  <span>{(cart.total * 0.2).toFixed(2)} €</span>
                </div>
                <div className="border-t border-border-color pt-2">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span className="text-accent-gold">{(cart.total * 1.2).toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
