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
        <header className="bg-primary-black text-white shadow-2xl border-b border-accent-gold">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold tracking-wide">
                <Link href="/" className="hover:text-accent-gold transition-all duration-300 hover-glow">
                  <span className="text-accent-gold">MOUSTACHE</span> BIKES
                </Link>
              </h1>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">ACCUEIL</Link>
                <Link href="/catalogue" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">CATALOGUE</Link>
                <Link href="/location" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">LOCATION</Link>
                <Link href="/atelier" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">ATELIER</Link>
                <Link href="/blog" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">BLOG</Link>
                <Link href="/apropos" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">À PROPOS</Link>
                <Link href="/contact" className="hover:text-accent-gold transition-all duration-300 font-medium tracking-wide">CONTACT</Link>
              </nav>
              <div className="md:hidden">
                <button className="text-white hover:text-accent-gold transition-colors text-2xl">☰</button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

      <footer className="bg-primary-black text-white mt-auto border-t border-accent-gold">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent-gold tracking-wide">
                <span className="text-accent-gold">MOUSTACHE</span> BIKES
              </h3>
              <p className="text-accent-silver mb-4 leading-relaxed">
                Spécialiste des vélos électriques haut de gamme à Antibes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-accent-silver hover:text-accent-gold transition-colors text-xl">
                  📘
                </a>
                <a href="#" className="text-accent-silver hover:text-accent-gold transition-colors text-xl">
                  📷
                </a>
                <a href="#" className="text-accent-silver hover:text-accent-gold transition-colors text-xl">
                  🐦
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-accent-gold tracking-wide">NAVIGATION</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-accent-silver hover:text-accent-gold transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/catalogue" className="text-accent-silver hover:text-accent-gold transition-colors">
                    Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="text-accent-silver hover:text-accent-gold transition-colors">
                    Location
                  </Link>
                </li>
                <li>
                  <Link href="/atelier" className="text-accent-silver hover:text-accent-gold transition-colors">
                    Atelier
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-accent-silver hover:text-accent-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-accent-gold tracking-wide">CONTACT</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-accent-gold mr-3 mt-1">📍</span>
                  <div>
                    <p className="text-accent-silver">123 Avenue de la République</p>
                    <p className="text-accent-silver">06600 Antibes, France</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-accent-gold mr-3">📞</span>
                  <a href="tel:+33493956789" className="text-accent-silver hover:text-accent-gold transition-colors">
                    04 93 95 67 89
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-accent-gold mr-3">✉️</span>
                  <a href="mailto:contact@moustachebike-antibes.fr" className="text-accent-silver hover:text-accent-gold transition-colors">
                    contact@moustachebike-antibes.fr
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-color pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-accent-silver text-sm">
                © 2025 <span className="text-accent-gold font-semibold">MOUSTACHE BIKES</span> Antibes · Tous droits réservés
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/mentions-legales" className="text-accent-silver hover:text-accent-gold transition-colors">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-accent-silver hover:text-accent-gold transition-colors">
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  )
}
