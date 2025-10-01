import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Moustache Bikes Antibes',
  description: 'Mentions légales de Moustache Bikes - Informations légales, éditeur, hébergement, protection des données.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales concernant Moustache Bikes Antibes
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Éditeur */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Éditeur du site</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MOUSTACHE BIKES</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Raison sociale :</strong> Moustache Bikes SARL</p>
                <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée</p>
                <p><strong>Capital social :</strong> 50 000 €</p>
                <p><strong>RCS :</strong> Antibes B 123 456 789</p>
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>Code APE :</strong> 4511Z (Commerce de voitures et de véhicules automobiles légers)</p>
                <p><strong>Adresse du siège social :</strong> 123 Avenue de la République, 06600 Antibes, France</p>
                <p><strong>Téléphone :</strong> 04 93 95 67 89</p>
                <p><strong>Email :</strong> contact@moustachebike-antibes.fr</p>
                <p><strong>Directeur de la publication :</strong> Jean-Marc Dubois</p>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hébergement</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Le site web moustachebike-antibes.fr est hébergé par :
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong>Site web :</strong> https://vercel.com</p>
                <p><strong>Email :</strong> privacy@vercel.com</p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Propriété intellectuelle</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                La marque "MOUSTACHE BIKES" et le logo associé sont des marques déposées. Toute reproduction 
                non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions 
                pénales.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection des données personnelles</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, 
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Les données collectées sur ce site sont destinées à MOUSTACHE BIKES et ne seront en aucun cas 
                transmises à des tiers sans votre accord préalable.
              </p>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@moustachebike-antibes.fr" className="text-blue-600 hover:text-blue-800">
                  contact@moustachebike-antibes.fr
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur.
              </p>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                certaines fonctionnalités du site.
              </p>
              <p>
                Types de cookies utilisés :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site</li>
                <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
              </ul>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsabilité</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email, à l'adresse contact@moustachebike-antibes.fr, en décrivant le 
                problème de la manière la plus précise possible.
              </p>
              <p>
                Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage 
                subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au 
                téléchargement.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Droit applicable</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Le présent site et les modalités et conditions de son utilisation sont régis par le droit 
                français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après 
                l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront 
                seuls compétents pour connaître de ce litige.
              </p>
              <p>
                Pour toute question relative aux présentes conditions d'utilisation du site, vous pouvez 
                nous joindre à l'adresse : contact@moustachebike-antibes.fr
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2 text-blue-800">
                <p><strong>Par email :</strong> 
                  <a href="mailto:contact@moustachebike-antibes.fr" className="text-blue-600 hover:text-blue-800">
                    contact@moustachebike-antibes.fr
                  </a>
                </p>
                <p><strong>Par téléphone :</strong> 
                  <a href="tel:+33493956789" className="text-blue-600 hover:text-blue-800">
                    04 93 95 67 89
                  </a>
                </p>
                <p><strong>Par courrier :</strong> MOUSTACHE BIKES, 123 Avenue de la République, 06600 Antibes, France</p>
              </div>
            </div>
          </section>

          {/* Dernière mise à jour */}
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-gray-600">
              <strong>Dernière mise à jour :</strong> 1er janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
