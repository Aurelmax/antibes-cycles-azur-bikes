export default function ContactPage() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contactez-nous</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une question ? Un conseil ? N'hésitez pas à nous contacter !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">📍</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    123 Avenue de la République<br />
                    06600 Antibes<br />
                    France
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">📞</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+33400000000" className="hover:text-blue-600">
                      04 XX XX XX XX
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Du lundi au samedi de 9h à 18h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">✉️</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@moustachebikes-antibes.fr" className="hover:text-blue-600">
                      contact@moustachebikes-antibes.fr
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">⏰</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horaires d'ouverture</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lundi - Vendredi: 9h00 - 19h00</p>
                    <p>Samedi: 9h00 - 18h00</p>
                    <p>Dimanche: 10h00 - 17h00</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Fermé les jours fériés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="info">Demande d'information</option>
                  <option value="achat">Achat de vélo</option>
                  <option value="location">Location</option>
                  <option value="atelier">Service atelier</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Comment nous trouver</h2>
        <div className="text-center mb-6">
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-600">
            <div>
              <div className="text-4xl mb-2">🗺️</div>
              <p>Carte interactive Google Maps</p>
              <p className="text-sm">123 Avenue de la République, Antibes</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl mb-2">🚗</div>
            <h3 className="font-semibold mb-1">En voiture</h3>
            <p className="text-sm text-gray-600">Parking gratuit devant le magasin</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🚌</div>
            <h3 className="font-semibold mb-1">En bus</h3>
            <p className="text-sm text-gray-600">Arrêt "République" (lignes 2, 8, 14)</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🚶</div>
            <h3 className="font-semibold mb-1">À pied</h3>
            <p className="text-sm text-gray-600">Centre-ville à 5 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
