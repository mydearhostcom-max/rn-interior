import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [18.4241, -33.9249], // Cape Town coordinates
      zoom: 13,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add a marker for the office location
    new mapboxgl.Marker({ color: '#B8956A' })
      .setLngLat([18.4241, -33.9249])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<h3 style="color: #000; margin: 0; font-weight: 600;">ARRCC Studio</h3><p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">Paarden Eiland, Cape Town</p>')
      )
      .addTo(map.current);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput);
      setShowTokenInput(false);
      localStorage.setItem('mapbox_token', tokenInput);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setShowTokenInput(false);
    }
  }, []);

  useEffect(() => {
    if (mapboxToken && !showTokenInput) {
      initializeMap(mapboxToken);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, showTokenInput]);

  if (showTokenInput) {
    return (
      <div className="w-full h-[500px] bg-secondary rounded-none flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-light">Enter Mapbox Token</h3>
            <p className="text-sm text-text-secondary">
              To display the map, please enter your Mapbox public token.
              Get one at{' '}
              <a 
                href="https://mapbox.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-gold hover:underline"
              >
                mapbox.com
              </a>
            </p>
          </div>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              className="bg-background border-border"
            />
            <Button 
              type="submit" 
              className="w-full bg-luxury-gold text-background hover:bg-luxury-gold/90"
            >
              LOAD MAP
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px]">
      <div ref={mapContainer} className="absolute inset-0 rounded-none" />
    </div>
  );
};

export default Map;
