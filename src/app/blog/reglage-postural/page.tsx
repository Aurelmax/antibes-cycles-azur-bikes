import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Réglage Postural Vélo de Course : Guide Complet 2025 | Moustache Bikes',
  description: 'Découvrez comment optimiser votre position sur vélo de course. Guide complet du réglage postural : selle, guidon, pédales. Conseils d\'experts à Antibes.',
  keywords: 'réglage postural vélo, position vélo course, réglage selle, position guidon, vélo course Antibes',
  openGraph: {
    title: 'Réglage Postural Vélo de Course : Guide Complet 2025',
    description: 'Découvrez comment optimiser votre position sur vélo de course. Guide complet du réglage postural : selle, guidon, pédales.',
    type: 'article',
    publishedTime: '2025-01-01T00:00:00.000Z',
    authors: ['Moustache Bikes'],
  },
};

export default function ReglagePosturalBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Réglage Postural Vélo de Course : Guide Complet 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Optimisez votre position et vos performances grâce à un réglage postural professionnel
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>📅 Publié le 1er janvier 2025</span>
              <span>👤 Par l'équipe Moustache Bikes</span>
              <span>⏱️ 8 min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Le réglage postural est l'un des éléments les plus critiques pour optimiser vos performances 
            et votre confort sur un vélo de course. Une position mal ajustée peut non seulement réduire 
            votre efficacité, mais aussi causer des douleurs et des blessures à long terme.
          </p>
        </div>

        {/* Table des matières */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Table des matières</h2>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#pourquoi-reglage" className="text-blue-600 hover:text-blue-800">Pourquoi le réglage postural est-il essentiel ?</a></li>
            <li><a href="#reglage-selle" className="text-blue-600 hover:text-blue-800">Le réglage de la selle</a></li>
            <li><a href="#reglage-guidon" className="text-blue-600 hover:text-blue-800">Le positionnement du guidon</a></li>
            <li><a href="#reglage-pedales" className="text-blue-600 hover:text-blue-800">L'ajustement des pédales</a></li>
            <li><a href="#verification" className="text-blue-600 hover:text-blue-800">Vérification et ajustements finaux</a></li>
            <li><a href="#conseils-experts" className="text-blue-600 hover:text-blue-800">Conseils d'experts</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="pourquoi-reglage" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pourquoi le réglage postural est-il essentiel ?
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Un réglage postural optimal apporte de nombreux bénéfices, tant sur le plan des performances 
            que du confort. Voici les principaux avantages :
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Amélioration des performances :</strong> Une position optimale permet de transmettre plus efficacement la puissance aux pédales</li>
            <li><strong>Réduction de la fatigue :</strong> Une posture correcte diminue les tensions musculaires inutiles</li>
            <li><strong>Prévention des blessures :</strong> Évite les douleurs au dos, aux genoux et aux cervicales</li>
            <li><strong>Confort prolongé :</strong> Permet de rouler plus longtemps sans inconfort</li>
            <li><strong>Efficacité aérodynamique :</strong> Optimise la pénétration dans l'air</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-blue-800 font-medium">
              💡 <strong>Conseil d'expert :</strong> Un réglage postural professionnel peut améliorer 
              vos performances de 5 à 15% selon votre niveau initial.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="reglage-selle" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Le réglage de la selle : Fondamentaux
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hauteur de selle</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La hauteur de selle est le paramètre le plus critique. Une selle trop basse limite la puissance, 
            tandis qu'une selle trop haute peut causer des douleurs aux genoux.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Méthode de réglage :</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Asseyez-vous sur la selle avec les pieds sur les pédales</li>
              <li>Placez les pédales à l'horizontale (3h et 9h)</li>
              <li>Le genou avant doit être aligné avec l'axe de la pédale</li>
              <li>La jambe doit être légèrement fléchie (150-160°)</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recul de selle</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le recul influence la répartition du poids et l'efficacité du pédalage.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Positionnez les pédales à l'horizontale</li>
            <li>Le genou avant doit être aligné avec l'axe de la pédale</li>
            <li>Un recul trop important peut causer des douleurs aux genoux</li>
            <li>Un recul insuffisant peut créer des tensions dans le bas du dos</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="reglage-guidon" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Le positionnement du guidon
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hauteur du guidon</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La hauteur du guidon détermine votre position aérodynamique et votre confort.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Position sportive</h4>
              <p className="text-green-700 text-sm">Guidon 2-4cm sous la selle pour l'aérodynamisme</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Position confort</h4>
              <p className="text-blue-700 text-sm">Guidon au niveau de la selle pour le confort</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Largeur du guidon</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La largeur doit correspondre à l'écartement de vos épaules pour une position naturelle.
          </p>
        </section>

        {/* Section 4 */}
        <section id="reglage-pedales" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            L'ajustement des pédales et cales
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Position des cales</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le positionnement des cales est crucial pour l'efficacité du pédalage et la prévention des blessures.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Position longitudinale :</strong> L'axe de la pédale doit passer par la base du premier métatarse</li>
            <li><strong>Position latérale :</strong> Ajustez selon votre morphologie (pieds écartés ou rapprochés)</li>
            <li><strong>Angle de rotation :</strong> Généralement neutre, mais peut nécessiter un ajustement</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-yellow-800 font-medium">
              ⚠️ <strong>Attention :</strong> Un mauvais réglage des cales peut causer des tendinites 
              et des douleurs aux genoux. Consultez un professionnel si vous ressentez des douleurs.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="verification" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vérification et ajustements finaux
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Test de position</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Après chaque ajustement, testez votre position sur une sortie d'au moins 30 minutes.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Checklist de vérification :</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Absence de douleurs aux genoux</li>
              <li>Pas de tensions dans le bas du dos</li>
              <li>Confort au niveau des épaules et du cou</li>
              <li>Facilité à maintenir la position aérodynamique</li>
              <li>Efficacité du pédalage</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="conseils-experts" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Conseils d'experts Moustache Bikes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Réglage progressif</h3>
              <p className="text-gray-700">
                Ne modifiez qu'un paramètre à la fois et testez sur plusieurs sorties. 
                Le corps a besoin de temps pour s'adapter.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Saisonnalité</h3>
              <p className="text-gray-700">
                Votre position peut évoluer selon la saison et votre condition physique. 
                Réévaluez régulièrement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Besoin d'un réglage professionnel ?</h3>
            <p className="text-blue-100 mb-6">
              Nos experts Moustache Bikes à Antibes vous proposent un réglage postural complet 
              avec analyse vidéo et ajustements précis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services/reglage-postural"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Découvrir notre service
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Un réglage postural optimal est la base de performances et de confort durables. 
            Prenez le temps de bien ajuster votre position, et n'hésitez pas à faire appel 
            à des professionnels pour un réglage précis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Chez Moustache Bikes, nous mettons notre expertise à votre service pour vous 
            accompagner vers l'excellence cycliste.
          </p>
        </section>
      </article>

      {/* Navigation */}
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Retour au blog
          </Link>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Partager
            </button>
            <Link 
              href="/services/reglage-postural"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
