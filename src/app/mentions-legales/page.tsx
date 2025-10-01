import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Antibe Cycles AZUR Antibes',
  description: 'Mentions légales de Antibe Cycles AZUR - Informations légales, éditeur, hébergement, protection des données.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-black to-secondary-black text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
              <span className="text-accent-gold">MENTIONS</span> LÉGALES
            </h1>
            <p className="text-xl text-accent-silver">
              Informations légales concernant Antibe Cycles AZUR Antibes
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Éditeur */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Éditeur du site</h2>
            <div className="bg-card-bg border border-accent-gold rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-accent-gold mb-6 tracking-wide">ANTIBE CYCLES AZUR BIKES</h3>
              <div className="space-y-3 text-accent-silver">
                <p><strong className="text-white">Raison sociale :</strong> Antibe Cycles AZUR SARL</p>
                <p><strong className="text-white">Forme juridique :</strong> Société à Responsabilité Limitée</p>
                <p><strong className="text-white">Capital social :</strong> 50 000 €</p>
                <p><strong className="text-white">RCS :</strong> Antibes B 123 456 789</p>
                <p><strong className="text-white">SIRET :</strong> 123 456 789 00012</p>
                <p><strong className="text-white">Code APE :</strong> 4511Z (Commerce de voitures et de véhicules automobiles légers)</p>
                <p><strong className="text-white">Adresse du siège social :</strong> 123 Avenue de la République, 06600 Antibes, France</p>
                <p><strong className="text-white">Téléphone :</strong> 04 93 95 67 89</p>
                <p><strong className="text-white">Email :</strong> contact@antibe-cycles-azur.fr</p>
                <p><strong className="text-white">Directeur de la publication :</strong> Jean-Marc Dubois</p>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Hébergement</h2>
            <div className="bg-card-bg border border-accent-gold rounded-xl p-8 shadow-2xl">
              <p className="text-accent-silver mb-6 text-lg">
                Le site web antibe-cycles-azur.fr est hébergé par :
              </p>
              <div className="space-y-3 text-accent-silver">
                <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-white">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                <p><strong className="text-white">Site web :</strong> https://vercel.com</p>
                <p><strong className="text-white">Email :</strong> privacy@vercel.com</p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Propriété intellectuelle</h2>
            <div className="space-y-6 text-accent-silver leading-relaxed">
              <p className="text-lg">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-lg">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
              <p className="text-lg">
                La marque "ANTIBE CYCLES AZUR BIKES" et le logo associé sont des marques déposées. Toute reproduction 
                non autorisée de ces marques, dessins et modèles constitue une contrefaçon passible de sanctions 
                pénales.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Protection des données personnelles</h2>
            <div className="space-y-6 text-accent-silver leading-relaxed">
              <p className="text-lg">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, 
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-lg">
                Les données collectées sur ce site sont destinées à ANTIBE CYCLES AZUR BIKES et ne seront en aucun cas 
                transmises à des tiers sans votre accord préalable.
              </p>
              <p className="text-lg">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@antibe-cycles-azur.fr" className="text-accent-gold hover:text-white transition-colors font-semibold">
                  contact@antibe-cycles-azur.fr
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Cookies</h2>
            <div className="space-y-6 text-accent-silver leading-relaxed">
              <p className="text-lg">
                Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic. 
                Les cookies sont de petits fichiers texte stockés sur votre ordinateur.
              </p>
              <p className="text-lg">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                certaines fonctionnalités du site.
              </p>
              <p className="text-lg">
                Types de cookies utilisés :
              </p>
              <ul className="list-disc list-inside ml-6 space-y-3 text-lg">
                <li><strong className="text-white">Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong className="text-white">Cookies analytiques :</strong> Pour analyser l'utilisation du site</li>
                <li><strong className="text-white">Cookies de préférences :</strong> Pour mémoriser vos choix</li>
              </ul>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Responsabilité</h2>
            <div className="space-y-6 text-accent-silver leading-relaxed">
              <p className="text-lg">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="text-lg">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien 
                vouloir le signaler par email, à l'adresse contact@antibe-cycles-azur.fr, en décrivant le 
                problème de la manière la plus précise possible.
              </p>
              <p className="text-lg">
                Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule 
                responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage 
                subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au 
                téléchargement.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Droit applicable</h2>
            <div className="space-y-6 text-accent-silver leading-relaxed">
              <p className="text-lg">
                Le présent site et les modalités et conditions de son utilisation sont régis par le droit 
                français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après 
                l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront 
                seuls compétents pour connaître de ce litige.
              </p>
              <p className="text-lg">
                Pour toute question relative aux présentes conditions d'utilisation du site, vous pouvez 
                nous joindre à l'adresse : contact@antibe-cycles-azur.fr
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Contact</h2>
            <div className="bg-card-bg border-l-4 border-accent-gold p-8 rounded-r-xl shadow-2xl">
              <p className="text-accent-gold font-bold mb-6 text-lg">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-4 text-accent-silver">
                <p className="text-lg"><strong className="text-white">Par email :</strong> 
                  <a href="mailto:contact@antibe-cycles-azur.fr" className="text-accent-gold hover:text-white transition-colors font-semibold ml-2">
                    contact@antibe-cycles-azur.fr
                  </a>
                </p>
                <p className="text-lg"><strong className="text-white">Par téléphone :</strong> 
                  <a href="tel:+33493956789" className="text-accent-gold hover:text-white transition-colors font-semibold ml-2">
                    04 93 95 67 89
                  </a>
                </p>
                <p className="text-lg"><strong className="text-white">Par courrier :</strong> ANTIBE CYCLES AZUR BIKES, 123 Avenue de la République, 06600 Antibes, France</p>
              </div>
            </div>
          </section>

          {/* Dernière mise à jour */}
          <div className="bg-card-bg border border-accent-gold rounded-xl p-8 text-center shadow-2xl">
            <p className="text-accent-silver text-lg">
              <strong className="text-white">Dernière mise à jour :</strong> 1er janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
