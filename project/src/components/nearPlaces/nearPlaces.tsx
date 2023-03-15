import PlaceCard from 'components/placeCard/placeCard';
import { Card } from 'types/offer';

type Props = {
  setActiveCard: (id: number | null) => void;
  nearPlaceCards: Card[];
}

function NearPlaces({ setActiveCard, nearPlaceCards }: Props): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaceCards.map((card) => (
          <PlaceCard key={card.id} card={card} setActiveCard={setActiveCard} />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
