import { useWindowSize } from '@/hooks/useWindowSize';

interface PaymentBannerProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export default function PaymentBanner({ variant = 'default', className = '' }: PaymentBannerProps) {
  const { width } = useWindowSize();
  const isMobile = width > 0 && width < 768;

  if (variant === 'compact') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-r from-primary-black via-secondary-black to-primary-black text-white px-6 py-3 rounded-xl border border-accent-gold shadow-2xl ${className}`}>
        {/* Effet shimmer */}
        <div className="absolute inset-0 shimmer opacity-50" />

        <div className="relative flex items-center justify-center space-x-3 text-sm font-bold tracking-wide">
          <div className="animate-float">
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <span className="text-accent-gold font-bold">
            💳 PAIEMENT 4X SANS FRAIS
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary-black via-secondary-black to-primary-black text-white rounded-xl p-6 shadow-2xl border border-accent-gold ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-accent-gold/20 rounded-full p-3 border border-accent-gold/30">
            <svg className="w-8 h-8 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 text-white tracking-wide">PAIEMENT EN 4 FOIS SANS FRAIS</h3>
            <p className="text-accent-silver text-sm">
              Étalez vos paiements sur 4 mois sans aucun frais supplémentaire
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className="flex items-center space-x-2">
            <div className="bg-secondary-black border border-border-color rounded-lg px-3 py-2 text-center shadow-inner">
              <div className="text-lg font-bold text-accent-gold">1/4</div>
              <div className="text-xs text-accent-silver">Aujourd'hui</div>
            </div>
            <div className="text-accent-silver">→</div>
            <div className="bg-secondary-black border border-border-color rounded-lg px-3 py-2 text-center shadow-inner">
              <div className="text-lg font-bold text-accent-gold">1/4</div>
              <div className="text-xs text-accent-silver">+30 jours</div>
            </div>
            <div className="text-accent-silver">→</div>
            <div className="bg-secondary-black border border-border-color rounded-lg px-3 py-2 text-center shadow-inner">
              <div className="text-lg font-bold text-accent-gold">1/4</div>
              <div className="text-xs text-accent-silver">+60 jours</div>
            </div>
            <div className="text-accent-silver">→</div>
            <div className="bg-secondary-black border border-border-color rounded-lg px-3 py-2 text-center shadow-inner">
              <div className="text-lg font-bold text-accent-gold">1/4</div>
              <div className="text-xs text-accent-silver">+90 jours</div>
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="mt-4">
          <div className="flex justify-between items-center text-sm">
            <span className="bg-secondary-black border border-border-color rounded px-2 py-1 text-accent-silver">1/4 Aujourd'hui</span>
            <span className="bg-secondary-black border border-border-color rounded px-2 py-1 text-accent-silver">1/4 +30j</span>
            <span className="bg-secondary-black border border-border-color rounded px-2 py-1 text-accent-silver">1/4 +60j</span>
            <span className="bg-secondary-black border border-border-color rounded px-2 py-1 text-accent-silver">1/4 +90j</span>
          </div>
        </div>
      )}
    </div>
  );
}