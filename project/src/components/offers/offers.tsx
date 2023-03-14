import { useState } from 'react';
import PlaceCard from 'components/placeCard/placeCard';
import { Card } from 'types/offer';

type OffersProps = {
  cards: Card[];
}

function Offers({ cards }: OffersProps): JSX.Element {

  const [, setActiveCard] = useState<null | number>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <PlaceCard key={card.id} card={card} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
}

export default Offers;
