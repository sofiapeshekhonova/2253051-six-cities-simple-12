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
    iconAnchor: [20, 40],
  };
}

const defaultCustomIcon = new Icon(createIcon(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(createIcon(URL_MARKER_CURRENT));

type StyleMap = {
  height: string;
 }

type MapScreenProps = {
  offers: Card[];
  activeOffer: null | number;
  className: string;
  style: StyleMap;
}

function Map({ offers, activeOffer, className, style }: MapScreenProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            offer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section className={className} ref={mapRef} style={style} />
  );
}

export default Map;
