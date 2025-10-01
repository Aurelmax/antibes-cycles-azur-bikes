import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  imageUrl: string
  category: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className="bg-card-bg border border-border-color rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover-glow">
      <div className="relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold tracking-wide">
            {post.category.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-accent-silver mb-3">
          <span className="font-medium">{post.author}</span>
          <span className="mx-2">•</span>
          <span>{formatDate(post.date)}</span>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 tracking-wide">
          {post.title}
        </h2>
        
        <p className="text-text-gray mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-accent-gold hover:text-white font-bold transition-all duration-300 tracking-wide"
        >
          LIRE LA SUITE
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
