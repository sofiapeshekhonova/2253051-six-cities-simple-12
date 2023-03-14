import PlaceCard from 'components/placeCard/placeCard';
import { Card } from 'types/offer';

type OffersProps = {
  cards: Card[];
  setActiveCard: (id: number | null) => void;
}

function Offers({ cards, setActiveCard }: OffersProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <PlaceCard key={card.id} card={card} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
}

export default Offers;
