import Link from 'next/link';
import FaqAccordion, { defaultFaqItems } from '@/components/FaqAccordion';
import HeroCarousel from '@/components/HeroCarousel';

export default function HomePage() {
  const heroSlides = [
    {
      id: 1,
      title: "MOUSTACHE BIKES",
      subtitle: "L'électromobilité haut de gamme à votre portée à Antibes",
      buttonText: "DÉCOUVRIR NOS VÉLOS",
      buttonLink: "/catalogue",
      backgroundImage: "/images/antibes-hero.jpg"
    },
    {
      id: 2,
      title: "EXPLOREZ ANTIBES",
      subtitle: "Découvrez les merveilles de la Côte d'Azur avec nos vélos électriques haut de gamme",
      buttonText: "LOUER UN VÉLO",
      buttonLink: "/location",
      backgroundImage: "/images/antibes-hero.jpg"
    },
    {
      id: 3,
      title: "NOTRE ATELIER",
      subtitle: "Entretien, réparation et personnalisation par nos experts certifiés",
      buttonText: "PRENDRE RDV",
      buttonLink: "/atelier",
      backgroundImage: "/images/antibes-hero.jpg"
    },
    {
      id: 4,
      title: "INNOVATION & QUALITÉ",
      subtitle: "Des vélos électriques Moustache conçus pour l'excellence et la performance",
      buttonText: "EN SAVOIR PLUS",
      buttonLink: "/apropos",
      backgroundImage: "/images/antibes-hero.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel slides={heroSlides} />

      <section className="py-20 bg-secondary-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-wide">NOS SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card-bg border border-border-color rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🚴‍♂️</div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">VENTE</h3>
              <p className="text-accent-silver mb-6 leading-relaxed">Large gamme de vélos électriques Moustache pour tous les besoins</p>
              <Link href="/catalogue" className="text-accent-gold hover:text-black font-bold transition-colors tracking-wide button-sparkle">
                VOIR LE CATALOGUE →
              </Link>
            </div>
            <div className="text-center p-8 bg-card-bg border border-border-color rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">📅</div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">LOCATION</h3>
              <p className="text-accent-silver mb-6 leading-relaxed">Essayez nos vélos avant achat ou pour vos sorties</p>
              <Link href="/location" className="text-accent-gold hover:text-black font-bold transition-colors tracking-wide button-sparkle">
                RÉSERVER →
              </Link>
            </div>
            <div className="text-center p-8 bg-card-bg border border-border-color rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">ATELIER</h3>
              <p className="text-accent-silver mb-6 leading-relaxed">Entretien et réparation par nos experts</p>
              <Link href="/atelier" className="text-accent-gold hover:text-black font-bold transition-colors tracking-wide button-sparkle">
                EN SAVOIR PLUS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-black border-t border-accent-gold">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">
              <span className="text-accent-gold">NOS VÉLOS</span> VEDETTES
            </h2>
            <p className="text-xl text-accent-silver max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection des modèles les plus populaires, plébiscités par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Samedi 28.1 */}
            <div className="bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="relative aspect-video bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 overflow-hidden">
                <img 
                  src="/images/bikes/samedi-28/samedi-28-1-black.jpg" 
                  alt="Samedi 28.1 - Noir"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  NOUVEAU
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-accent-gold text-primary-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">ENTRÉE DE GAMME</span>
                  <div className="flex text-accent-gold">
                    ★★★★☆
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.1</h3>
                <p className="text-accent-silver text-sm mb-4">Vélo électrique urbain parfait pour débuter</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent-gold">1 999€</span>
                  <Link href="/produit/samedi-28-1" className="bg-accent-gold text-primary-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-primary-black transition-all duration-300 tracking-wide">
                    VOIR DÉTAILS
                  </Link>
                </div>
              </div>
            </div>

            {/* Samedi 28.2 */}
            <div className="bg-card-bg border border-accent-gold rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-gold text-primary-black px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ POPULAIRE
                </span>
              </div>
              <div className="relative aspect-video bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 overflow-hidden">
                <img 
                  src="/images/bikes/samedi-28/samedi-28-2.jpg" 
                  alt="Samedi 28.2 - Ambre"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-accent-gold text-primary-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">BESTSELLER</span>
                  <div className="flex text-accent-gold">
                    ★★★★★
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.2</h3>
                <p className="text-accent-silver text-sm mb-4">Le choix parfait entre performance et prix</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent-gold">2 799€</span>
                  <Link href="/catalogue" className="bg-accent-gold text-primary-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-primary-black transition-all duration-300 tracking-wide">
                    VOIR DÉTAILS
                  </Link>
                </div>
              </div>
            </div>

            {/* Samedi 28.4 */}
            <div className="bg-card-bg border border-border-color rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover-glow">
              <div className="relative aspect-video bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 overflow-hidden">
                <img 
                  src="/images/bikes/samedi-28/samedi-28-4.jpg" 
                  alt="Samedi 28.4 - Rouge Premium"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  PREMIUM
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-accent-gold text-primary-black text-xs font-bold px-3 py-1 rounded-full tracking-wide">HAUT DE GAMME</span>
                  <div className="flex text-accent-gold">
                    ★★★★★
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.4</h3>
                <p className="text-accent-silver text-sm mb-4">La référence absolue en vélo électrique urbain</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent-gold">3 399€</span>
                  <Link href="/catalogue" className="bg-accent-gold text-primary-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-primary-black transition-all duration-300 tracking-wide">
                    VOIR DÉTAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/catalogue"
              className="inline-flex items-center bg-gradient-to-r from-accent-gold to-yellow-400 text-primary-black px-8 py-4 rounded-xl text-lg font-bold tracking-wide hover:from-white hover:to-accent-gold transition-all duration-300 transform hover:scale-105 shadow-2xl hover-glow"
            >
              VOIR TOUS NOS VÉLOS
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20 bg-secondary-black border-t border-accent-gold">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">
              <span className="text-accent-gold">NOS PARTENAIRES</span> DE CONFIANCE
            </h2>
            <p className="text-lg text-accent-silver max-w-3xl mx-auto leading-relaxed">
              Nous collaborons avec les meilleures marques pour vous offrir une expérience complète
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Moustache Bikes - Marque principale */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">🚴</div>
                <div className="font-bold text-white text-sm tracking-wide">MOUSTACHE</div>
              </div>
            </div>

            {/* Bosch - Moteurs */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">⚡</div>
                <div className="font-bold text-white text-sm tracking-wide">BOSCH</div>
              </div>
            </div>

            {/* Shimano - Composants */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">⚙️</div>
                <div className="font-bold text-white text-sm tracking-wide">SHIMANO</div>
              </div>
            </div>

            {/* Sram - Composants */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">🔧</div>
                <div className="font-bold text-white text-sm tracking-wide">SRAM</div>
              </div>
            </div>

            {/* Magura - Freins */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">🛑</div>
                <div className="font-bold text-white text-sm tracking-wide">MAGURA</div>
              </div>
            </div>

            {/* RockShox - Suspensions */}
            <div className="flex items-center justify-center p-6 bg-card-bg border border-border-color rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow">
              <div className="text-center">
                <div className="text-4xl mb-2 text-accent-gold">🏔️</div>
                <div className="font-bold text-white text-sm tracking-wide">ROCKSHOX</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 bg-card-bg border border-accent-gold rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                <span className="text-accent-gold">CERTIFICATIONS</span> & LABELS
              </h3>
              <p className="text-accent-silver">Nos engagements qualité et environnement</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-secondary-black border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="text-3xl mb-2 text-accent-gold">🌿</div>
                <div className="font-bold text-sm text-white tracking-wide">ECO-FRIENDLY</div>
                <div className="text-xs text-accent-silver mt-1">Mobilité durable</div>
              </div>

              <div className="text-center p-4 bg-secondary-black border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="text-3xl mb-2 text-accent-gold">🏆</div>
                <div className="font-bold text-sm text-white tracking-wide">QUALITÉ</div>
                <div className="text-xs text-accent-silver mt-1">Norme ISO 9001</div>
              </div>

              <div className="text-center p-4 bg-secondary-black border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="text-3xl mb-2 text-accent-gold">🔒</div>
                <div className="font-bold text-sm text-white tracking-wide">SÉCURITÉ</div>
                <div className="text-xs text-accent-silver mt-1">Tests CE</div>
              </div>

              <div className="text-center p-4 bg-secondary-black border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="text-3xl mb-2 text-accent-gold">⭐</div>
                <div className="font-bold text-sm text-white tracking-wide">SERVICE+</div>
                <div className="text-xs text-accent-silver mt-1">Revendeur agréé</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-black py-20 border-t border-accent-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white tracking-wide">
            <span className="text-accent-gold">POURQUOI CHOISIR</span> MOUSTACHE BIKES ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-card-bg border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-4xl mb-4 text-accent-gold">✅</div>
              <h3 className="font-bold text-white text-lg tracking-wide">QUALITÉ PREMIUM</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card-bg border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-4xl mb-4 text-accent-gold">🛠️</div>
              <h3 className="font-bold text-white text-lg tracking-wide">SERVICE EXPERT</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card-bg border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-4xl mb-4 text-accent-gold">🌟</div>
              <h3 className="font-bold text-white text-lg tracking-wide">CONSEIL PERSONNALISÉ</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-card-bg border border-border-color rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-4xl mb-4 text-accent-gold">📍</div>
              <h3 className="font-bold text-white text-lg tracking-wide">LOCAL À ANTIBES</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-secondary-black border-t border-accent-gold">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">
              <span className="text-accent-gold">QUESTIONS</span> FRÉQUENTES
            </h2>
            <p className="text-xl text-accent-silver max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement les réponses à vos questions sur nos vélos électriques
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FaqAccordion items={defaultFaqItems} />
          </div>

          <div className="text-center mt-16">
            <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
              <div className="text-4xl mb-6 text-accent-gold">💬</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                VOUS AVEZ D'AUTRES QUESTIONS ?
              </h3>
              <p className="text-accent-silver mb-8 leading-relaxed">
                Notre équipe d'experts est là pour vous accompagner dans votre choix
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent-gold text-primary-black px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow inline-flex items-center justify-center"
                >
                  📧 NOUS CONTACTER
                </Link>
                <Link
                  href="tel:+33493956789"
                  className="bg-secondary-black border border-accent-gold text-accent-gold px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-accent-gold hover:text-primary-black transition-all duration-300 hover-glow inline-flex items-center justify-center"
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
