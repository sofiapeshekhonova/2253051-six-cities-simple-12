import { useRef, useEffect } from 'react';
import { BaseIconOptions, Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import { Card } from 'types/offer';

function createIcon (icon:string): BaseIconOptions {
  return {
    iconUrl: icon,
    iconSize: [30, 40],
    iconAnchor: [30, 40],
  };
}

const defaultCustomIcon = new Icon(createIcon(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(createIcon(URL_MARKER_CURRENT));

type MapScreenProps = {
  cards: Card[];
  activeCard: null | number;
  className: string;
}


function Map({ cards, activeCard, className }: MapScreenProps): JSX.Element {
  const mapRef = useRef(null);
  const city = cards[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.location.latitude,
          lng: card.location.longitude,
        });
        marker
          .setIcon(
            card.id === activeCard
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, cards, activeCard]);

  return (
    <section className={className} ref={mapRef} style={{ height: '1100px' }} />
  );
}

export default Map;
