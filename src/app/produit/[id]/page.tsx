'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Specification {
  id: number;
  key: string;
  value: string;
}

interface ProductDetail {
  id: number;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  available: boolean;
  category: {
    name: string;
    description?: string;
  };
  specifications: Specification[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${params.id}`);

        if (!res.ok) {
          throw new Error('Produit non trouvé');
        }

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Erreur lors du chargement du produit');
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement du produit...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            href="/catalogue"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Navigation */}
      <nav className="mb-8">
        <Link href="/catalogue" className="text-blue-600 hover:underline">
          ← Retour au catalogue
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Informations produit */}
        <div>
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
              {product.category.name}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            {product.description && (
              <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            )}
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-blue-600">{product.price}€</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.available
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.available ? 'Disponible' : 'Indisponible'}
              </span>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-400"
              disabled={!product.available}
            >
              {product.available ? 'Ajouter au panier' : 'Produit indisponible'}
            </button>
          </div>
        </div>
      </div>

      {/* Spécifications techniques */}
      {product.specifications.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Spécifications techniques</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {product.specifications.map((spec) => (
                <div key={spec.id} className="px-6 py-4 flex justify-between items-center">
                  <dt className="font-medium text-gray-900">{spec.key}</dt>
                  <dd className="text-gray-600 text-right">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">Intéressé par ce vélo ?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Nous contacter
          </Link>
          <Link
            href="/location"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Essayer en location
          </Link>
        </div>
      </div>
    </div>
  );
}