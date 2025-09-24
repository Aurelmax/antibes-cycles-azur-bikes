import Link from 'next/link';
import PaymentBanner from './PaymentBanner';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  available: boolean;
  createdAt: string;
  category: {
    name: string;
  };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift relative border border-gray-100 animate-fadeInUp">
      {/* Image avec overlay gradient */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badge disponibilité flottant */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border ${
            product.available
              ? 'bg-green-500/20 text-green-700 border-green-500/30'
              : 'bg-red-500/20 text-red-700 border-red-500/30'
          }`}>
            {product.available ? '✨ Disponible' : '⏳ Indisponible'}
          </span>
        </div>

        {/* Prix flottant */}
        <div className="absolute bottom-4 left-4 glass-dark px-4 py-2 rounded-xl">
          <span className="text-xl font-bold text-white">{product.price}€</span>
        </div>
      </div>

      {/* Contenu avec glassmorphisme */}
      <div className="p-6 space-y-4">
        {/* Titre et catégorie */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
              {product.category.name}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        {/* Description avec fade effect */}
        {product.description && (
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Payment banner avec shimmer */}
        <div className="relative overflow-hidden rounded-lg">
          <PaymentBanner variant="compact" />
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>

        {/* Bouton action avec effet glow */}
        <div className="pt-2">
          <Link
            href={`/produit/${product.id}`}
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center font-medium shadow-lg hover:shadow-xl animate-glow group-hover:animate-none"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Découvrir</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/30 rounded-full animate-float" />
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-4 right-1/3 w-3 h-3 bg-pink-400/30 rounded-full animate-float" style={{animationDelay: '2s'}} />
      </div>
    </div>
  );
}

export type { Product };