import PlaceCard from 'components/placeCard/placeCard';
import { Card } from 'types/offer';

type OffersProps = {
  offers: Card[];
  setActiveOffer: (id: number | null) => void;
}

function Offers({ offers, setActiveOffer }: OffersProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} card={offer} setActiveCard={setActiveOffer} />
      ))}
    </div>
  );
}

export default Offers;
