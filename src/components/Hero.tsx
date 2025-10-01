import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  backgroundImage = 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  showButton = true,
  buttonText = 'DÉCOUVRIR',
  buttonLink = '/catalogue',
  className = ''
}: HeroProps) {
  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Image de fond avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`
        }}
      />
      
      {/* Overlay doré subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 via-transparent to-accent-gold/10" />
      
      {/* Contenu */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
          <span className="text-accent-gold">{title.split(' ')[0]}</span>
          {title.split(' ').slice(1).join(' ')}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-accent-silver mb-8 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        
        {showButton && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={buttonLink}
              className="inline-flex items-center bg-accent-gold text-primary-black px-8 py-4 rounded-xl text-lg font-bold tracking-wide hover:bg-white hover:text-primary-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover-glow"
            >
              {buttonText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
      
      {/* Effet de particules dorées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-gold rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-gold rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-50 animate-pulse delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent-gold rounded-full opacity-30 animate-pulse delay-3000" />
      </div>
    </section>
  );
}
