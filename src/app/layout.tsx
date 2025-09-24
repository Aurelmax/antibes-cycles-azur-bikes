// src/app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Moustache Bikes Antibes',
  description: 'Vente, location et atelier de vélos électriques Moustache à Antibes',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">
                <Link href="/" className="hover:text-blue-200 transition-colors">
                  Moustache Bikes
                </Link>
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-blue-200 transition-colors">Accueil</Link>
                <Link href="/catalogue" className="hover:text-blue-200 transition-colors">Catalogue</Link>
                <Link href="/location" className="hover:text-blue-200 transition-colors">Location</Link>
                <Link href="/atelier" className="hover:text-blue-200 transition-colors">Atelier</Link>
                <Link href="/apropos" className="hover:text-blue-200 transition-colors">À propos</Link>
                <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
              </nav>
              <div className="md:hidden">
                <button className="text-white">☰</button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        <footer className="bg-gray-800 text-gray-300 mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Moustache Bikes</h3>
                <p className="text-sm">Spécialiste des vélos électriques à Antibes</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-sm">📍 Antibes, France</p>
                <p className="text-sm">📞 04 XX XX XX XX</p>
                <p className="text-sm">✉️ contact@moustachebikes-antibes.fr</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Horaires</h3>
                <p className="text-sm">Lun-Sam: 9h-19h</p>
                <p className="text-sm">Dim: 10h-18h</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
              © 2025 Moustache Bikes Antibes · Tous droits réservés
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
