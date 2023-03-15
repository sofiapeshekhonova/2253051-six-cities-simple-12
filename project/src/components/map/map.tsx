import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
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

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cards.forEach((card) => {
        const marker = new Marker({
          lat: card.lat,
          lng: card.lng,
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
    <section className={className} ref={mapRef} />
  );
}

export default Map;
