import { useRef, useEffect } from 'react';
import { BaseIconOptions, Icon, Marker } from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from 'hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants';
import { Card } from 'types/offer';

const createIcon = (icon: string): BaseIconOptions => ({
  iconUrl: icon,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});


const defaultCustomIcon = new Icon(createIcon(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(createIcon(URL_MARKER_CURRENT));

type StyleMap = {
  height: string;
}

type MapScreenProps = {
  cards: Card[];
  activeCard: null | number;
  className: string;
  style: StyleMap;
}

function Map({ cards, activeCard, className, style }: MapScreenProps): JSX.Element {

  const mapRef = useRef(null);
  const city = cards[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
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
          );
        marker.addTo(markers);
      });
      markers.addTo(map);
    }
    return (() => {
      markers.clearLayers();
    });
  }, [map, cards, activeCard, city]);

  return (
    <section className={className} ref={mapRef} style={style} />
  );
}

export default Map;
