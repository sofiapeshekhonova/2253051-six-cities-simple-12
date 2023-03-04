type Props = {
  card: CardProps;
}

 type CardProps = {
  name: string;
  img: string;
  premium?: string;
  price: number;
  houseType: string;
  id: number;
  rating: string;
 }

function Card( {card}: Props): JSX.Element {

  return (
    <article className="cities__card place-card">
      <div className={!card.premium ? '' : 'place-card__mark'}>
        <span>{card.premium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={card.img} width="260" height="200" alt="Place"/>
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
            <span style={{width: card.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{card.name}</a>
        </h2>
        <p className="place-card__type">{card.houseType}</p>
      </div>
    </article>
  );
}

export default Card;
