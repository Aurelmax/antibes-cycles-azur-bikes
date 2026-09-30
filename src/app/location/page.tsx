'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import BookingModal from '@/components/BookingModal';

export default function LocationPage() {
  const [selectedDuration, setSelectedDuration] = useState('day');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingBike, setBookingBike] = useState('');

  const handleOpenBookingModal = (bikeName: string) => {
    setBookingBike(bikeName);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingBike('');
  };

  const handleBookingSuccess = (bookingData: any) => {
    console.log('Réservation confirmée:', bookingData);
    // Ici vous pourriez envoyer les données à votre API
    // ou rediriger vers une page de confirmation
    alert(`Réservation confirmée pour ${bookingData.bike} ! Vous recevrez un email de confirmation.`);
  };

  const pricingOptions = {
    halfday: { label: 'Demi-journée (4h)', price: 25, popular: false },
    day: { label: 'Journée complète', price: 40, popular: true },
    weekend: { label: 'Week-end (2 jours)', price: 70, popular: false },
    week: { label: 'Semaine (7 jours)', price: 200, popular: false }
  };

  const availableBikes = [
    {
      id: 1,
      name: 'Samedi 28 Trail',
      category: 'VTT électrique',
      image: '🚵‍♂️',
      available: true,
      description: 'Parfait pour les sentiers d\'Antibes',
      features: ['Bosch Performance CX', 'Autonomie 120km', 'Suspension']
    },
    {
      id: 2,
      name: 'Friday 28.3',
      category: 'Urbain',
      image: '🚲',
      available: true,
      description: 'Idéal pour découvrir la vieille ville',
      features: ['Bosch Active Plus', 'Autonomie 100km', 'Confort']
    },
    {
      id: 3,
      name: 'Lundi 28.3',
      category: 'Trekking',
      image: '🚴‍♀️',
      available: false,
      description: 'Pour vos longues balades côtières',
      features: ['Bosch Performance', 'Autonomie 130km', 'Robustesse']
    },
    {
      id: 4,
      name: 'Cargo Game',
      category: 'Cargo',
      image: '📦',
      available: true,
      description: 'Parfait pour les familles',
      features: ['Bosch Cargo', 'Autonomie 80km', 'Sécurité enfants']
    }
  ];

  const routes = [
    {
      name: 'Tour des Remparts',
      distance: '8km',
      difficulty: 'Facile',
      duration: '45min',
      highlights: ['Vieille ville', 'Port Vauban', 'Marché provençal'],
      color: 'green'
    },
    {
      name: 'Cap d\'Antibes',
      distance: '15km',
      difficulty: 'Modéré',
      duration: '1h30',
      highlights: ['Plage de la Garoupe', 'Villa Eilenroc', 'Sentier littoral'],
      color: 'blue'
    },
    {
      name: 'Biot & Vallauris',
      distance: '25km',
      difficulty: 'Sportif',
      duration: '2h30',
      highlights: ['Villages perchés', 'Ateliers poterie', 'Musée Picasso'],
      color: 'purple'
    }
  ];

  const testimonials = [
    {
      name: 'Marie L.',
      rating: 5,
      text: 'Magnifique balade sur le sentier du Cap ! Le vélo était parfait et l\'équipe très accueillante.',
      location: 'Antibes',
      image: '👩‍🦰'
    },
    {
      name: 'Thomas M.',
      rating: 5,
      text: 'Service impeccable, j\'ai pu essayer le Samedi 28 avant de l\'acheter. Très satisfait !',
      location: 'Cannes',
      image: '👨‍🦱'
    },
    {
      name: 'Sophie & Paul',
      rating: 5,
      text: 'Le vélo cargo nous a permis de visiter Antibes avec nos deux enfants en toute sécurité.',
      location: 'Nice',
      image: '👫'
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="EXPLOREZ ANTIBES À VÉLO ÉLECTRIQUE"
        subtitle="Découvrez les merveilles de la Côte d'Azur avec nos vélos électriques Moustache haut de gamme. De la vieille ville au Cap d'Antibes, vivez une expérience inoubliable !"
        buttonText="RÉSERVER MAINTENANT"
        buttonLink="#bikes"
        backgroundImage="/images/bikes/samedi-28/montagne-antibes.jpg"
      />

      {/* Section Pourquoi louer */}
      <section className="py-20 bg-secondary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">
              <span className="text-accent-gold">POURQUOI</span> LOUER CHEZ NOUS ?
            </h2>
            <p className="text-xl text-accent-silver max-w-3xl mx-auto leading-relaxed">
              Une expérience unique pour découvrir nos vélos haut de gamme et Antibes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🎯</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">ESSAI AVANT ACHAT</h3>
              <p className="text-accent-silver">Testez nos vélos dans les vraies conditions d'Antibes avant de faire votre choix</p>
            </div>

            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">FLEXIBILITÉ TOTALE</h3>
              <p className="text-accent-silver">De quelques heures à une semaine, adaptez la durée à vos besoins</p>
            </div>

            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🗺️</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">DÉCOUVERTE LOCALE</h3>
              <p className="text-accent-silver">Parcours conseillés et spots secrets partagés par nos experts locaux</p>
            </div>

            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">💰</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide">ÉCONOMIQUE</h3>
              <p className="text-accent-silver">Solution idéale pour les vacances ou avant un investissement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tarifs Interactifs */}
      <section id="bikes" className="py-16 bg-secondary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">NOS TARIFS</h2>
            <p className="text-xl text-accent-silver">Des prix adaptés à tous vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(pricingOptions).map(([key, option]) => (
              <div
                key={key}
                onClick={() => setSelectedDuration(key)}
                className={`relative bg-card-bg border border-border-color rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover-glow ${
                  selectedDuration === key
                    ? 'ring-4 ring-accent-gold shadow-2xl'
                    : 'hover:shadow-xl'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-gold text-primary-black px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ POPULAIRE
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4 text-accent-gold">⏰</div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{option.label}</h3>
                <div className="text-3xl font-bold text-accent-gold mb-4">{option.price}€</div>
                <div className="space-y-2 text-sm text-accent-silver">
                  <div className="flex items-center justify-center">
                    <span className="text-accent-gold mr-2">✓</span>
                    Vélo + équipements
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent-gold mr-2">✓</span>
                    Assistance 24/7
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent-gold mr-2">✓</span>
                    Parcours conseillés
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center text-white tracking-wide">ÉQUIPEMENTS INCLUS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⛑️</div>
                  <div className="font-semibold text-white">Casque</div>
                  <div className="text-sm text-accent-silver">Sécurité certifiée</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <div className="font-semibold text-white">Antivol</div>
                  <div className="text-sm text-accent-silver">Haute sécurité</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <div className="font-semibold text-white">Kit réparation</div>
                  <div className="text-sm text-accent-silver">Crevaison & outils</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📞</div>
                  <div className="font-semibold text-white">Assistance</div>
                  <div className="text-sm text-accent-silver">Support 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vélos Disponibles */}
      <section className="py-16 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">NOS VÉLOS DISPONIBLES</h2>
            <p className="text-xl text-accent-silver max-w-2xl mx-auto">
              Choisissez le vélo parfait pour votre aventure antiboise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {availableBikes.map((bike) => (
              <div key={bike.id} className="bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
                <div className={`aspect-w-4 aspect-h-3 {bike.available ? 'bg-gradient-to-br from-accent-gold/20 to-accent-gold/10' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center relative`}>
                  <div className="text-6xl">{bike.image}</div>
                  {!bike.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">Indisponible</span>
                    </div>
                  )}
                  {bike.available && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold">Disponible</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-accent-gold/20 text-accent-gold text-xs font-semibold px-2 py-1 rounded-full">{bike.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{bike.name}</h3>
                  <p className="text-accent-silver text-sm mb-4">{bike.description}</p>

                  <div className="space-y-2 mb-4">
                    {bike.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-accent-silver">
                        <span className="text-accent-gold mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => bike.available ? handleOpenBookingModal(bike.name) : null}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 tracking-wide {
                      bike.available
                        ? 'bg-accent-gold text-primary-black hover:bg-white hover:text-primary-black button-shimmer-intense button-pulse'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!bike.available}
                  >
                    {bike.available ? 'RÉSERVER CE MODÈLE' : 'INDISPONIBLE'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours Recommandés */}
      <section className="py-16 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">PARCOURS RECOMMANDÉS</h2>
            <p className="text-xl text-accent-silver max-w-2xl mx-auto">
              Découvrez Antibes et ses environs avec nos circuits testés et approuvés
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {routes.map((route, index) => (
              <div key={index} className="bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
                <div className={`h-48 bg-gradient-to-br {
                  route.color === 'green' ? 'from-accent-gold/30 to-accent-gold/20' :
                  route.color === 'blue' ? 'from-accent-gold/40 to-accent-gold/30' :
                  'from-accent-gold/50 to-accent-gold/40'
                } flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2 tracking-wide">{route.name}</h3>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span>📍 {route.distance}</span>
                      <span>⏱️ {route.duration}</span>
                    </div>
                  </div>
                  {/* Decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium {
                      route.difficulty === 'Facile' ? 'bg-accent-gold/20 text-accent-gold' :
                      route.difficulty === 'Modéré' ? 'bg-accent-gold/30 text-accent-gold' :
                      'bg-accent-gold/40 text-accent-gold'
                    }`}>
                      {route.difficulty}
                    </span>
                    <div className="flex items-center text-sm text-accent-silver">
                      <span className="mr-1">⭐</span>
                      <span>Recommandé</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-white mb-3 tracking-wide">Points d'intérêt :</h4>
                  <ul className="space-y-2">
                    {route.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-sm text-accent-silver">
                        <span className="text-accent-gold mr-2">📍</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-6 bg-accent-gold text-primary-black py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-black transition-all duration-300 transform hover:scale-105 tracking-wide hover-glow">
                    VOIR L'ITINÉRAIRE DÉTAILLÉ
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">🗺️ BESOIN DE CONSEILS PERSONNALISÉS ?</h3>
            <p className="text-accent-silver mb-6">
              Nos experts locaux vous recommandent les meilleurs parcours selon vos préférences et votre niveau
            </p>
            <button className="bg-accent-gold text-primary-black px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-black transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide hover-glow">
              💬 DEMANDER DES CONSEILS
            </button>
          </div>
        </div>
      </section>

      {/* Timeline du processus */}
      <section className="py-16 bg-secondary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">COMMENT ÇA MARCHE ?</h2>
            <p className="text-xl text-accent-silver">En 4 étapes simples, démarrez votre aventure</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-gold to-accent-gold/50 hidden lg:block" />

              <div className="space-y-12">
                {/* Étape 1 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                      <div className="text-4xl mb-4">📱</div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">1. RÉSERVATION</h3>
                      <p className="text-accent-silver">
                        Réservez en ligne ou par téléphone. Choisissez votre vélo, vos dates et confirmez votre réservation.
                      </p>
                      <div className="text-sm text-accent-gold font-semibold mt-3">⏱️ 2 minutes</div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-gold rounded-full items-center justify-center text-primary-black font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>

                {/* Étape 2 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12"></div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-gold rounded-full items-center justify-center text-primary-black font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="lg:w-5/12">
                    <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                      <div className="text-4xl mb-4">🏪</div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">2. RETRAIT</h3>
                      <p className="text-accent-silver">
                        Présentez-vous au magasin avec vos documents. Nous préparons votre vélo et vous briefons.
                      </p>
                      <div className="text-sm text-accent-gold font-semibold mt-3">⏱️ 15 minutes</div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                      <div className="text-4xl mb-4">🚴‍♂️</div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">3. EXPLORATION</h3>
                      <p className="text-accent-silver">
                        Partez à l'aventure ! Suivez nos parcours conseillés ou créez votre propre itinéraire.
                      </p>
                      <div className="text-sm text-accent-gold font-semibold mt-3">⏱️ À votre rythme</div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-gold rounded-full items-center justify-center text-primary-black font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>

                {/* Étape 4 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12"></div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent-gold rounded-full items-center justify-center text-primary-black font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="lg:w-5/12">
                    <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                      <div className="text-4xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">4. RETOUR</h3>
                      <p className="text-accent-silver">
                        Ramenez le vélo, partagez votre expérience et récupérez votre caution. C'est terminé !
                      </p>
                      <div className="text-sm text-accent-gold font-semibold mt-3">⏱️ 5 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">ILS ONT TESTÉ, ILS RECOMMANDENT</h2>
            <p className="text-xl text-accent-silver">Plus de 500 clients satisfaits cette année</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-white tracking-wide">{testimonial.name}</h3>
                    <p className="text-sm text-accent-silver">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-gold text-lg">⭐</span>
                  ))}
                </div>

                <p className="text-accent-silver italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">98% DE SATISFACTION CLIENT</h3>
              <p className="text-accent-silver mb-6">
                Rejoignez les centaines de clients qui nous font confiance pour découvrir Antibes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent-gold text-primary-black px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-black transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide hover-glow">
                  📝 LAISSER UN AVIS
                </button>
                <button className="bg-transparent border-2 border-accent-gold text-accent-gold px-8 py-3 rounded-xl font-semibold hover:bg-accent-gold hover:text-primary-black transition-all duration-300 tracking-wide">
                  👥 VOIR TOUS LES AVIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre aventure antiboise commence ici
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ne repartez pas d'Antibes sans avoir exploré ses trésors cachés à vélo électrique
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🚲 Réserver maintenant
              </button>
              <Link
                href="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                💬 Poser une question
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center text-white/90">
              <div className="flex items-center">
                <span className="text-2xl mr-2">📞</span>
                <span>04 93 95 67 89</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">📧</span>
                <span>contact@antibe-cycles-azur.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decoration */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedBike={bookingBike}
        onBookingSuccess={handleBookingSuccess}
      />
    </div>
  );
}
