import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import { Card } from 'types/offer';
import { CityType } from 'types/city';

type MapScreenProps = {
  city: CityType;
  cards: Card[];
  activeCard: null | number;
  className: string;
}

function Map({ city, cards, activeCard, className }: MapScreenProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        leaflet
          .marker({
            lat: card.lat,
            lng: card.lng,
          }, {
            icon: (card.id === activeCard)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, cards, activeCard]);

  return (
    <section className={className} ref={mapRef} />
  );
}

export default Map;
