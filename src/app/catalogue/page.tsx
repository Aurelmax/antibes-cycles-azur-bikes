'use client';

import { useEffect, useState } from 'react';
import ProductCard, { Product } from '@/components/ProductCard';
import PaymentBanner from '@/components/PaymentBanner';

interface Category {
  id: number;
  name: string;
  description?: string;
}

interface Filter {
  label: string;
  value: string;
}

const filters: Filter[] = [
  { label: "Tous", value: "all" },
  { label: "VTT électrique", value: "VTT électrique" },
  { label: "Urbain électrique", value: "Urbain électrique" },
  { label: "Trekking électrique", value: "Trekking électrique" },
];

export default function CataloguePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Charger les produits et catégories en parallèle
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories')
        ]);

        if (!productsRes.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await productsRes.json();
        setProducts(productsData);

        if (categoriesRes.ok) {
          const categoriesData = await categoriesRes.json();
          setCategories(categoriesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filtrage côté client
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category.name === selectedCategory);

  if (loading) {
    return (
      <div className="py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des produits...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Notre catalogue</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Découvrez notre sélection de vélos électriques Moustache, conçus pour tous vos besoins
        </p>
        <PaymentBanner className="max-w-4xl mx-auto" />
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedCategory(filter.value)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Vous ne trouvez pas le vélo qui vous convient ?
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contactez-nous pour un conseil personnalisé
        </button>
      </div>
    </div>
  );
}
