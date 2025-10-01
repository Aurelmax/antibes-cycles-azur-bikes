import Hero from '@/components/Hero';

export default function AproposPage() {
  return (
    <div>
      <Hero 
        title="À PROPOS DE NOUS"
        subtitle="Votre partenaire de confiance pour l'électromobilité haut de gamme à Antibes depuis 2020"
        buttonText="NOTRE HISTOIRE"
        buttonLink="#histoire"
        backgroundImage="/images/bikes/samedi-28/montagne-antibes.jpg"
      />
      
      <div className="py-12" id="histoire">
        <div className="mb-20">
          <div className="bg-card-bg border border-border-color rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">NOTRE HISTOIRE</h2>
            <div className="max-w-4xl mx-auto text-accent-silver leading-relaxed text-lg">
              <p className="mb-6">
                Née de la passion pour l'électromobilité et l'amour du cyclisme, Antibe Cycles AZUR Antibes
                a vu le jour en 2020 avec une vision claire : démocratiser l'usage du vélo électrique
                haut de gamme sur la Côte d'Azur.
              </p>
              <p className="mb-6">
                Forts de notre expertise technique et de notre connaissance du terrain azuréen,
                nous avons développé une approche unique alliant performance, design et durabilité.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers d'être la référence locale pour l'électromobilité
                et d'accompagner nos clients dans leur transition vers une mobilité plus durable.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">NOS VALEURS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-bg border border-border-color rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">ÉCOLOGIE</h3>
              <p className="text-accent-silver leading-relaxed">
                Nous croyons en une mobilité respectueuse de l'environnement et nous nous engageons
                pour un avenir plus durable.
              </p>
            </div>

            <div className="bg-card-bg border border-border-color rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">INNOVATION</h3>
              <p className="text-accent-silver leading-relaxed">
                Nous adoptons les dernières technologies pour offrir des solutions de mobilité
                toujours plus performantes et intelligentes.
              </p>
            </div>

            <div className="bg-card-bg border border-border-color rounded-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover-glow">
              <div className="text-5xl mb-6 text-accent-gold">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">SERVICE</h3>
              <p className="text-accent-silver leading-relaxed">
                Notre engagement se traduit par un accompagnement personnalisé et un service
                client d'excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">POURQUOI ANTIBE CYCLES AZUR BIKES ?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card-bg border border-border-color rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">EXPERTISE TECHNIQUE</h3>
              <ul className="space-y-4 text-accent-silver">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Techniciens certifiés par les plus grandes marques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Diagnostic électronique de pointe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Pièces détachées d'origine garanties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Formation continue sur les nouvelles technologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-card-bg border border-border-color rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">CONNAISSANCE LOCALE</h3>
              <ul className="space-y-4 text-accent-silver">
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Itinéraires cyclables optimisés pour la région</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Adaptation aux conditions climatiques méditerranéennes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Réseau de partenaires locaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-gold mr-3">✓</span>
                  <span>Service de dépannage rapide sur la Côte d'Azur</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-card-bg border border-accent-gold rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">NOTRE ÉQUIPE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-black">JM</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jean-Marc</h3>
              <p className="text-accent-gold font-semibold mb-2">Fondateur & Gérant</p>
              <p className="text-accent-silver text-sm">
                Passionné de cyclisme depuis 20 ans, expert en électromobilité
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-black">SL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sophie</h3>
              <p className="text-accent-gold font-semibold mb-2">Responsable Technique</p>
              <p className="text-accent-silver text-sm">
                Certifiée Bosch, spécialiste des moteurs électriques
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-accent-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-black">AL</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Alexandre</h3>
              <p className="text-accent-gold font-semibold mb-2">Conseiller Client</p>
              <p className="text-accent-silver text-sm">
                Guide expert des itinéraires cyclables de la région
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}