import Link from 'next/link'

interface ProductCardProps {
  id: number,
  name: string,
  price: number,
  categoryName: string,
  imageUrl: string
}

export default function ProductCard({ id, name, price, categoryName, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-card-bg border border-border-color rounded-lg shadow-xl p-6 max-w-xs hover:shadow-2xl transition-all duration-300 hover-glow">
      <div className="relative overflow-hidden rounded-lg">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
        <div className="absolute top-3 right-3">
          <span className="bg-accent-gold text-primary-black px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            {categoryName.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{name}</h3>
        <p className="text-accent-silver text-sm mb-3 font-medium">{categoryName}</p>
        <p className="text-accent-gold text-2xl font-bold mb-4">{price.toFixed(2)} €</p>
        <Link 
          href={`/catalogue/${id}`}
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent-gold text-primary-black font-bold rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow tracking-wide"
        >
          VOIR DÉTAILS
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
