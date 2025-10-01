import Hero from '@/components/Hero';

export default function ContactPage() {
  return (
    <div>
      <Hero 
        title="CONTACTEZ-NOUS"
        subtitle="Une question ? Un conseil ? N'hésitez pas à nous contacter !"
        buttonText="NOUS ÉCRIRE"
        buttonLink="#contact-form"
        backgroundImage="/images/bikes/samedi-28/montagne-antibes.jpg"
      />
      
      <div className="py-8" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">NOS COORDONNÉES</h2>

            <div className="space-y-6">
              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-accent-gold">📍</div>
                  <h3 className="text-xl font-bold text-white tracking-wide">ADRESSE</h3>
                </div>
                <p className="text-accent-silver">
                  Moustache Bikes Antibes<br />
                  123 Avenue de la République<br />
                  06600 Antibes, France
                </p>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-accent-gold">📞</div>
                  <h3 className="text-xl font-bold text-white tracking-wide">TÉLÉPHONE</h3>
                </div>
                <p className="text-accent-silver">
                  <a href="tel:+33493956789" className="hover:text-accent-gold transition-colors">
                    04 93 95 67 89
                  </a>
                </p>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-accent-gold">📧</div>
                  <h3 className="text-xl font-bold text-white tracking-wide">EMAIL</h3>
                </div>
                <p className="text-accent-silver">
                  <a href="mailto:contact@moustachebike-antibes.fr" className="hover:text-accent-gold transition-colors">
                    contact@moustachebike-antibes.fr
                  </a>
                </p>
              </div>

              <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover-glow">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4 text-accent-gold">⏰</div>
                  <h3 className="text-xl font-bold text-white tracking-wide">HORAIRES</h3>
                </div>
                <div className="text-accent-silver space-y-1">
                  <p>Lundi - Vendredi: 9h - 19h</p>
                  <p>Samedi: 9h - 18h</p>
                  <p>Dimanche: 10h - 17h</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">NOUS ÉCRIRE</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">PRÉNOM</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2 tracking-wide">NOM</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                    placeholder="Votre nom"
                  />
                </div>
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
                <label className="block text-white font-bold mb-2 tracking-wide">SUJET</label>
                <select className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold">
                  <option value="">Choisir un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="location">Location de vélo</option>
                  <option value="achat">Achat de vélo</option>
                  <option value="entretien">Entretien</option>
                  <option value="reglage-postural">Réglage postural</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-bold mb-2 tracking-wide">MESSAGE</label>
                <textarea 
                  className="w-full px-4 py-3 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray" 
                  rows={6}
                  placeholder="Votre message..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-accent-gold text-primary-black py-4 px-6 rounded-lg font-bold tracking-wide hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow button-glow-intense button-shimmer"
              >
                ENVOYER LE MESSAGE
              </button>
            </form>
          </div>
        </div>

        <div className="bg-card-bg border border-accent-gold rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">NOUS TROUVER</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">🚗</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">EN VOITURE</h3>
              <p className="text-accent-silver">
                Parking gratuit disponible<br />
                Accès direct depuis l'A8
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">🚌</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">EN TRANSPORT</h3>
              <p className="text-accent-silver">
                Bus ligne 2, arrêt République<br />
                Gare SNCF à 5 minutes
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4 text-accent-gold">🚴‍♂️</div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide">À VÉLO</h3>
              <p className="text-accent-silver">
                Piste cyclable directe<br />
                Stationnement vélo sécurisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}