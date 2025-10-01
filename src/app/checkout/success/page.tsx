'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Générer un numéro de commande aléatoire
    const orderNum = `CMD-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setOrderNumber(orderNum);
  }, []);

  return (
    <div className="min-h-screen bg-primary-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header de succès */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 tracking-wide">
              <span className="text-accent-gold">COMMANDE</span> CONFIRMÉE !
            </h1>
            <p className="text-xl text-accent-silver max-w-2xl mx-auto mb-6">
              Merci pour votre confiance ! Votre commande a été enregistrée avec succès.
            </p>
            <div className="bg-card-bg border border-accent-gold rounded-xl p-6 max-w-md mx-auto">
              <div className="text-accent-silver text-sm mb-2">Numéro de commande</div>
              <div className="text-2xl font-bold text-accent-gold">{orderNumber}</div>
            </div>
          </div>

          {/* Détails de la commande */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Prochaines étapes */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">📋</span>
                PROCHAINES ÉTAPES
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gold text-primary-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Confirmation par email</h3>
                    <p className="text-accent-silver text-sm">
                      Vous recevrez un email de confirmation avec tous les détails de votre commande.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gold text-primary-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Préparation de votre vélo</h3>
                    <p className="text-accent-silver text-sm">
                      Notre équipe prépare votre vélo avec soin et vérifie tous les composants.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-gold text-primary-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Livraison</h3>
                    <p className="text-accent-silver text-sm">
                      Livraison à domicile ou retrait en magasin selon votre choix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="bg-card-bg border border-border-color rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">📞</span>
                BESOIN D'AIDE ?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-gold text-primary-black rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-accent-silver text-sm">contact@antibe-cycles-azur.fr</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-gold text-primary-black rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-white">Téléphone</div>
                    <div className="text-accent-silver text-sm">04 93 95 67 89</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-gold text-primary-black rounded-lg flex items-center justify-center">
                    🕒
                  </div>
                  <div>
                    <div className="font-semibold text-white">Horaires</div>
                    <div className="text-accent-silver text-sm">Lun-Sam: 9h-19h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services complémentaires */}
          <div className="bg-card-bg border border-accent-gold rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="text-accent-gold">SERVICES</span> COMPLÉMENTAIRES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-secondary-black border border-border-color rounded-xl">
                <div className="text-4xl mb-4 text-accent-gold">🔧</div>
                <h3 className="font-bold text-white mb-2">Réglage postural</h3>
                <p className="text-accent-silver text-sm mb-4">
                  Optimisez votre position pour un confort maximal
                </p>
                <Link 
                  href="/services/reglage-postural"
                  className="text-accent-gold hover:text-white transition-colors font-semibold text-sm"
                >
                  En savoir plus →
                </Link>
              </div>
              
              <div className="text-center p-6 bg-secondary-black border border-border-color rounded-xl">
                <div className="text-4xl mb-4 text-accent-gold">🛡️</div>
                <h3 className="font-bold text-white mb-2">Assurance vélo</h3>
                <p className="text-accent-silver text-sm mb-4">
                  Protégez votre investissement avec notre assurance
                </p>
                <Link 
                  href="/contact"
                  className="text-accent-gold hover:text-white transition-colors font-semibold text-sm"
                >
                  Demander un devis →
                </Link>
              </div>
              
              <div className="text-center p-6 bg-secondary-black border border-border-color rounded-xl">
                <div className="text-4xl mb-4 text-accent-gold">📚</div>
                <h3 className="font-bold text-white mb-2">Formation</h3>
                <p className="text-accent-silver text-sm mb-4">
                  Apprenez à bien utiliser votre vélo électrique
                </p>
                <Link 
                  href="/atelier"
                  className="text-accent-gold hover:text-white transition-colors font-semibold text-sm"
                >
                  Réserver une session →
                </Link>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalogue"
                className="bg-accent-gold text-primary-black px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-black transition-all duration-300 button-glow-intense"
              >
                CONTINUER LES ACHATS
              </Link>
              <Link
                href="/"
                className="bg-secondary-black border border-accent-gold text-accent-gold px-8 py-4 rounded-lg font-bold hover:bg-accent-gold hover:text-primary-black transition-all duration-300"
              >
                RETOUR À L'ACCUEIL
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-accent-silver text-sm">
                Un email de confirmation vous a été envoyé avec tous les détails de votre commande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
