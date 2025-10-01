'use client';

import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBike: string;
  onBookingSuccess: (bookingData: any) => void;
}

export default function BookingModal({ isOpen, onClose, selectedBike, onBookingSuccess }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    duration: 'day',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });

  const steps = [
    { id: 1, title: 'Durée & Vélo', subtitle: 'Choisissez votre formule' },
    { id: 2, title: 'Date & Heure', subtitle: 'Planifiez votre sortie' },
    { id: 3, title: 'Informations', subtitle: 'Vos coordonnées' },
    { id: 4, title: 'Paiement', subtitle: 'Finalisez votre réservation' }
  ];

  const pricingOptions = {
    halfday: { label: 'Demi-journée (4h)', price: 25, popular: false },
    day: { label: 'Journée complète', price: 40, popular: true },
    weekend: { label: 'Week-end (2 jours)', price: 70, popular: false },
    week: { label: 'Semaine (7 jours)', price: 200, popular: false }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      bike: selectedBike,
      ...formData,
      total: pricingOptions[formData.duration as keyof typeof pricingOptions].price
    };
    onBookingSuccess(bookingData);
    onClose();
  };

  const getTotalPrice = () => {
    return pricingOptions[formData.duration as keyof typeof pricingOptions].price;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-primary-black border-2 border-accent-gold rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-accent-gold text-primary-black p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-wide">RÉSERVATION</h2>
              <p className="text-sm opacity-80">Vélo sélectionné: {selectedBike}</p>
            </div>
            <button
              onClick={onClose}
              className="text-primary-black hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="p-6 border-b-2 border-accent-gold bg-secondary-black">
          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= step.id 
                    ? 'bg-accent-gold text-primary-black shadow-lg' 
                    : 'bg-primary-black text-accent-silver border-2 border-accent-gold'
                }`}>
                  {step.id}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className="text-sm font-bold text-white">{step.title}</div>
                  <div className="text-xs text-accent-gold">{step.subtitle}</div>
                </div>
                {step.id < 4 && (
                  <div className={`w-12 h-1 mx-4 rounded ${
                    currentStep > step.id ? 'bg-accent-gold' : 'bg-primary-black'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 bg-primary-black">
          {/* Step 1: Duration & Bike */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">CHOISISSEZ VOTRE FORMULE</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(pricingOptions).map(([key, option]) => (
                  <label key={key} className="cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      value={key}
                      checked={formData.duration === key}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-6 border-2 rounded-xl transition-all shadow-lg ${
                      formData.duration === key
                        ? 'border-accent-gold bg-accent-gold/20 shadow-accent-gold/30'
                        : 'border-border-color hover:border-accent-gold/70 bg-secondary-black'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white text-lg">{option.label}</span>
                        <span className="text-accent-gold font-bold text-xl">{option.price}€</span>
                      </div>
                      {option.popular && (
                        <div className="text-sm text-accent-gold mt-2 font-bold">⭐ POPULAIRE</div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">PLANIFIEZ VOTRE SORTIE</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Date de retrait</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Heure de retrait</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  >
                    <option value="">Sélectionnez une heure</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Personal Info */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">VOS COORDONNÉES</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-bold text-white mb-3">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">PAIEMENT SÉCURISÉ</h3>
              
              <div className="bg-secondary-black border-2 border-accent-gold rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-white mb-6 text-center">RÉCAPITULATIF</h4>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-accent-silver">Vélo: {selectedBike}</span>
                    <span className="text-accent-gold font-bold">Inclus</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-accent-silver">Durée: {pricingOptions[formData.duration as keyof typeof pricingOptions].label}</span>
                    <span className="text-accent-gold font-bold">{getTotalPrice()}€</span>
                  </div>
                  <div className="border-t-2 border-accent-gold pt-4 flex justify-between text-white font-bold text-xl">
                    <span>TOTAL</span>
                    <span className="text-accent-gold">{getTotalPrice()}€</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-white mb-3">Méthode de paiement</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-secondary-black border-2 border-border-color rounded-lg text-white text-lg focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
                >
                  <option value="card">💳 Carte bancaire</option>
                  <option value="paypal">💙 PayPal</option>
                  <option value="apple">🍎 Apple Pay</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t-2 border-accent-gold">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                currentStep === 1
                  ? 'bg-secondary-black text-accent-silver cursor-not-allowed border-2 border-border-color'
                  : 'bg-secondary-black text-white hover:bg-accent-gold hover:text-primary-black border-2 border-accent-gold hover:border-white'
              }`}
            >
              ← Précédent
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-accent-gold text-primary-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-black transition-all button-shimmer-intense button-pulse"
              >
                Suivant →
              </button>
            ) : (
              <button
                type="submit"
                className="bg-accent-gold text-primary-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-black transition-all button-shimmer-intense button-pulse"
              >
                🚴‍♂️ Confirmer la réservation
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
