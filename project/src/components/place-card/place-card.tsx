import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'types/offer';

type Props = {
  card: Card;
  setActiveCard?: (id: number | null) => void;
}

function PlaceCard({ card, setActiveCard }: Props): JSX.Element {
  const { id } = card;
  const offerId = `/offer/${id}`;

  function mouseOverHandler() {
    if (setActiveCard !== undefined) {
      setActiveCard(id);
    }
  }

  function mouseLeaveHandler() {
    if (setActiveCard !== undefined) {
      setActiveCard(null);
    }
  }

  return (
    <article className="cities__card place-card" onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
      {card.isPremium && <div className='place-card__mark'><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerId}>
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(card.rating / 5 * 100)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerId}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
