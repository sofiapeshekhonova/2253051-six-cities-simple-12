import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Goods from 'components/goods/goods';
import Reviews from 'components/reviews/reviews';
import PropertyGallery from 'components/propertyGallery/propertyGallery';
import NearPlaces from 'components/nearPlaces/nearPlaces';
import Host from 'components/host/host';
import Map from 'components/map/map';
import { Card } from 'types/offer';
import { ReviewsType } from 'types/reviews';


type AppScreenProps = {
  cards: Card[];
  reviews: ReviewsType[];
  nearPlaceCards: Card[];
}

function Room({ cards, reviews, nearPlaceCards}: AppScreenProps): JSX.Element {
  const cardId = Number(useParams().id);
  const [activeCard, setActiveCard] = useState<null | number>(null);
  const card: Card | undefined = cards.find((element) => element.id === cardId);

  if (card === undefined) {
    return <p>Информация по жилью не найдена</p>;
  }
  const cardMap = [card];

  return (
    <>
      <Helmet>
        <title>Six Cities. Rooms</title>
      </Helmet>
      <main className="page__main page__main--property">
        <section className="property">
          {card.images.map((image) => <PropertyGallery image={image} key={image} />)}
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{!card.premium ? '' : 'Premium'}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {card.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${card.rating / 5 * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{card.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {card.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {card.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {card.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{card.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {card.goods.map((item) => <Goods item={item} key={item} />)}
                </ul>
              </div>
              <Host card={card} />
              <Reviews reviews={reviews} />
            </div>
          </div>
          <Map className='property__map map' cards={cardMap} activeCard={activeCard} />
        </section>
        <div className="container">
          <NearPlaces nearPlaceCards={nearPlaceCards} setActiveCard={setActiveCard} />
        </div>
      </main>
    </>
  );
}

export default Room;
