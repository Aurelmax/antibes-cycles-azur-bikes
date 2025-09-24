'use client';

import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  description: string
  price: number
  stock: number
  category: {
    name: string
  }
}

export default function CatalogueSimplePage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Catalogue Simple</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category?.name || 'Catégorie'}</p>
            <p className="text-gray-500 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-green-600 font-bold">{product.price}€</p>
              <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}