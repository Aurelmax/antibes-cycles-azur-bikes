// Import du composant ProductCard depuis le dossier src/components
import ProductCard from '../../components/ProductCard';
import Hero from '../../components/Hero';
import Link from 'next/link';

export default function CataloguePage() {
  const exampleProduct = {
    id: 1,
    name: 'Lundi 26',
    price: 2999.99,
    categoryName: 'Ville Pratique',
    imageUrl: '/images/lundi26.jpg',
  };

  return (
    <main>
      <Hero 
        title="CATALOGUE"
        subtitle="Découvrez notre sélection de vélos électriques haut de gamme par catégorie"
        buttonText="EXPLORER"
        buttonLink="#products"
        backgroundImage="/images/antibes-hero.jpg"
      />

      {/* Section Variantes de vélos */}
      <section className="py-16 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">
              <span className="text-accent-gold">VARIANTES</span> SAMEDI 28
            </h2>
            <p className="text-xl text-accent-silver max-w-3xl mx-auto">
              Découvrez les différentes versions du Samedi 28, chacune adaptée à vos besoins et votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Samedi 28.1 */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow flex flex-col">
              <div className="text-center mb-6">
                <div className="relative w-full h-56 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl mb-4 overflow-hidden shadow-lg border border-accent-gold/20">
                  <img 
                    src="/images/bikes/samedi-28/samedi-28-1-black.jpg" 
                    alt="Samedi 28.1 - Noir"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-accent-gold text-primary-black px-2 py-1 rounded-full text-xs font-bold">
                    NOUVEAU
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.1</h3>
                <div className="text-3xl font-bold text-accent-gold mb-2">1 999 €</div>
                <div className="text-accent-silver mb-4">ou 49 € / mois</div>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Couleur(s)</span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-black rounded-full border border-accent-gold"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Moteur / Couple</span>
                  <span className="text-white font-semibold">Bosch Active Line / 40 Nm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Batterie / Autonomie</span>
                  <span className="text-white font-semibold">Bosch PowerPack 400Wh / 108 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Display</span>
                  <span className="text-white font-semibold">Bosch Purion</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Transmission</span>
                  <span className="text-white font-semibold">Shimano dérailleur 9 vitesses</span>
                </div>
              </div>

              <Link href="/produit/samedi-28-1" className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense flex items-center justify-center mt-auto">
                <span className="mr-2">▶</span>
                DÉCOUVRIR
              </Link>
            </div>

            {/* Samedi 28.2 */}
            <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-gold text-primary-black px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ POPULAIRE
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="relative w-full h-56 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl mb-4 overflow-hidden shadow-lg border border-accent-gold/20">
                  <img 
                    src="/images/bikes/samedi-28/samedi-28-2.jpg" 
                    alt="Samedi 28.2 - Couleur ambre"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-accent-gold text-primary-black px-2 py-1 rounded-full text-xs font-bold">
                    POPULAIRE
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.2</h3>
                <div className="text-3xl font-bold text-accent-gold mb-2">2 799 €</div>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Couleur(s)</span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-amber-200 rounded-full border border-accent-gold"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Moteur / Couple</span>
                  <span className="text-white font-semibold">Bosch Performance Line / 65 Nm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Batterie / Autonomie</span>
                  <span className="text-white font-semibold">Bosch PowerTube 400Wh / 108km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Display</span>
                  <span className="text-white font-semibold">Bosch Purion</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Transmission</span>
                  <span className="text-white font-semibold">Shimano dérailleur 9 vitesses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Tige de selle</span>
                  <span className="text-white font-semibold">Suspendue (amortisseur intégré)</span>
                </div>
              </div>

              <button className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense flex items-center justify-center mt-auto">
                <span className="mr-2">▶</span>
                DÉCOUVRIR
              </button>
            </div>

            {/* Samedi 28.4 */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow flex flex-col">
              <div className="text-center mb-6">
                <div className="relative w-full h-56 bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl mb-4 overflow-hidden shadow-lg border border-accent-gold/20">
                  <img 
                    src="/images/bikes/samedi-28/samedi-28-4.jpg" 
                    alt="Samedi 28.4 - Rouge premium"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-2 right-2 bg-accent-gold text-primary-black px-2 py-1 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">SAMEDI 28.4</h3>
                <div className="text-3xl font-bold text-accent-gold mb-2">3 399 €</div>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Couleur(s)</span>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full border border-accent-gold"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Moteur / Couple</span>
                  <span className="text-white font-semibold">Bosch Performance Line Smart System / 75 Nm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Batterie / Autonomie</span>
                  <span className="text-white font-semibold">Bosch PowerTube 500Wh / 125km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Display</span>
                  <span className="text-white font-semibold">Bosch Purion 200 - Connecté</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Transmission</span>
                  <span className="text-white font-semibold">Shimano dérailleur 10 vitesses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Tige de selle</span>
                  <span className="text-white font-semibold">Suspendue (amortisseur intégré)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-accent-silver">Antivol</span>
                  <span className="text-white font-semibold">AXA, intégré au cadre</span>
                </div>
              </div>

              <button className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense flex items-center justify-center mt-auto">
                <span className="mr-2">▶</span>
                DÉCOUVRIR
              </button>
            </div>
          </div>

          {/* Notes légales */}
          <div className="bg-card-bg border border-border-color rounded-xl p-6 text-center">
            <p className="text-sm text-accent-silver mb-2">
              * Estimez votre autonomie batterie, selon vos conditions d'usage, avec l'assistant autonomie Bosch.
            </p>
            <p className="text-sm text-accent-silver mb-2">
              (1) Prix public généralement constaté
            </p>
            <p className="text-sm text-accent-silver">
              (2) Prix mensuel indicatif dans le cadre d'offres de financement. Un crédit vous engage et doit être remboursé. 
              Vérifiez vos capacités de remboursement avant de vous engager. Exemple : crédit affecté de 3 999€ sur 48 mois, 
              TAEG fixe 0%, 48 mensualités de 83,31€, montant total dû: 3 999€. Offre soumise à acceptation par Cofidis SA.
            </p>
          </div>
        </div>
      </section>

      {/* Section Financement */}
      <section className="py-16 bg-gradient-to-br from-accent-gold/10 via-secondary-black to-accent-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">
              <span className="text-accent-gold">FINANCEMENT</span> FLEXIBLE
            </h2>
            <p className="text-xl text-accent-silver max-w-3xl mx-auto">
              Rendez votre vélo électrique accessible avec nos solutions de paiement adaptées à votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 3x sans frais */}
            <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-gold text-primary-black px-4 py-2 rounded-bl-lg font-bold text-sm">
                ⭐ POPULAIRE
              </div>
              <div className="text-6xl mb-6 text-accent-gold">💳</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">3X SANS FRAIS</h3>
              <div className="text-4xl font-bold text-accent-gold mb-2">0%</div>
              <p className="text-accent-silver mb-6">Taux d'intérêt</p>
              <ul className="text-accent-silver space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Aucun frais caché
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Réponse immédiate
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Justificatifs simples
                </li>
              </ul>
              <button className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense">
                DEMANDER UN DEVIS
              </button>
            </div>

            {/* 4x sans frais */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow relative overflow-hidden">
              <div className="text-6xl mb-6 text-accent-gold">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">4X SANS FRAIS</h3>
              <div className="text-4xl font-bold text-accent-gold mb-2">0%</div>
              <p className="text-accent-silver mb-6">Taux d'intérêt</p>
              <ul className="text-accent-silver space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Paiement étalé
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Aucun intérêt
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Conditions flexibles
                </li>
              </ul>
              <button className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense">
                EN SAVOIR PLUS
              </button>
            </div>

            {/* Crédit classique */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover-glow relative overflow-hidden">
              <div className="text-6xl mb-6 text-accent-gold">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">CRÉDIT CLASSIQUE</h3>
              <div className="text-4xl font-bold text-accent-gold mb-2">2.9%</div>
              <p className="text-accent-silver mb-6">Taux d'intérêt</p>
              <ul className="text-accent-silver space-y-2 mb-6 text-left">
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Jusqu'à 60 mois
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Taux préférentiel
                </li>
                <li className="flex items-center">
                  <span className="text-accent-gold mr-2">✓</span>
                  Simulation gratuite
                </li>
              </ul>
              <button className="w-full bg-accent-gold text-primary-black py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense">
                SIMULER
              </button>
            </div>
          </div>

          {/* Section avantages */}
          <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">POURQUOI CHOISIR NOTRE FINANCEMENT ?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent-gold">⚡</div>
                <h4 className="font-bold text-white mb-2">RAPIDE</h4>
                <p className="text-sm text-accent-silver">Réponse en 24h</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent-gold">🔒</div>
                <h4 className="font-bold text-white mb-2">SÉCURISÉ</h4>
                <p className="text-sm text-accent-silver">Données protégées</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent-gold">💡</div>
                <h4 className="font-bold text-white mb-2">TRANSPARENT</h4>
                <p className="text-sm text-accent-silver">Aucun frais caché</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent-gold">🎯</div>
                <h4 className="font-bold text-white mb-2">PERSONNALISÉ</h4>
                <p className="text-sm text-accent-silver">Solutions sur mesure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-12" id="products">
        <div className="max-w-4xl mx-auto">
      <ProductCard {...exampleProduct} />
        </div>
      </div>
    </main>
  );
}
