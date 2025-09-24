'use client';

import { useState } from 'react';
import Link from 'next/link';
import LocationForm from '@/components/LocationForm';

export default function LocationPage() {
  const [selectedDuration, setSelectedDuration] = useState('day');
  const [selectedBike, setSelectedBike] = useState('');

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
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-white/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}} />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce">
              ✨ Essai gratuit 30 minutes !
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explorez
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Antibes
              </span>
              à vélo électrique
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Découvrez les merveilles de la Côte d'Azur avec nos vélos électriques Moustache.
              De la vieille ville au Cap d'Antibes, vivez une expérience inoubliable !
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🚲 Réserver maintenant
              </button>
              <Link
                href="#bikes"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Voir les vélos
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Section Pourquoi louer */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi louer chez nous ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience unique pour découvrir nos vélos et Antibes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Essai avant achat</h3>
              <p className="text-gray-600">Testez nos vélos dans les vraies conditions d'Antibes avant de faire votre choix</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Flexibilité totale</h3>
              <p className="text-gray-600">De quelques heures à une semaine, adaptez la durée à vos besoins</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Découverte locale</h3>
              <p className="text-gray-600">Parcours conseillés et spots secrets partagés par nos experts locaux</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Économique</h3>
              <p className="text-gray-600">Solution idéale pour les vacances ou avant un investissement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vélos Disponibles */}
      <section id="bikes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos vélos disponibles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez le vélo parfait pour votre aventure antiboise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {availableBikes.map((bike) => (
              <div key={bike.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border">
                <div className={`aspect-w-4 aspect-h-3 ${bike.available ? 'bg-gradient-to-br from-blue-100 to-blue-200' : 'bg-gradient-to-br from-gray-100 to-gray-200'} flex items-center justify-center relative`}>
                  <div className="text-6xl">{bike.image}</div>
                  {!bike.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">Indisponible</span>
                    </div>
                  )}
                  {bike.available && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Disponible</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">{bike.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{bike.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{bike.description}</p>

                  <div className="space-y-2 mb-4">
                    {bike.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedBike(bike.name)}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      bike.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!bike.available}
                  >
                    {bike.available ? 'Réserver ce modèle' : 'Indisponible'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarifs Interactifs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos tarifs</h2>
            <p className="text-xl text-gray-600">Des prix adaptés à tous vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(pricingOptions).map(([key, option]) => (
              <div
                key={key}
                onClick={() => setSelectedDuration(key)}
                className={`relative bg-white rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedDuration === key
                    ? 'ring-4 ring-blue-500 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                } ${option.popular ? 'border-4 border-yellow-400' : 'border'}`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Plus populaire
                    </span>
                  </div>
                )}

                <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}€</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{option.label}</h3>

                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Vélo + équipements
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Assistance 24/7
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Parcours conseillés
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Équipements inclus</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⛑️</div>
                  <div className="font-semibold">Casque</div>
                  <div className="text-sm text-gray-600">Sécurité certifiée</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <div className="font-semibold">Antivol</div>
                  <div className="text-sm text-gray-600">Haute sécurité</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <div className="font-semibold">Kit réparation</div>
                  <div className="text-sm text-gray-600">Crevaison & outils</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📞</div>
                  <div className="font-semibold">Assistance</div>
                  <div className="text-sm text-gray-600">Support 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parcours Recommandés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Parcours recommandés</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez Antibes et ses environs avec nos circuits testés et approuvés
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {routes.map((route, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border">
                <div className={`h-48 bg-gradient-to-br ${
                  route.color === 'green' ? 'from-green-400 to-green-600' :
                  route.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  'from-purple-400 to-purple-600'
                } flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{route.name}</h3>
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
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      route.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                      route.difficulty === 'Modéré' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {route.difficulty}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-1">⭐</span>
                      <span>Recommandé</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-800 mb-3">Points d'intérêt :</h4>
                  <ul className="space-y-2">
                    {route.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-blue-500 mr-2">📍</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Voir l'itinéraire détaillé
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Besoin de conseils personnalisés ?</h3>
            <p className="text-gray-600 mb-6">
              Nos experts locaux vous recommandent les meilleurs parcours selon vos préférences et votre niveau
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              💬 Demander des conseils
            </button>
          </div>
        </div>
      </section>

      {/* Timeline du processus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
            <p className="text-xl text-gray-600">En 4 étapes simples, démarrez votre aventure</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block" />

              <div className="space-y-12">
                {/* Étape 1 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">📱</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Réservation</h3>
                      <p className="text-gray-600">
                        Réservez en ligne ou par téléphone. Choisissez votre vélo, vos dates et confirmez votre réservation.
                      </p>
                      <div className="text-sm text-blue-600 font-semibold mt-3">⏱️ 2 minutes</div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>

                {/* Étape 2 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12"></div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="lg:w-5/12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">🏪</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">2. Retrait</h3>
                      <p className="text-gray-600">
                        Présentez-vous au magasin avec vos documents. Nous préparons votre vélo et vous briefons.
                      </p>
                      <div className="text-sm text-purple-600 font-semibold mt-3">⏱️ 15 minutes</div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12 lg:text-right">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">🚴‍♂️</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Exploration</h3>
                      <p className="text-gray-600">
                        Partez à l'aventure ! Suivez nos parcours conseillés ou créez votre propre itinéraire.
                      </p>
                      <div className="text-sm text-green-600 font-semibold mt-3">⏱️ À votre rythme</div>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>

                {/* Étape 4 */}
                <div className="relative flex items-center justify-between">
                  <div className="lg:w-5/12"></div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full items-center justify-center text-white font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="lg:w-5/12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">4. Retour</h3>
                      <p className="text-gray-600">
                        Ramenez le vélo, partagez votre expérience et récupérez votre caution. C'est terminé !
                      </p>
                      <div className="text-sm text-orange-600 font-semibold mt-3">⏱️ 5 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ils ont testé, ils recommandent</h2>
            <p className="text-xl text-gray-600">Plus de 500 clients satisfaits cette année</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">98% de satisfaction client</h3>
              <p className="text-gray-600 mb-6">
                Rejoignez les centaines de clients qui nous font confiance pour découvrir Antibes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  📝 Laisser un avis
                </button>
                <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  👥 Voir tous les avis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de réservation et conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Réservez maintenant</h2>
              <LocationForm />
            </div>

            <div>
              <div className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Conditions de location</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">📋 Documents requis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Pièce d'identité valide
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Justificatif de domicile
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Caution de 500€ (chèque ou CB)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">⏰ Horaires</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Retrait: 9h-18h en semaine
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Retour: jusqu'à 19h
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Week-end: sur rendez-vous
                      </li>
                    </ul>
                  </div>
                </div>
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
                <span>contact@moustachebike-antibes.fr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decoration */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
      </section>
    </div>
  );
}
