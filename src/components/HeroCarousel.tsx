'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  className?: string;
}

export default function HeroCarousel({ slides, className = '' }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className={`relative h-[56.25vw] max-h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slides[currentSlide].backgroundImage}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-primary-black opacity-60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent z-20"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-gold rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-gold rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent-gold rounded-full opacity-50 animate-pulse delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent-gold rounded-full opacity-30 animate-pulse delay-3000" />
      </div>

      {/* Content */}
      <div className="relative z-40 max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          <span className="text-accent-gold">{slides[currentSlide].title.split(' ')[0]}</span> {slides[currentSlide].title.split(' ').slice(1).join(' ')}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-accent-silver mb-10 leading-relaxed max-w-4xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>
        <Link
          href={slides[currentSlide].buttonLink}
          className="inline-flex items-center justify-center px-10 py-4 bg-accent-gold text-primary-black font-bold rounded-lg text-xl hover:bg-white hover:text-primary-black transition-all duration-300 hover-glow tracking-wide shadow-lg button-glow-intense button-shimmer"
        >
          {slides[currentSlide].buttonText}
          <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Slide précédent"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Slide suivant"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent-gold scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-accent-gold transition-all duration-100 ease-linear"
          style={{ 
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
