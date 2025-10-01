'use client';

import { useState, useEffect } from 'react';

interface ProductCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ProductCarousel({ images, alt, className = '' }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Image principale */}
      <div className="relative aspect-square bg-card-bg border border-border-color rounded-2xl overflow-hidden shadow-xl group">
        <img 
          src={images[currentIndex]} 
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badge NOUVEAU */}
        <div className="absolute top-4 left-4 bg-accent-gold text-primary-black px-3 py-1 rounded-full text-sm font-bold">
          NOUVEAU
        </div>

        {/* Indicateur d'image */}
        <div className="absolute top-4 right-4 bg-primary-black/80 text-white px-3 py-1 rounded-full text-sm font-bold">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-black/80 text-white p-3 rounded-full hover:bg-accent-gold hover:text-primary-black transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-black/80 text-white p-3 rounded-full hover:bg-accent-gold hover:text-primary-black transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bouton play/pause */}
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-4 right-4 bg-primary-black/80 text-white p-3 rounded-full hover:bg-accent-gold hover:text-primary-black transition-all duration-300"
          aria-label={isAutoPlaying ? "Arrêter le défilement" : "Démarrer le défilement"}
        >
          {isAutoPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Miniatures */}
      <div className="mt-6">
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square bg-card-bg border rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                index === currentIndex
                  ? 'border-accent-gold ring-2 ring-accent-gold/50 scale-105'
                  : 'border-border-color hover:border-accent-gold/50 hover:scale-105'
              }`}
            >
              <img 
                src={image} 
                alt={`${alt} - Miniature ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-accent-gold/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Informations sur les images */}
      <div className="mt-6 bg-card-bg border border-border-color rounded-xl p-6">
        <h4 className="text-lg font-bold text-white mb-4">📸 Galerie Photos</h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-accent-silver">
          <div className="flex items-center">
            <span className="text-accent-gold mr-2">🖼️</span>
            <span>Vue avant complète</span>
          </div>
          <div className="flex items-center">
            <span className="text-accent-gold mr-2">🔧</span>
            <span>Détails techniques</span>
          </div>
          <div className="flex items-center">
            <span className="text-accent-gold mr-2">⚙️</span>
            <span>Moteur et transmission</span>
          </div>
          <div className="flex items-center">
            <span className="text-accent-gold mr-2">🚲</span>
            <span>Fourche et suspension</span>
          </div>
        </div>
        
        {/* Contrôles supplémentaires */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-accent-silver">
            <span>Navigation:</span>
            <span className="text-accent-gold">← →</span>
            <span>ou</span>
            <span className="text-accent-gold">cliquez sur les miniatures</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-accent-silver">
            <span>Auto-play:</span>
            <button
              onClick={toggleAutoPlay}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                isAutoPlaying
                  ? 'bg-accent-gold text-primary-black'
                  : 'bg-secondary-black text-accent-silver hover:bg-accent-gold hover:text-primary-black'
              }`}
            >
              {isAutoPlaying ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
