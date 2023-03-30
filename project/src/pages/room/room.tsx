import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Goods from 'components/goods/goods';
import Reviews from 'components/reviews/reviews';
import PropertyGallery from 'components/propertyGallery/propertyGallery';
import NearPlaces from 'components/nearPlaces/nearPlaces';
import Host from 'components/host/host';
import Map from 'components/map/map';
import { Card } from 'types/offer';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchNearOffersAction, fetchRoomCommentsAction } from 'store/api-actions';

function Room(): JSX.Element {
  const dispatch = useAppDispatch();

  const cardId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchRoomCommentsAction(cardId));
    dispatch(fetchNearOffersAction(cardId));
  }, [dispatch, cardId]);

  const cards = useAppSelector((state) => state.cards);
  const roomComments = useAppSelector((state) => state.roomComments);
  const nearPlaces = useAppSelector((state) => state.nearHotels);

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
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {card.images.map((image) => (
                <PropertyGallery image={image} key={image} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{!card.premium ? '' : 'Premium'}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{card.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${(card.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {card.rating}
                </span>
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
                  {card.goods.map((item) => (
                    <Goods item={item} key={item} />
                  ))}
                </ul>
              </div>
              <Host card={card} />
              <Reviews reviews={roomComments} />
            </div>
          </div>
          <Map
            className="property__map map"
            cards={cardMap}
            activeCard={activeCard}
            style={{ height: '400px' }}
          />
        </section>
        <div className="container">
          <NearPlaces
            nearPlaceCards={nearPlaces}
            setActiveCard={setActiveCard}
          />
        </div>
      </main>
    </>
  );
}

export default Room;
