import Link from 'next/link';
import FaqAccordion, { defaultFaqItems } from '@/components/FaqAccordion';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Moustache Bikes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            L'électromobilité à votre portée avec nos vélos électriques premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Découvrir nos vélos
            </Link>
            <Link
              href="/location"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Louer un vélo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚴‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">Vente</h3>
              <p className="text-gray-600 mb-4">Large gamme de vélos électriques Moustache pour tous les besoins</p>
              <Link href="/catalogue" className="text-blue-600 hover:underline">
                Voir le catalogue →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Essayez nos vélos avant achat ou pour vos sorties</p>
              <Link href="/location" className="text-blue-600 hover:underline">
                Réserver →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Atelier</h3>
              <p className="text-gray-600 mb-4">Entretien et réparation par nos experts</p>
              <Link href="/atelier" className="text-blue-600 hover:underline">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos vélos vedettes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection des modèles les plus populaires, plébiscités par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {/* Samedi 28 Trail */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">🚵‍♂️</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Bestseller</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Samedi 28 Trail</h3>
                <p className="text-gray-600 text-sm mb-4">VTT électrique polyvalent pour tous les terrains</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">4 299€</span>
                  <Link href="/catalogue" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>

            {/* Friday 28.3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-6xl">🚲</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">Urbain</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Friday 28.3</h3>
                <p className="text-gray-600 text-sm mb-4">Vélo urbain électrique design et confortable</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">3 799€</span>
                  <Link href="/catalogue" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>

            {/* Lundi 28.3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-6xl">🚴‍♀️</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Trekking</span>
                  <div className="flex text-yellow-400">
                    ★★★★☆
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lundi 28.3</h3>
                <p className="text-gray-600 text-sm mb-4">Vélo trekking pour vos longues aventures</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">3 599€</span>
                  <Link href="/catalogue" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>

            {/* Cargo Game */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-6xl">📦</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">Cargo</span>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cargo Game</h3>
                <p className="text-gray-600 text-sm mb-4">Vélo cargo électrique pour toute la famille</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">5 299€</span>
                  <Link href="/catalogue" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/catalogue"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Voir tous nos vélos
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos partenaires de confiance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les meilleures marques pour vous offrir une expérience complète
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Moustache Bikes - Marque principale */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">🚴</div>
                <div className="font-bold text-gray-800 text-sm">MOUSTACHE</div>
              </div>
            </div>

            {/* Bosch - Moteurs */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="font-bold text-gray-800 text-sm">BOSCH</div>
              </div>
            </div>

            {/* Shimano - Composants */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-bold text-gray-800 text-sm">SHIMANO</div>
              </div>
            </div>

            {/* Sram - Composants */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">🔧</div>
                <div className="font-bold text-gray-800 text-sm">SRAM</div>
              </div>
            </div>

            {/* Magura - Freins */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">🛑</div>
                <div className="font-bold text-gray-800 text-sm">MAGURA</div>
              </div>
            </div>

            {/* RockShox - Suspensions */}
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-2">🏔️</div>
                <div className="font-bold text-gray-800 text-sm">ROCKSHOX</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications & Labels</h3>
              <p className="text-gray-600">Nos engagements qualité et environnement</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🌿</div>
                <div className="font-semibold text-sm text-gray-800">ECO-FRIENDLY</div>
                <div className="text-xs text-gray-600 mt-1">Mobilité durable</div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold text-sm text-gray-800">QUALITÉ</div>
                <div className="text-xs text-gray-600 mt-1">Norme ISO 9001</div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🔒</div>
                <div className="font-semibold text-sm text-gray-800">SÉCURITÉ</div>
                <div className="text-xs text-gray-600 mt-1">Tests CE</div>
              </div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">⭐</div>
                <div className="font-semibold text-sm text-gray-800">SERVICE+</div>
                <div className="text-xs text-gray-600 mt-1">Revendeur agréé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Moustache Bikes ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-semibold">Qualité premium</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="font-semibold">Service expert</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold">Conseil personnalisé</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold">Local à Antibes</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Questions fréquentes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur nos vélos électriques
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={defaultFaqItems} />
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vous avez d'autres questions ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts est là pour vous accompagner dans votre choix
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  📧 Nous contacter
                </Link>
                <Link
                  href="tel:+33493956789"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  📞 04 93 95 67 89
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
