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
        const res = await fetch(`/api/products/{params.id}`);

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
      <div className="py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent-gold mx-auto mb-6"></div>
          <p className="text-accent-silver text-lg">Chargement du produit...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-12">
        <div className="text-center">
          <p className="text-red-400 mb-6 text-lg">{error}</p>
          <Link
            href="/catalogue"
            className="bg-accent-gold text-primary-black px-6 py-3 rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 font-bold tracking-wide"
          >
            RETOUR AU CATALOGUE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Navigation */}
      <nav className="mb-12">
        <Link href="/catalogue" className="text-accent-gold hover:text-white transition-colors font-bold tracking-wide">
          ← RETOUR AU CATALOGUE
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-2xl border border-border-color"
          />
        </div>

        {/* Informations produit */}
        <div>
          <div className="mb-8">
            <span className="inline-block bg-accent-gold text-primary-black text-sm px-4 py-2 rounded-full mb-4 font-bold tracking-wide">
              {product.category.name.toUpperCase()}
            </span>
            <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">{product.name}</h1>
            {product.description && (
              <p className="text-accent-silver text-lg mb-6 leading-relaxed">{product.description}</p>
            )}
            <div className="flex items-center justify-between mb-8">
              <span className="text-4xl font-bold text-accent-gold">{product.price}€</span>
              <span className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide {
                product.available
                  ? 'bg-accent-gold text-primary-black'
                  : 'bg-red-500 text-white'
              }`}>
                {product.available ? 'DISPONIBLE' : 'INDISPONIBLE'}
              </span>
            </div>

            <button
              className="w-full bg-accent-gold text-primary-black py-4 px-8 rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 font-bold tracking-wide disabled:bg-gray-500 disabled:text-gray-300 hover-glow"
              disabled={!product.available}
            >
              {product.available ? 'AJOUTER AU PANIER' : 'PRODUIT INDISPONIBLE'}
            </button>
          </div>
        </div>
      </div>

      {/* Spécifications techniques */}
      {product.specifications.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">SPÉCIFICATIONS TECHNIQUES</h2>
          <div className="bg-card-bg border border-border-color rounded-lg shadow-xl overflow-hidden">
            <div className="divide-y divide-border-color">
              {product.specifications.map((spec) => (
                <div key={spec.id} className="px-8 py-6 flex justify-between items-center hover:bg-secondary-black transition-colors">
                  <dt className="font-bold text-white tracking-wide">{spec.key}</dt>
                  <dd className="text-accent-silver text-right font-medium">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-16 text-center">
        <p className="text-accent-silver mb-8 text-lg">Intéressé par ce vélo ?</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="bg-accent-gold text-primary-black px-8 py-4 rounded-lg hover:bg-white hover:text-primary-black transition-all duration-300 font-bold tracking-wide hover-glow"
          >
            NOUS CONTACTER
          </Link>
          <Link
            href="/location"
            className="bg-transparent text-accent-gold border-2 border-accent-gold px-8 py-4 rounded-lg hover:bg-accent-gold hover:text-primary-black transition-all duration-300 font-bold tracking-wide"
          >
            ESSAYER EN LOCATION
          </Link>
        </div>
      </div>
    </div>
  );
}