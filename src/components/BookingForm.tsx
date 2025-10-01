'use client';

import React, { useState } from 'react';
import PaymentForm from './PaymentForm';

interface BookingData {
  duration: string;
  bike: string;
  date: string;
  time: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

interface BookingFormProps {
  onBookingSuccess: (bookingData: any) => void;
}

export default function BookingForm({ onBookingSuccess }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    duration: '',
    bike: '',
    date: '',
    time: '',
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const pricingOptions = {
    halfday: { label: 'Demi-journée (4h)', price: 25, popular: false },
    day: { label: 'Journée complète', price: 40, popular: true },
    weekend: { label: 'Week-end (2 jours)', price: 70, popular: false },
    week: { label: 'Semaine (7 jours)', price: 200, popular: false }
  };

  const availableBikes = [
    { id: 'samedi-28-1', name: 'Samedi 28.1', price: 0, image: '/images/bikes/samedi-28/samedi-28-1-black.jpg' },
    { id: 'samedi-28-2', name: 'Samedi 28.2', price: 5, image: '/images/bikes/samedi-28/samedi-28-2.jpg' },
    { id: 'samedi-28-4', name: 'Samedi 28.4', price: 10, image: '/images/bikes/samedi-28/samedi-28-4.jpg' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('customerInfo.')) {
      const field = name.split('.')[1];
      setBookingData(prev => ({
        ...prev,
        customerInfo: {
          ...prev.customerInfo,
          [field]: value
        }
      }));
    } else {
      setBookingData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const getTotalPrice = () => {
    const basePrice = pricingOptions[bookingData.duration as keyof typeof pricingOptions]?.price || 0;
    const bikePrice = availableBikes.find(bike => bike.id === bookingData.bike)?.price || 0;
    return basePrice + bikePrice;
  };

  const handlePaymentSuccess = (paymentData: any) => {
    setPaymentSuccess(true);
    const finalBookingData = {
      ...bookingData,
      payment: paymentData,
      total: getTotalPrice(),
      bookingId: `BOOK_${Date.now()}`,
      status: 'confirmed'
    };
    onBookingSuccess(finalBookingData);
  };

  const handlePaymentError = (error: string) => {
    alert(`Erreur de paiement: ${error}`);
  };

  const steps = [
    { id: 1, title: 'Durée & Vélo', description: 'Choisissez votre formule' },
    { id: 2, title: 'Date & Heure', description: 'Planifiez votre sortie' },
    { id: 3, title: 'Informations', description: 'Vos coordonnées' },
    { id: 4, title: 'Paiement', description: 'Finalisez votre réservation' }
  ];

  if (paymentSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">RÉSERVATION CONFIRMÉE !</h2>
        <p className="text-xl text-accent-silver mb-6">
          Votre vélo électrique est réservé. Vous recevrez un email de confirmation.
        </p>
        <div className="bg-card-bg border border-accent-gold rounded-xl p-6 max-w-md mx-auto">
          <div className="text-accent-silver text-sm mb-2">Numéro de réservation</div>
          <div className="text-2xl font-bold text-accent-gold">{bookingData.bookingId}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire principal */}
        <div className="space-y-8">
          {/* Étape 1: Durée & Vélo */}
          {currentStep === 1 && (
            <div className="bg-card-bg border border-border-color rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">CHOISISSEZ VOTRE FORMULE</h3>
              
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white">Durée de location</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(pricingOptions).map(([key, option]) => (
                    <label key={key} className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
                      <input
                        type="radio"
                        name="duration"
                        value={key}
                        checked={bookingData.duration === key}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
                      />
                      <div className="ml-4 flex-1">
                        <div className="font-semibold text-white">{option.label}</div>
                        <div className="text-accent-gold font-bold">{option.price}€</div>
                        {option.popular && (
                          <span className="text-xs bg-accent-gold text-primary-black px-2 py-1 rounded-full">POPULAIRE</span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Modèle de vélo</h4>
                <div className="space-y-3">
                  {availableBikes.map((bike) => (
                    <label key={bike.id} className="flex items-center p-4 bg-secondary-black border border-border-color rounded-lg cursor-pointer hover:border-accent-gold transition-colors">
                      <input
                        type="radio"
                        name="bike"
                        value={bike.id}
                        checked={bookingData.bike === bike.id}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-accent-gold bg-secondary-black border-border-color focus:ring-accent-gold"
                      />
                      <div className="ml-4 flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-lg overflow-hidden">
                          <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{bike.name}</div>
                          <div className="text-accent-silver text-sm">
                            {bike.price > 0 ? `+${bike.price}€/jour` : 'Inclus'}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Étape 2: Date & Heure */}
          {currentStep === 2 && (
            <div className="bg-card-bg border border-border-color rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">PLANIFIEZ VOTRE SORTIE</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Date de location *</label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Heure de départ *</label>
                  <select
                    name="time"
                    value={bookingData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  >
                    <option value="">Choisir une heure</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Étape 3: Informations client */}
          {currentStep === 3 && (
            <div className="bg-card-bg border border-border-color rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">VOS COORDONNÉES</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Prénom *</label>
                  <input
                    type="text"
                    name="customerInfo.firstName"
                    value={bookingData.customerInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Nom *</label>
                  <input
                    type="text"
                    name="customerInfo.lastName"
                    value={bookingData.customerInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Email *</label>
                  <input
                    type="email"
                    name="customerInfo.email"
                    value={bookingData.customerInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                </div>
                <div>
                  <label className="block text-accent-silver mb-2 font-semibold">Téléphone *</label>
                  <input
                    type="tel"
                    name="customerInfo.phone"
                    value={bookingData.customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Étape 4: Paiement */}
          {currentStep === 4 && (
            <PaymentForm
              total={getTotalPrice()}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-secondary-black border border-border-color text-accent-silver px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold hover:text-primary-black transition-all duration-300"
              >
                ← PRÉCÉDENT
              </button>
            )}
            
            <div className="ml-auto">
              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense"
                >
                  SUIVANT →
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Récapitulatif */}
        <div className="bg-card-bg border border-border-color rounded-2xl p-6 sticky top-8">
          <h3 className="text-xl font-bold text-white mb-6">RÉCAPITULATIF</h3>
          
          {bookingData.duration && (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-accent-silver">Durée</span>
                <span className="text-white font-semibold">
                  {pricingOptions[bookingData.duration as keyof typeof pricingOptions]?.label}
                </span>
              </div>
              
              {bookingData.bike && (
                <div className="flex justify-between">
                  <span className="text-accent-silver">Vélo</span>
                  <span className="text-white font-semibold">
                    {availableBikes.find(b => b.id === bookingData.bike)?.name}
                  </span>
                </div>
              )}
              
              {bookingData.date && (
                <div className="flex justify-between">
                  <span className="text-accent-silver">Date</span>
                  <span className="text-white font-semibold">
                    {new Date(bookingData.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              )}
              
              {bookingData.time && (
                <div className="flex justify-between">
                  <span className="text-accent-silver">Heure</span>
                  <span className="text-white font-semibold">{bookingData.time}</span>
                </div>
              )}
              
              <div className="border-t border-border-color pt-4">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span className="text-accent-gold">{getTotalPrice().toFixed(2)} €</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
