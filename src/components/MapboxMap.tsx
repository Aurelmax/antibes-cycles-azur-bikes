'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapboxMapProps {
  className?: string;
}

export default function MapboxMap({ className = '' }: MapboxMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Coordonnées d'Antibes
  const center: [number, number] = [7.1251, 43.5804];

  // Parcours recommandés avec coordonnées GPS
  const routes = [
    {
      id: 'tour-remparts',
      name: 'Tour des Remparts',
      difficulty: 'Facile',
      duration: '45min',
      distance: '8km',
      color: '#10B981',
      coordinates: [
        [7.1251, 43.5804], // Antibes centre
        [7.1200, 43.5820], // Port Vauban
        [7.1180, 43.5840], // Vieille ville
        [7.1150, 43.5860], // Marché provençal
        [7.1251, 43.5804]  // Retour au centre
      ]
    },
    {
      id: 'cap-antibes',
      name: 'Cap d\'Antibes',
      difficulty: 'Modéré',
      duration: '1h30',
      distance: '15km',
      color: '#3B82F6',
      coordinates: [
        [7.1251, 43.5804], // Antibes centre
        [7.1100, 43.5700], // Plage de la Garoupe
        [7.1000, 43.5600], // Villa Eilenroc
        [7.0900, 43.5500], // Sentier littoral
        [7.1251, 43.5804]  // Retour au centre
      ]
    },
    {
      id: 'biot-vallauris',
      name: 'Biot & Vallauris',
      difficulty: 'Sportif',
      duration: '2h30',
      distance: '25km',
      color: '#8B5CF6',
      coordinates: [
        [7.1251, 43.5804], // Antibes centre
        [7.2000, 43.6200], // Biot
        [7.2500, 43.6500], // Vallauris
        [7.3000, 43.6800], // Ateliers poterie
        [7.1251, 43.5804]  // Retour au centre
      ]
    }
  ];

  // Points d'intérêt
  const pointsOfInterest = [
    {
      id: 'port-vauban',
      name: 'Port Vauban',
      coordinates: [7.1200, 43.5820],
      type: 'port',
      icon: '⚓'
    },
    {
      id: 'vieille-ville',
      name: 'Vieille Ville',
      coordinates: [7.1180, 43.5840],
      type: 'historic',
      icon: '🏛️'
    },
    {
      id: 'plage-garoupe',
      name: 'Plage de la Garoupe',
      coordinates: [7.1100, 43.5700],
      type: 'beach',
      icon: '🏖️'
    },
    {
      id: 'villa-eilenroc',
      name: 'Villa Eilenroc',
      coordinates: [7.1000, 43.5600],
      type: 'villa',
      icon: '🏰'
    }
  ];

  useEffect(() => {
    if (map.current) return; // Éviter la réinitialisation

    // Configuration Mapbox avec token public
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11', // Style sombre
        center: center,
        zoom: 12,
        pitch: 45,
        bearing: -17.6,
        antialias: true
      });

      map.current.on('load', () => {
        if (!map.current) return;

        // Vérifier si le token est valide
        if (!mapboxgl.accessToken || mapboxgl.accessToken === '') {
          console.error('Token Mapbox manquant');
          setIsLoaded(true);
          return;
        }

        // Ajouter les sources de données avec gestion d'erreur
        try {
          map.current.addSource('routes', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: routes.map(route => ({
                type: 'Feature',
                properties: {
                  id: route.id,
                  name: route.name,
                  difficulty: route.difficulty,
                  duration: route.duration,
                  distance: route.distance,
                  color: route.color
                },
                geometry: {
                  type: 'LineString',
                  coordinates: route.coordinates
                }
              }))
            }
          });

          map.current.addSource('points', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: pointsOfInterest.map(point => ({
                type: 'Feature',
                properties: {
                  id: point.id,
                  name: point.name,
                  type: point.type,
                  icon: point.icon
                },
                geometry: {
                  type: 'Point',
                  coordinates: point.coordinates
                }
              }))
            }
          });
        } catch (error) {
          console.warn('Erreur lors de l\'ajout des sources:', error);
          setHasError(true);
          return;
        }

        // Style des parcours avec gestion d'erreur
        try {
          map.current.addLayer({
            id: 'routes',
            type: 'line',
            source: 'routes',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': ['get', 'color'],
              'line-width': 4,
              'line-opacity': 0.8
            }
          });

          // Style des points d'intérêt
          map.current.addLayer({
            id: 'points',
            type: 'circle',
            source: 'points',
            paint: {
              'circle-color': '#d4af37',
              'circle-radius': 8,
              'circle-stroke-width': 2,
              'circle-stroke-color': '#ffffff'
            }
          });
        } catch (error) {
          console.warn('Erreur lors de l\'ajout des layers:', error);
          setHasError(true);
          return;
        }

        // Ajouter les contrôles
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
        map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

        setIsLoaded(true);
      });

      // Gestion des erreurs
      map.current.on('error', (e) => {
        console.warn('Erreur Mapbox détectée:', e.error?.message || 'Erreur inconnue');
        setHasError(true);
        setIsLoaded(true);
      });

      // Gestion des erreurs de style
      map.current.on('style.load', () => {
        console.log('Style Mapbox chargé avec succès');
      });

      // Gestion des erreurs de source
      map.current.on('sourcedata', (e) => {
        if (e.isSourceLoaded && e.source && e.source.type === 'geojson') {
           console.log('Source GeoJSON chargée:', (e.source as { id?: string }).id);
        }
      });

      // Gestion des clics sur les parcours
      map.current.on('click', 'routes', (e) => {
        if (e.features && e.features[0]) {
          const feature = e.features[0];
          const properties = feature.properties;
          
          // Créer un popup
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
              <div class="p-4 bg-primary-black text-white rounded-lg border border-accent-gold">
                <h3 class="text-lg font-bold text-accent-gold mb-2">${properties?.name || 'Parcours'}</h3>
                <div class="space-y-1 text-sm">
                  <div class="flex justify-between">
                    <span>Distance:</span>
                    <span class="font-semibold">${properties?.distance || 'N/A'}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Durée:</span>
                    <span class="font-semibold">${properties?.duration || 'N/A'}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Difficulté:</span>
                    <span class="font-semibold text-${properties?.difficulty === 'Facile' ? 'green' : properties?.difficulty === 'Modéré' ? 'blue' : 'purple'}-400">${properties?.difficulty || 'N/A'}</span>
                  </div>
                </div>
              </div>
            `)
            .addTo(map.current!);
        }
      });

      // Gestion des clics sur les points d'intérêt
      map.current.on('click', 'points', (e) => {
        if (e.features && e.features[0]) {
          const feature = e.features[0];
          const properties = feature.properties;
          
          new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`
              <div class="p-4 bg-primary-black text-white rounded-lg border border-accent-gold">
                <div class="flex items-center mb-2">
                  <span class="text-2xl mr-2">${properties?.icon || '📍'}</span>
                  <h3 class="text-lg font-bold text-accent-gold">${properties?.name || 'Point d\'intérêt'}</h3>
                </div>
                <p class="text-sm text-accent-silver">Point d'intérêt à découvrir</p>
              </div>
            `)
            .addTo(map.current!);
        }
      });

      // Changer le curseur au survol
      map.current.on('mouseenter', 'routes', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = 'pointer';
        }
      });

      map.current.on('mouseleave', 'routes', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
        }
      });

      map.current.on('mouseenter', 'points', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = 'pointer';
        }
      });

      map.current.on('mouseleave', 'points', () => {
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
        }
      });
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapContainer} 
        className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-accent-gold shadow-2xl"
        style={{ minHeight: '400px' }}
      />
      
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-primary-black flex items-center justify-center rounded-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-gold mx-auto mb-4"></div>
            <p className="text-accent-gold font-semibold">Chargement de la carte...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-primary-black flex items-center justify-center rounded-2xl border-2 border-accent-gold">
          <div className="text-center p-8">
            <div className="text-6xl mb-4 text-accent-gold">🗺️</div>
            <h3 className="text-xl font-bold text-white mb-4">Carte Interactive</h3>
            <p className="text-accent-silver mb-6">
              Découvrez nos parcours recommandés autour d'Antibes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-secondary-black p-4 rounded-lg border border-accent-gold">
                <div className="text-accent-gold font-bold mb-2">🏛️ Tour des Remparts</div>
                <div className="text-accent-silver">8km • 45min • Facile</div>
              </div>
              <div className="bg-secondary-black p-4 rounded-lg border border-accent-gold">
                <div className="text-accent-gold font-bold mb-2">🏖️ Cap d'Antibes</div>
                <div className="text-accent-silver">15km • 1h30 • Modéré</div>
              </div>
              <div className="bg-secondary-black p-4 rounded-lg border border-accent-gold">
                <div className="text-accent-gold font-bold mb-2">🏺 Biot & Vallauris</div>
                <div className="text-accent-silver">25km • 2h30 • Sportif</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Légende */}
      <div className="absolute top-4 left-4 bg-primary-black/90 backdrop-blur-sm border border-accent-gold rounded-lg p-4 text-white">
        <h4 className="font-bold text-accent-gold mb-2">Parcours disponibles</h4>
        <div className="space-y-2 text-sm">
          {routes.map(route => (
            <div key={route.id} className="flex items-center">
              <div 
                className="w-4 h-1 rounded mr-2" 
                style={{ backgroundColor: route.color }}
              />
              <span>{route.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
