import { Card } from '../../types/offer';
import {Link} from 'react-router-dom';

type Props = {
  card: Card;
}

function PlaceCard({card}: Props): JSX.Element {
  const {id} = card;
  const offerId = `/offer/${id}`;

  return (
    <article className="cities__card place-card">
      <div className={!card.premium ? '' : 'place-card__mark'}>
        <span>{!card.premium ? '' : 'Premium'}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerId}>
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place"/>
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
            <span style={{width: `${Math.round(card.rating / 5 * 100)}%`}} />
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

export default PlaceCard;
