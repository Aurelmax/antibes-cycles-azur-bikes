import BlogCard from '@/components/BlogCard'
import Hero from '@/components/Hero'

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Les avantages du vélo électrique en ville",
    excerpt: "Découvrez pourquoi le vélo électrique est devenu le moyen de transport urbain par excellence.",
    content: "Le vélo électrique révolutionne la mobilité urbaine en offrant une alternative écologique et pratique à la voiture. Avec l'assistance électrique, les trajets quotidiens deviennent plus accessibles, même pour les personnes moins sportives.",
    author: "Équipe Moustache",
    date: "2025-01-15",
    imageUrl: "/api/placeholder/400/250",
    category: "Mobilité urbaine"
  },
  {
    id: 2,
    title: "Entretien de votre vélo électrique : guide complet",
    excerpt: "Tous nos conseils pour maintenir votre vélo électrique en parfait état.",
    content: "Un entretien régulier de votre vélo électrique garantit sa longévité et ses performances. Découvrez les gestes essentiels à effectuer régulièrement.",
    author: "Technicien Moustache",
    date: "2025-01-10",
    imageUrl: "/api/placeholder/400/250",
    category: "Entretien"
  },
  {
    id: 3,
    title: "Les meilleures routes à vélo autour d'Antibes",
    excerpt: "Explorez les plus beaux itinéraires cyclables de la Côte d'Azur.",
    content: "Antibes et ses environs offrent de magnifiques parcours pour les cyclistes. Du Cap d'Antibes aux villages perchés, découvrez nos recommandations.",
    author: "Guide Local",
    date: "2025-01-05",
    imageUrl: "/api/placeholder/400/250",
    category: "Conseils"
  }
]

export default function BlogPage() {
  return (
    <div>
      <Hero 
        title="BLOG MOUSTACHE"
        subtitle="Découvrez nos conseils, actualités et guides pour profiter pleinement de votre vélo électrique haut de gamme"
        buttonText="DÉCOUVRIR"
        buttonLink="#articles"
      />
      
      <div className="max-w-6xl mx-auto py-12" id="articles">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-20 text-center bg-card-bg border border-border-color rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">RESTEZ INFORMÉ</h2>
          <p className="text-accent-silver mb-8 text-lg">
            Abonnez-vous à notre newsletter pour recevoir nos derniers articles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 bg-secondary-black border border-border-color text-white rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold placeholder-text-gray"
            />
            <button className="px-8 py-4 bg-accent-gold text-primary-black font-bold rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow tracking-wide">
              S'ABONNER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}