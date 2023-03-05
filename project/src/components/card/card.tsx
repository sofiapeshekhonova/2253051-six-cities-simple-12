import { CardProps } from '../../types/offer';
type Props = {
  card: CardProps;
}

function Card({card}: Props): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className={!card.premium ? '' : 'place-card__mark'}>
        <span>{!card.premium ? '' : 'Premium'}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href='../../pages/property/property'>
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place"/>
        </a>
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
          <a href='../../pages/property/property'>{card.title}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default Card;
