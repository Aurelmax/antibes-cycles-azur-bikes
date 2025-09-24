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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.category.name}</p>
        {product.description && (
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        )}
        <div className="space-y-3">
          <PaymentBanner variant="compact" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-600">{product.price}€</span>
            <div className="flex items-center space-x-2">
              <span className={`text-sm px-2 py-1 rounded ${product.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.available ? 'Disponible' : 'Indisponible'}
              </span>
              <Link
                href={`/produit/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 inline-block text-center"
              >
                Détails
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { Product };