export default function AproposPage() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">À propos de nous</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Votre partenaire de confiance pour l'électromobilité à Antibes depuis 2020
        </p>
      </div>

      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Notre histoire</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              Née de la passion pour l'électromobilité et l'amour du cyclisme, Moustache Bikes Antibes
              a ouvert ses portes en 2020 avec l'ambition de démocratiser le vélo électrique sur la Côte d'Azur.
            </p>
            <p className="mb-6">
              Spécialistes de la marque française Moustache Bikes, reconnue pour son innovation et la
              qualité de ses vélos électriques, nous accompagnons particuliers et professionnels dans
              leur transition vers une mobilité plus durable et plus agréable.
            </p>
            <p>
              Notre showroom situé au cœur d'Antibes vous accueille pour découvrir, essayer et
              personnaliser votre future monture électrique.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos valeurs</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4 mt-1">🌱</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Écologie</h3>
                <p className="text-gray-600">
                  Nous croyons en une mobilité respectueuse de l'environnement.
                  Chaque vélo vendu contribue à réduire l'empreinte carbone.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-4 mt-1">🔧</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Notre équipe de techniciens certifiés assure un service de qualité,
                  de la vente à l'après-vente.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-4 mt-1">🤝</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Proximité</h3>
                <p className="text-gray-600">
                  Nous privilégions la relation humaine et l'accompagnement personnalisé
                  de chaque client.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-4 mt-1">⚡</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Nous sélectionnons les technologies les plus avancées pour vous
                  offrir la meilleure expérience de conduite.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Pourquoi Moustache Bikes ?</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">🇫🇷 Fabrication française</h3>
                <p className="text-gray-600">
                  Moustache Bikes conçoit et assemble ses vélos en France, dans les Vosges.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🏆 Design primé</h3>
                <p className="text-gray-600">
                  Reconnus pour leur esthétique unique et leur ergonomie exceptionnelle.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🔋 Technologie Bosch</h3>
                <p className="text-gray-600">
                  Équipés des derniers moteurs et batteries Bosch pour une performance optimale.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🛡️ Garantie étendue</h3>
                <p className="text-gray-600">
                  Tous nos vélos bénéficient d'une garantie complète et d'un service après-vente dédié.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👨‍🔧
            </div>
            <h3 className="font-semibold text-lg">Marc</h3>
            <p className="text-gray-600">Fondateur & Technicien expert</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👩‍💼
            </div>
            <h3 className="font-semibold text-lg">Sophie</h3>
            <p className="text-gray-600">Conseillère commerciale</p>
          </div>

          <div className="text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
              👨‍🔧
            </div>
            <h3 className="font-semibold text-lg">Thomas</h3>
            <p className="text-gray-600">Mécanicien cycles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
