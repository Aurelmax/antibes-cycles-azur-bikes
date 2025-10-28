'use client'

import { useState } from 'react'
import Link from 'next/link'

interface QuickAction {
  icon: string
  label: string
  action: string
  link?: string
}

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [showActions, setShowActions] = useState(false)

  const quickActions: QuickAction[] = [
    {
      icon: '🚴',
      label: 'Nos vélos',
      action: 'Découvrir nos vélos électriques',
      link: '/catalogue'
    },
    {
      icon: '📅',
      label: 'Essai gratuit',
      action: 'Réserver un essai',
      link: '/contact'
    },
    {
      icon: '🔧',
      label: 'Atelier',
      action: 'Services atelier',
      link: '/atelier'
    },
    {
      icon: '📍',
      label: 'Location',
      action: 'Louer un vélo',
      link: '/location'
    },
    {
      icon: '💬',
      label: 'Contact',
      action: 'Nous contacter',
      link: '/contact'
    }
  ]

  const faqs = [
    {
      question: 'Quelle est l\'autonomie des vélos ?',
      answer: 'Entre 108 et 125 km selon le modèle et les conditions d\'utilisation.'
    },
    {
      question: 'Proposez-vous des essais ?',
      answer: 'Oui ! Tous nos essais sont gratuits. Réservez sur notre page contact.'
    },
    {
      question: 'Quel est le délai de livraison ?',
      answer: 'Généralement sous 48-72h pour les modèles en stock.'
    },
    {
      question: 'Garantie et SAV ?',
      answer: 'Garantie constructeur 2 ans + SAV assuré dans notre atelier à Antibes.'
    }
  ]

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-accent-gold text-primary-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 button-pulse button-glow-intense flex items-center justify-center group"
        aria-label="Assistant virtuel"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span>
        ) : (
          <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
        )}
      </button>

      {/* Panneau de l'assistant */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card-bg border-2 border-accent-gold rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-gold to-yellow-500 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-black rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="text-primary-black font-bold text-lg">Assistant AZUR</h3>
                <p className="text-primary-black text-sm opacity-90">Comment puis-je vous aider ?</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
            {/* Quick Actions */}
            <div className="mb-4">
              <h4 className="text-accent-gold font-semibold mb-3 flex items-center">
                <span className="mr-2">⚡</span>
                Actions rapides
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    href={action.link || '#'}
                    className="bg-secondary-black border border-border-color rounded-lg p-3 hover:border-accent-gold hover:bg-gradient-to-br hover:from-accent-gold/10 hover:to-transparent transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                      {action.icon}
                    </div>
                    <div className="text-white text-sm font-medium">{action.label}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h4 className="text-accent-gold font-semibold mb-3 flex items-center">
                <span className="mr-2">❓</span>
                Questions fréquentes
              </h4>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-secondary-black border border-border-color rounded-lg p-3 group hover:border-accent-gold transition-colors duration-300"
                  >
                    <summary className="text-white text-sm font-medium cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-accent-gold group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-accent-silver text-sm mt-2 pt-2 border-t border-border-color">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-4 bg-gradient-to-br from-accent-gold/20 to-transparent border border-accent-gold rounded-lg p-4">
              <p className="text-white text-sm mb-3">
                <span className="text-accent-gold font-semibold">Besoin d&apos;aide personnalisée ?</span>
                <br />
                Notre équipe est à votre écoute
              </p>
              <Link
                href="/contact"
                className="block w-full bg-accent-gold text-primary-black py-2 px-4 rounded-lg font-bold text-center hover:bg-white transition-all duration-300 button-shimmer"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-secondary-black p-3 border-t border-border-color">
            <p className="text-accent-silver text-xs text-center">
              📞 Disponible 9h-19h • 📍 Antibes
            </p>
          </div>
        </div>
      )}

      {/* Custom CSS pour le scroll et l'animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--secondary-black);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--accent-gold);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f4d03f;
        }
      `}</style>
    </>
  )
}
