import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Moustache Bikes
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            L'électromobilité à votre portée avec nos vélos électriques premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogue"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Découvrir nos vélos
            </Link>
            <Link
              href="/location"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Louer un vélo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚴‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">Vente</h3>
              <p className="text-gray-600 mb-4">Large gamme de vélos électriques Moustache pour tous les besoins</p>
              <Link href="/catalogue" className="text-blue-600 hover:underline">
                Voir le catalogue →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Essayez nos vélos avant achat ou pour vos sorties</p>
              <Link href="/location" className="text-blue-600 hover:underline">
                Réserver →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Atelier</h3>
              <p className="text-gray-600 mb-4">Entretien et réparation par nos experts</p>
              <Link href="/atelier" className="text-blue-600 hover:underline">
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi choisir Moustache Bikes ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-semibold">Qualité premium</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🛠️</div>
              <h3 className="font-semibold">Service expert</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-semibold">Conseil personnalisé</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold">Local à Antibes</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
