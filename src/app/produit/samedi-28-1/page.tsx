import Hero from '@/components/Hero';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import { Product } from '@/types/cart';

export default function Samedi281Page() {
  // Données du produit Samedi 28.1
  const product: Product = {
    id: 'samedi-28-1',
    name: 'Samedi 28.1',
    price: 1999,
    image: '/images/bikes/samedi-28/samedi-28-1-black.jpg',
    category: 'Vélo électrique urbain',
    description: 'Vélo électrique urbain parfait pour débuter avec tous les éléments clés pour partir en balade ou se rendre au bureau.',
    specifications: {
      motor: 'Bosch Active Line / 40 Nm',
      battery: 'Bosch PowerPack 400Wh / 108 km',
      autonomy: '108 km',
      weight: '24.5 kg'
    }
  };

  return (
    <main>
      <Hero 
        title="SAMEDI 28.1"
        subtitle="Vélo électrique urbain haut de gamme"
        buttonText="ESSAYER EN MAGASIN"
        buttonLink="/contact"
        backgroundImage="/images/bikes/samedi-28/samedi-28-1-black.jpg"
      />

      {/* Section principale du produit */}
      <section className="py-16 bg-primary-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image du produit */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-card-bg border border-border-color rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/bikes/samedi-28/samedi-28-1-black.jpg" 
                  alt="Samedi 28.1 - Noir"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold">
                  NOUVEAU
                </div>
              </div>
              
              {/* Galerie d'images (placeholder pour futures images) */}
              <div className="grid grid-cols-4 gap-4">
                <div className="aspect-square bg-card-bg border border-border-color rounded-lg overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                  <img 
                    src="/images/bikes/samedi-28/samedi-28-1-black.jpg" 
                    alt="Vue 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-card-bg border border-border-color rounded-lg overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                </div>
                <div className="aspect-square bg-card-bg border border-border-color rounded-lg overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                </div>
                <div className="aspect-square bg-card-bg border border-border-color rounded-lg overflow-hidden cursor-pointer hover:border-accent-gold transition-colors">
                  <div className="w-full h-full bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 flex items-center justify-center">
                    <span className="text-2xl">📸</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations du produit */}
            <div className="space-y-8">
              {/* En-tête */}
              <div>
                <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">SAMEDI 28.1</h1>
                <div className="flex items-center space-x-4 mb-6">
                  <button className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense">
                    ESSAYER EN MAGASIN
                  </button>
                </div>
                <div className="text-4xl font-bold text-accent-gold mb-2">1 999 €</div>
                <div className="text-xl text-accent-silver mb-4">ou 49 € / mois</div>
                <div className="flex space-x-4 mb-4">
                  <AddToCartButton 
                    product={product}
                    className="flex-1"
                  >
                    AJOUTER AU PANIER
                  </AddToCartButton>
                  <button className="bg-secondary-black border border-accent-gold text-accent-gold px-6 py-3 rounded-lg font-bold hover:bg-accent-gold hover:text-primary-black transition-all duration-300">
                    ESSAYER EN MAGASIN
                  </button>
                </div>
                <Link href="#specifications" className="text-accent-gold hover:text-white transition-colors">
                  En savoir plus ↓
                </Link>
              </div>

              {/* Description */}
              <div className="bg-card-bg border border-border-color rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">DESCRIPTION</h3>
                <p className="text-accent-silver leading-relaxed mb-4">
                  Samedi 28.1 dispose de tous les éléments clés pour partir en balade ou se rendre au bureau 
                  l'esprit tranquille et le sourire aux lèvres : un cadre en aluminium léger à la finition léchée, 
                  une position ultra confortable, des composants de qualité, une batterie et un moteur Bosch 
                  performant et fiable.
                </p>
                <button className="text-accent-gold hover:text-white transition-colors font-semibold">
                  Lire + 
                </button>
              </div>

              {/* Configuration */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">CONFIGURATION</h3>
                
                {/* Sélection du cadre */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Sélectionnez votre cadre</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-accent-gold text-primary-black px-4 py-3 rounded-lg font-semibold text-center border-2 border-accent-gold">
                      Open
                    </button>
                    <button className="bg-card-bg text-white px-4 py-3 rounded-lg font-semibold text-center border-2 border-border-color hover:border-accent-gold transition-colors">
                      Standard (+100€)
                    </button>
                  </div>
                </div>

                {/* Sélection de la batterie */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Sélectionnez votre batterie</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-accent-gold text-primary-black px-4 py-3 rounded-lg font-semibold text-center border-2 border-accent-gold">
                      400Wh
                    </button>
                    <button className="bg-card-bg text-white px-4 py-3 rounded-lg font-semibold text-center border-2 border-border-color hover:border-accent-gold transition-colors">
                      500Wh (+100€)
                    </button>
                  </div>
                </div>

                {/* Choix de la taille */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Choisissez votre taille</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-accent-gold mb-2">Cadre standard</h5>
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          S (1.55-1.70m)
                        </button>
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          M (1.68-1.83m)
                        </button>
                        <button className="bg-accent-gold text-primary-black px-3 py-2 rounded text-sm border-2 border-accent-gold font-semibold">
                          L (1.80-1.95m)
                        </button>
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          XL (1.90-2.05m)
                        </button>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-accent-gold mb-2">Cadre ouvert</h5>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          S (1.49-1.61m)
                        </button>
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          M (1.59-1.75m)
                        </button>
                        <button className="bg-card-bg text-white px-3 py-2 rounded text-sm border border-border-color hover:border-accent-gold transition-colors">
                          L (1.74-1.90m)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessoires compatibles */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">ACCESSOIRES COMPATIBLES</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-card-bg border border-border-color rounded-lg p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎒</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">Clark - Sac À Dos 17L</h4>
                      <p className="text-accent-silver text-sm">Sac à dos pratique pour vos trajets</p>
                    </div>
                    <div className="text-accent-gold font-bold">+119€</div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-card-bg border border-border-color rounded-lg p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🍼</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">Porte Bidon Moustache</h4>
                      <p className="text-accent-silver text-sm">Dégagement latéral</p>
                    </div>
                    <div className="text-accent-gold font-bold">+7.9€</div>
                  </div>
                </div>
              </div>

              {/* Configuration par email */}
              <div className="bg-card-bg border border-accent-gold rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">RECEVOIR LA CONFIGURATION PAR EMAIL</h3>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    placeholder="Votre adresse mail"
                    className="flex-1 px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold"
                  />
                  <button className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense">
                    ENVOYER
                  </button>
                </div>
                <div className="mt-3">
                  <label className="flex items-start space-x-2 text-sm text-accent-silver">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      J'accepte de recevoir la newsletter et que mes données soient utilisées conformément à la 
                      <Link href="/politique-confidentialite" className="text-accent-gold hover:text-white">
                        politique de confidentialité
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques */}
      <section id="specifications" className="py-16 bg-secondary-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <span className="text-accent-gold">SPÉCIFICATIONS</span> TECHNIQUES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Moteur */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                MOTEUR
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Type</span>
                  <span className="text-white font-semibold">Bosch Active Line</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Couple</span>
                  <span className="text-white font-semibold">40 Nm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Vitesse max</span>
                  <span className="text-white font-semibold">25 km/h</span>
                </div>
              </div>
            </div>

            {/* Batterie */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🔋</span>
                BATTERIE
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Type</span>
                  <span className="text-white font-semibold">Bosch PowerPack 400Wh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Autonomie</span>
                  <span className="text-white font-semibold">108 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Temps de charge</span>
                  <span className="text-white font-semibold">3.5h</span>
                </div>
              </div>
            </div>

            {/* Transmission */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                TRANSMISSION
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Dérailleur</span>
                  <span className="text-white font-semibold">Shimano 9 vitesses</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Pédalier</span>
                  <span className="text-white font-semibold">Shimano</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Chaîne</span>
                  <span className="text-white font-semibold">KMC</span>
                </div>
              </div>
            </div>

            {/* Freinage */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🛑</span>
                FREINAGE
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Avant</span>
                  <span className="text-white font-semibold">Hydraulique</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Arrière</span>
                  <span className="text-white font-semibold">Hydraulique</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Disques</span>
                  <span className="text-white font-semibold">180mm</span>
                </div>
              </div>
            </div>

            {/* Pneus */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🛞</span>
                PNEUS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Dimensions</span>
                  <span className="text-white font-semibold">28" x 2.0"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Type</span>
                  <span className="text-white font-semibold">Urbain</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Anticrevaison</span>
                  <span className="text-white font-semibold">Oui</span>
                </div>
              </div>
            </div>

            {/* Poids et dimensions */}
            <div className="bg-card-bg border border-border-color rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">📏</span>
                DIMENSIONS
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-accent-silver">Poids</span>
                  <span className="text-white font-semibold">24.5 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Charge max</span>
                  <span className="text-white font-semibold">120 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent-silver">Garantie</span>
                  <span className="text-white font-semibold">2 ans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
