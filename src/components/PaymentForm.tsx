'use client';

import React, { useState } from 'react';

interface PaymentFormProps {
  total: number;
  onPaymentSuccess: (paymentData: any) => void;
  onPaymentError: (error: string) => void;
}

export default function PaymentForm({ total, onPaymentSuccess, onPaymentError }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulation du traitement de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulation d'un succès de paiement
      const paymentData = {
        id: `pay_${Date.now()}`,
        amount: total,
        method: paymentMethod,
        status: 'completed',
        timestamp: new Date().toISOString()
      };

      onPaymentSuccess(paymentData);
    } catch (error) {
      onPaymentError('Erreur lors du traitement du paiement');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-card-bg border border-border-color rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="text-3xl mr-3">💳</span>
        PAIEMENT SÉCURISÉ
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Méthodes de paiement */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Méthode de paiement</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
              />
              <div className="ml-4">
                <div className="font-semibold text-white">Carte bancaire</div>
                <div className="text-sm text-accent-silver">Visa, Mastercard</div>
              </div>
            </label>

            <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
              />
              <div className="ml-4">
                <div className="font-semibold text-white">PayPal</div>
                <div className="text-sm text-accent-silver">Paiement sécurisé</div>
              </div>
            </label>

            <label className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value="apple"
                checked={paymentMethod === 'apple'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
              />
              <div className="ml-4">
                <div className="font-semibold text-white">Apple Pay</div>
                <div className="text-sm text-accent-silver">Paiement rapide</div>
              </div>
            </label>
          </div>
        </div>

        {/* Formulaire carte bancaire */}
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-accent-silver mb-2 font-semibold">Numéro de carte *</label>
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={(e) => setCardData(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
                className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-accent-silver mb-2 font-semibold">Date d'expiration *</label>
                <input
                  type="text"
                  name="expiry"
                  value={cardData.expiry}
                  onChange={(e) => setCardData(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))}
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                  className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                />
              </div>
              <div>
                <label className="block text-accent-silver mb-2 font-semibold">CVV *</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleCardInputChange}
                  placeholder="123"
                  maxLength={4}
                  required
                  className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-accent-silver mb-2 font-semibold">Nom sur la carte *</label>
              <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={handleCardInputChange}
                placeholder="Jean Dupont"
                required
                className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
              />
            </div>
          </div>
        )}

        {/* Informations de sécurité */}
        <div className="bg-secondary-black border border-accent-gold rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="text-2xl text-accent-gold">🔒</div>
            <div>
              <div className="font-semibold text-white">Paiement 100% sécurisé</div>
              <div className="text-sm text-accent-silver">
                Vos données sont chiffrées et protégées par SSL. Nous ne stockons jamais vos informations bancaires.
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de paiement */}
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-accent-gold text-primary-black py-4 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isProcessing ? (
            <>
              <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              TRAITEMENT EN COURS...
            </>
          ) : (
            <>
              <span className="mr-2">💳</span>
              PAYER {total.toFixed(2)} €
            </>
          )}
        </button>
      </form>
    </div>
  );
}
