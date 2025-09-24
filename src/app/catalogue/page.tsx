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
    <div className="min-h-screen">
      {/* Hero Section avec background animé */}
      <div className="relative gradient-bg py-20 mb-16 overflow-hidden">
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-white/15 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 animate-slideInLeft">
            Notre
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-shimmer">
              Catalogue
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-slideInRight">
            ✨ Découvrez notre sélection exclusive de vélos électriques Moustache,
            <br />conçus pour transformer vos aventures quotidiennes en expériences magiques
          </p>

          {/* Payment Banner avec glassmorphisme */}
          <div className="animate-scaleIn">
            <PaymentBanner className="max-w-4xl mx-auto glass border-white/20" />
          </div>
        </div>

        {/* Waves decoratives */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Filtres avec design moderne */}
        <div className="mb-16 animate-fadeInUp">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className={`group relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === filter.value
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                    : 'glass border-gray-200 text-gray-700 hover:glass-dark hover:text-white'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{filter.label}</span>
                  {selectedCategory === filter.value && (
                    <span className="animate-spin">⚡</span>
                  )}
                </span>
                {selectedCategory !== filter.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de produits avec stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Section avec effet wow */}
        <div className="glass-dark rounded-3xl p-12 text-center mb-16 relative overflow-hidden animate-scaleIn">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 2px, transparent 0)',
              backgroundSize: '100px 100px'
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              🚀 Vous ne trouvez pas le vélo de vos rêves ?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Nos experts sont là pour vous guider vers la solution parfaite
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-glow">
              ✨ Conseil personnalisé gratuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
