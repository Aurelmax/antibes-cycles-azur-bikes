// Import du composant ProductCard depuis le dossier src/components
import ProductCard from '../../components/ProductCard';
import Hero from '../../components/Hero';

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
