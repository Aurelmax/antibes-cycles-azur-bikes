export default function AtelierPage() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Notre atelier</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Entretien, réparation et personnalisation de votre vélo électrique par nos experts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos services</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🔧</div>
                <div>
                  <h3 className="text-xl font-semibold">Entretien complet</h3>
                  <p className="text-gray-600">Révision complète de votre vélo électrique</p>
                </div>
                <div className="ml-auto text-blue-600 font-bold">80€</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vérification batterie et moteur</li>
                <li>• Réglage freins et vitesses</li>
                <li>• Contrôle pneus et éclairage</li>
                <li>• Nettoyage et graissage</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold">Diagnostic électronique</h3>
                  <p className="text-gray-600">Contrôle approfondi de l'électronique</p>
                </div>
                <div className="ml-auto text-blue-600 font-bold">45€</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Test batterie et autonomie</li>
                <li>• Vérification moteur et capteurs</li>
                <li>• Mise à jour logicielle</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🛠️</div>
                <div>
                  <h3 className="text-xl font-semibold">Réparations</h3>
                  <p className="text-gray-600">Toutes réparations mécaniques</p>
                </div>
                <div className="ml-auto text-blue-600 font-bold">Sur devis</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Changement pièces d'usure</li>
                <li>• Réparation crevaison</li>
                <li>• Réglages spécifiques</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Prendre rendez-vous</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de service
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Sélectionnez un service</option>
                  <option value="entretien">Entretien complet</option>
                  <option value="diagnostic">Diagnostic électronique</option>
                  <option value="reparation">Réparation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description du problème
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez le problème ou le service souhaité..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Demander un rendez-vous
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Informations pratiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-semibold mb-2">Horaires</h3>
            <p className="text-sm text-gray-600">
              Lun-Ven: 9h-18h<br />
              Sam: 9h-17h<br />
              Dim: Fermé
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-600">
              04 XX XX XX XX<br />
              atelier@moustachebikes.fr
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚗</div>
            <h3 className="font-semibold mb-2">Parking</h3>
            <p className="text-sm text-gray-600">
              Places de parking<br />
              disponibles devant<br />
              l'atelier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
