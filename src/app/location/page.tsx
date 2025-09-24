import LocationForm from '@/components/LocationForm';

export default function LocationPage() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Location de vélos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Essayez nos vélos électriques Moustache avant l'achat ou pour vos sorties
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nos tarifs</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Demi-journée (4h)</span>
                <span className="text-blue-600 font-bold">25€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Journée complète</span>
                <span className="text-blue-600 font-bold">40€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="font-medium">Week-end (2 jours)</span>
                <span className="text-blue-600 font-bold">70€</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Semaine (7 jours)</span>
                <span className="text-blue-600 font-bold">200€</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Ce qui est inclus</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Casque de sécurité
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Antivol haute sécurité
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Kit de réparation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Assistance téléphonique
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Réservez votre vélo</h2>
          <LocationForm />
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Conditions de location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">📋 Documents requis</h3>
            <ul className="space-y-1">
              <li>• Pièce d'identité valide</li>
              <li>• Justificatif de domicile</li>
              <li>• Caution de 500€ (chèque ou CB)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">⏰ Horaires</h3>
            <ul className="space-y-1">
              <li>• Retrait: 9h-18h en semaine</li>
              <li>• Retour: jusqu'à 19h</li>
              <li>• Week-end: sur rendez-vous</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
