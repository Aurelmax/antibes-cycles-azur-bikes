import Link from 'next/link';
import Hero from '@/components/Hero';

export default function AtelierPage() {
  return (
    <div>
      <Hero 
        title="NOTRE ATELIER"
        subtitle="Entretien, réparation et personnalisation de votre vélo électrique par nos experts certifiés"
        buttonText="PRENDRE RDV"
        buttonLink="#services"
      />
      
      <div className="py-12" id="services">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">NOS SERVICES</h2>

            <div className="space-y-8">
              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-6 text-accent-gold">🔧</div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">ENTRETIEN</h3>
                </div>
                <p className="text-accent-silver mb-4 leading-relaxed">
                  Entretien complet de votre vélo électrique : vérification des freins, 
                  réglage des vitesses, contrôle de la batterie et du moteur.
                </p>
                <ul className="text-accent-silver space-y-2">
                  <li>• Contrôle technique complet</li>
                  <li>• Réglage des freins et dérailleurs</li>
                  <li>• Vérification de la batterie</li>
                  <li>• Test du moteur électrique</li>
                </ul>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-6 text-accent-gold">⚡</div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">RÉPARATION</h3>
                </div>
                <p className="text-accent-silver mb-4 leading-relaxed">
                  Réparation de tous les composants électriques et mécaniques 
                  par nos techniciens certifiés Moustache.
                </p>
                <ul className="text-accent-silver space-y-2">
                  <li>• Diagnostic électronique</li>
                  <li>• Remplacement de pièces</li>
                  <li>• Réparation moteur Bosch</li>
                  <li>• Garantie sur les réparations</li>
                </ul>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-6 text-accent-gold">🎨</div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">PERSONNALISATION</h3>
                </div>
                <p className="text-accent-silver mb-4 leading-relaxed">
                  Personnalisez votre vélo selon vos goûts et vos besoins 
                  avec nos options d'accessoires et de finitions.
                </p>
                <ul className="text-accent-silver space-y-2">
                  <li>• Accessoires de confort</li>
                  <li>• Éclairage personnalisé</li>
                  <li>• Peinture sur mesure</li>
                  <li>• Modifications techniques</li>
                </ul>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-6 text-accent-gold">📐</div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">RÉGLAGE POSTURAL</h3>
                </div>
                <p className="text-accent-silver mb-4 leading-relaxed">
                  Optimisez votre position sur vélo pour améliorer vos performances 
                  et votre confort avec notre service de réglage postural professionnel.
                </p>
                <ul className="text-accent-silver space-y-2">
                  <li>• Analyse vidéo de votre position</li>
                  <li>• Réglage selle et guidon</li>
                  <li>• Ajustement des cales</li>
                  <li>• Conseils personnalisés</li>
                </ul>
                <div className="mt-4">
                  <Link 
                    href="/services/reglage-postural"
                    className="inline-flex items-center text-accent-gold hover:text-white transition-colors font-semibold"
                  >
                    En savoir plus
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">PRENDRE RENDEZ-VOUS</h2>
            
            <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">NOM COMPLET</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">TÉLÉPHONE</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    placeholder="04 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">TYPE DE SERVICE</label>
                  <select className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold">
                    <option value="">Choisir un service</option>
                    <option value="entretien">Entretien</option>
                    <option value="reparation">Réparation</option>
                    <option value="personnalisation">Personnalisation</option>
                    <option value="reglage-postural">Réglage postural</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">DATE SOUHAITÉE</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold" 
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">MESSAGE</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    rows={4}
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent-gold text-primary-black py-4 px-6 rounded-lg font-bold tracking-wide hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow button-glow-intense button-shimmer"
                >
                  ENVOYER LA DEMANDE
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-card-bg border border-accent-gold rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">INFORMATIONS PRATIQUES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">⏰</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">HORAIRES</h3>
              <p className="text-accent-silver">
                Lun-Sam: 9h-19h<br />
                Dim: 10h-18h
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">📍</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">ADRESSE</h3>
              <p className="text-accent-silver">
                Atelier Moustache Bikes<br />
                Antibes, France
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">🚗</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">PARKING</h3>
              <p className="text-sm text-accent-silver">
                Places de parking<br />
                disponibles devant<br />
                l'atelier
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}