import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Réglage Postural Vélo de Course | Service Professionnel | Antibe Cycles AZUR Antibes',
  description: 'Service de réglage postural professionnel pour vélo de course à Antibes. Analyse vidéo, ajustements précis par nos experts certifiés. Prenez rendez-vous.',
  keywords: 'réglage postural vélo course, service vélo Antibes, réglage professionnel, analyse posturale, Antibe Cycles AZUR',
  openGraph: {
    title: 'Réglage Postural Vélo de Course | Service Professionnel',
    description: 'Service de réglage postural professionnel pour vélo de course à Antibes. Analyse vidéo, ajustements précis par nos experts certifiés.',
    type: 'website',
  },
};

export default function ReglagePosturalServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Réglage Postural Vélo de Course
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimisez vos performances et votre confort avec notre service de réglage postural 
              professionnel. Analyse vidéo et ajustements précis par nos experts certifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#reservation"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Prendre rendez-vous
              </Link>
              <Link 
                href="#details"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pourquoi un réglage postural professionnel ?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Un réglage postural optimal peut améliorer vos performances de 5 à 15% et prévenir 
              les blessures. Nos experts utilisent des techniques professionnelles pour vous 
              offrir la position parfaite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse vidéo</h3>
              <p className="text-gray-700">
                Analyse précise de votre position grâce à la vidéo haute définition
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ajustements précis</h3>
              <p className="text-gray-700">
                Réglages millimétriques pour une position optimale
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise médicale</h3>
              <p className="text-gray-700">
                Conseils d'experts pour prévenir les blessures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que comprend le service */}
      <section id="details" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Ce que comprend notre service
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Analyse complète</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Analyse vidéo de votre position</strong>
                    <p className="text-gray-600 text-sm">Enregistrement sous plusieurs angles pour une analyse précise</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Mesures anthropométriques</strong>
                    <p className="text-gray-600 text-sm">Analyse de votre morphologie et de vos proportions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Test de souplesse</strong>
                    <p className="text-gray-600 text-sm">Évaluation de votre flexibilité pour adapter la position</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Analyse du pédalage</strong>
                    <p className="text-gray-600 text-sm">Étude de votre technique de pédalage</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Réglages effectués</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">⚙️</span>
                  <div>
                    <strong>Hauteur et recul de selle</strong>
                    <p className="text-gray-600 text-sm">Position optimale pour l'efficacité et le confort</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">⚙️</span>
                  <div>
                    <strong>Position du guidon</strong>
                    <p className="text-gray-600 text-sm">Hauteur, largeur et angle pour une position naturelle</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">⚙️</span>
                  <div>
                    <strong>Réglage des cales</strong>
                    <p className="text-gray-600 text-sm">Position précise pour éviter les blessures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">⚙️</span>
                  <div>
                    <strong>Ajustements fins</strong>
                    <p className="text-gray-600 text-sm">Optimisation de tous les paramètres</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Les bénéfices de notre service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance</h3>
              <p className="text-gray-700">
                Amélioration de 5 à 15% de vos performances grâce à une position optimale
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prévention</h3>
              <p className="text-gray-700">
                Réduction significative des risques de blessures et de douleurs
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">😌</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confort</h3>
              <p className="text-gray-700">
                Position naturelle pour des sorties plus longues et agréables
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">💨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aérodynamisme</h3>
              <p className="text-gray-700">
                Position optimisée pour une meilleure pénétration dans l'air
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficacité</h3>
              <p className="text-gray-700">
                Transmission optimale de la puissance aux pédales
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progression</h3>
              <p className="text-gray-700">
                Base solide pour votre progression et vos objectifs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Déroulement de la séance
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Accueil et analyse</h3>
                <p className="text-gray-700">
                  Discussion sur vos objectifs, votre pratique et vos éventuels problèmes. 
                  Prise de mesures anthropométriques.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse vidéo</h3>
                <p className="text-gray-700">
                  Enregistrement de votre position sous plusieurs angles pour une analyse 
                  précise de votre posture et de votre technique.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Réglages</h3>
                <p className="text-gray-700">
                  Ajustement de tous les paramètres : selle, guidon, cales. 
                  Test et validation de chaque modification.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Validation</h3>
                <p className="text-gray-700">
                  Test final de la position et conseils personnalisés pour optimiser 
                  votre pratique au quotidien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Informations pratiques
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Détails du service</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Durée</span>
                  <span className="text-gray-900">1h30</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Prix</span>
                  <span className="text-gray-900 font-semibold">120€</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Matériel fourni</span>
                  <span className="text-gray-900">Tout inclus</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium text-gray-700">Rapport</span>
                  <span className="text-gray-900">Inclus</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">À apporter</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Votre vélo de course</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Vos chaussures de vélo</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Tenue de cyclisme</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Casque (optionnel)</span>
                </li>
              </ul>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Bon à savoir</h4>
                <p className="text-blue-800 text-sm">
                  Nous fournissons tous les outils de réglage nécessaires. 
                  Un rapport détaillé vous sera remis à la fin de la séance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reservation" className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à optimiser votre position ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Réservez votre séance de réglage postural avec nos experts Antibe Cycles AZUR
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Prendre rendez-vous
            </Link>
            <Link 
              href="tel:+33493956789"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Appeler maintenant
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">📞</div>
              <p className="font-semibold">04 93 95 67 89</p>
              <p className="text-blue-200 text-sm">Lun-Sam 9h-19h</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📍</div>
              <p className="font-semibold">Antibes</p>
              <p className="text-blue-200 text-sm">123 Avenue de la République</p>
            </div>
            <div>
              <div className="text-2xl mb-2">⏰</div>
              <p className="font-semibold">1h30</p>
              <p className="text-blue-200 text-sm">Séance complète</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Combien de temps dure une séance ?
              </h3>
              <p className="text-gray-700">
                Une séance complète dure 1h30. Ce temps nous permet de faire une analyse 
                approfondie et des réglages précis.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Dois-je apporter mon vélo ?
              </h3>
              <p className="text-gray-700">
                Oui, il est important d'apporter votre propre vélo pour que les réglages 
                soient adaptés à votre matériel.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Les réglages sont-ils définitifs ?
              </h3>
              <p className="text-gray-700">
                Les réglages peuvent nécessiter de légers ajustements après quelques sorties. 
                Nous proposons une révision gratuite dans les 30 jours.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Que se passe-t-il si je ne suis pas satisfait ?
              </h3>
              <p className="text-gray-700">
                Nous garantissons votre satisfaction. Si vous n'êtes pas entièrement satisfait, 
                nous vous proposons une nouvelle séance gratuite.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
