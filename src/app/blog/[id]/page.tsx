import Link from 'next/link'
import { notFound } from 'next/navigation'

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Les avantages du vélo électrique en ville",
    excerpt: "Découvrez pourquoi le vélo électrique est devenu le moyen de transport urbain par excellence.",
    content: `
      <p>Le vélo électrique révolutionne la mobilité urbaine en offrant une alternative écologique et pratique à la voiture. Avec l'assistance électrique, les trajets quotidiens deviennent plus accessibles, même pour les personnes moins sportives.</p>
      
      <h2>Pourquoi choisir un vélo électrique ?</h2>
      <p>Les vélos électriques offrent de nombreux avantages :</p>
      <ul>
        <li><strong>Écologique :</strong> Zéro émission de CO2 lors de l'utilisation</li>
        <li><strong>Économique :</strong> Coût d'utilisation très faible comparé à la voiture</li>
        <li><strong>Santé :</strong> Maintien d'une activité physique douce</li>
        <li><strong>Pratique :</strong> Évite les embouteillages et les problèmes de stationnement</li>
      </ul>
      
      <h2>L'assistance électrique : un vrai plus</h2>
      <p>L'assistance électrique permet de parcourir de plus longues distances sans effort excessif. Idéal pour les trajets domicile-travail ou les balades du weekend.</p>
      
      <h2>Notre conseil</h2>
      <p>Chez Antibe Cycles AZUR, nous vous accompagnons dans le choix de votre vélo électrique selon vos besoins et votre budget. N'hésitez pas à nous rendre visite pour un essai !</p>
    `,
    author: "Équipe Moustache",
    date: "2025-01-15",
    imageUrl: "/api/placeholder/800/400",
    category: "Mobilité urbaine"
  },
  {
    id: 2,
    title: "Entretien de votre vélo électrique : guide complet",
    excerpt: "Tous nos conseils pour maintenir votre vélo électrique en parfait état.",
    content: `
      <p>Un entretien régulier de votre vélo électrique garantit sa longévité et ses performances. Découvrez les gestes essentiels à effectuer régulièrement.</p>
      
      <h2>Entretien quotidien</h2>
      <ul>
        <li>Nettoyage de la chaîne et du dérailleur</li>
        <li>Vérification de la pression des pneus</li>
        <li>Contrôle des freins</li>
        <li>Nettoyage général du vélo</li>
      </ul>
      
      <h2>Entretien mensuel</h2>
      <ul>
        <li>Lubrification de la chaîne</li>
        <li>Vérification des câbles</li>
        <li>Contrôle de la batterie</li>
        <li>Réglage des vitesses</li>
      </ul>
      
      <h2>Entretien professionnel</h2>
      <p>Nous recommandons un entretien professionnel tous les 6 mois pour garantir la sécurité et les performances optimales de votre vélo électrique.</p>
    `,
    author: "Technicien Moustache",
    date: "2025-01-10",
    imageUrl: "/api/placeholder/800/400",
    category: "Entretien"
  },
  {
    id: 3,
    title: "Les meilleures balades à vélo autour d'Antibes",
    excerpt: "Explorez les plus beaux itinéraires cyclables de la Côte d'Azur.",
    content: `
      <p>La région d'Antibes offre de magnifiques parcours cyclables, de la Promenade du Soleil aux collines de l'arrière-pays. Parfait pour découvrir la région en vélo électrique.</p>
      
      <h2>Parcours côtiers</h2>
      <p>La Promenade du Soleil offre un parcours de 7km le long de la mer, parfait pour une balade en famille.</p>
      
      <h2>Parcours de l'arrière-pays</h2>
      <p>Les collines d'Antibes offrent des dénivelés modérés, parfaitement adaptés aux vélos électriques.</p>
      
      <h2>Nos recommandations</h2>
      <ul>
        <li>Cap d'Antibes : 15km, niveau facile</li>
        <li>Vallée de la Brague : 25km, niveau moyen</li>
        <li>Tour du Cap : 30km, niveau moyen</li>
      </ul>
    `,
    author: "Guide local",
    date: "2025-01-05",
    imageUrl: "/api/placeholder/800/400",
    category: "Découverte"
  },
  {
    id: 4,
    title: "Comment choisir son premier vélo électrique ?",
    excerpt: "Nos conseils d'experts pour faire le bon choix selon vos besoins.",
    content: `
      <p>Choisir son premier vélo électrique peut sembler complexe. Batterie, autonomie, type de motorisation... Voici nos conseils pour vous aider.</p>
      
      <h2>Définir vos besoins</h2>
      <ul>
        <li>Distance quotidienne à parcourir</li>
        <li>Type de terrain (ville, campagne, montagne)</li>
        <li>Fréquence d'utilisation</li>
        <li>Budget disponible</li>
      </ul>
      
      <h2>Les critères techniques</h2>
      <h3>La batterie</h3>
      <p>L'autonomie dépend de la capacité de la batterie (exprimée en Wh). Pour un usage urbain, 400Wh suffisent généralement.</p>
      
      <h3>Le moteur</h3>
      <p>Le moteur peut être situé dans la roue avant, arrière ou au niveau du pédalier. Chaque position a ses avantages.</p>
      
      <h2>Notre service</h2>
      <p>Chez Antibe Cycles AZUR, nous vous proposons des essais gratuits pour vous aider à faire le bon choix. Venez nous rendre visite !</p>
    `,
    author: "Conseiller Moustache",
    date: "2024-12-28",
    imageUrl: "/api/placeholder/800/400",
    category: "Conseils"
  }
]

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors">
          ← Retour au blog
        </Link>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-gray-600 mb-6">
          <span className="font-medium">{post.author}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(post.date)}</span>
        </div>
        
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </header>

      {/* Article content */}
      <article className="prose prose-lg max-w-none">
        <div 
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Article footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Partager cet article</h3>
            <div className="flex space-x-4">
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                Facebook
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                Twitter
              </button>
              <button className="text-blue-600 hover:text-blue-800 transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les articles
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
