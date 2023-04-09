import PlaceCard from 'components/place-card/place-card';
import { Card } from 'types/offer';

type Props = {
  nearPlaceCards: Card[];
}

function NearPlaces({ nearPlaceCards }: Props): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaceCards.map((card) => (
          <PlaceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
