'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqAccordion({ items, className = '' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <span className="text-lg font-semibold text-gray-800 pr-4">
              {item.question}
            </span>
            <div className="flex-shrink-0">
              <svg
                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// FAQ par défaut pour les vélos électriques
export const defaultFaqItems: FaqItem[] = [
  {
    question: "Quelle est l'autonomie d'un vélo électrique Moustache ?",
    answer: "L'autonomie varie entre 50 et 150 km selon le modèle, le niveau d'assistance, le terrain et votre style de conduite. Nos vélos sont équipés de batteries Bosch haute performance pour une autonomie optimale."
  },
  {
    question: "Combien de temps faut-il pour recharger la batterie ?",
    answer: "La recharge complète prend entre 3h30 et 6h selon la capacité de la batterie. Une charge à 80% peut être atteinte en 2-3h pour vos trajets quotidiens."
  },
  {
    question: "Proposez-vous un service après-vente ?",
    answer: "Oui, nous disposons d'un atelier équipé et de techniciens certifiés Moustache. Nous proposons l'entretien, les réparations, et un service de garantie complet sur tous nos vélos."
  },
  {
    question: "Peut-on essayer un vélo avant l'achat ?",
    answer: "Absolument ! Nous proposons des essais gratuits sur rendez-vous. Vous pouvez également louer un vélo pour quelques jours pour le tester dans vos conditions d'utilisation."
  },
  {
    question: "Quelles sont les modalités de financement ?",
    answer: "Nous proposons plusieurs solutions : paiement comptant, facilités de paiement sur 3-4-10 fois sans frais, crédit classique, et location longue durée (LLD). Des aides locales peuvent également s'appliquer."
  },
  {
    question: "Les vélos sont-ils garantis ?",
    answer: "Tous nos vélos Moustache bénéficient d'une garantie constructeur de 2 ans sur le cadre et les composants, et 2 ans sur la batterie et le moteur Bosch. Nous assurons le suivi complet de votre garantie."
  }
];