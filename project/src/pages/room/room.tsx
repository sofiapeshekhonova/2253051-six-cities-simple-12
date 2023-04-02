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
import { fetchNearOffersAction, fetchRoomCommentsAction} from 'store/api-actions';
import { getOffers } from 'store/hotels/selectors';
import { getNearOffers, getroomComments } from 'store/room/selectors';

function Room(): JSX.Element {
  const [activeRoom, setActiveRoom] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const roomId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchRoomCommentsAction(roomId));
    dispatch(fetchNearOffersAction(roomId));
  }, [dispatch, roomId]);

  const offers = useAppSelector(getOffers);
  const roomComments = useAppSelector(getroomComments);
  const nearPlaces = useAppSelector(getNearOffers);


  const room: Card | undefined = offers.find((element) => element.id === roomId);

  if (room === undefined) {
    return <p>Информация по жилью не найдена</p>;
  }

  const cardMap = [room];

  return (
    <>
      <Helmet>
        <title>Six Cities. Rooms</title>
      </Helmet>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {room.images.map((image) => (
                <PropertyGallery image={image} key={image} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{!room.premium ? '' : 'Premium'}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">{room.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${(room.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {room.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {room.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {room.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {room.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {room.goods.map((item) => (
                    <Goods item={item} key={item} />
                  ))}
                </ul>
              </div>
              <Host room={room} />
              <Reviews reviews={roomComments} roomId={roomId}/>
            </div>
          </div>
          <Map
            className="property__map map"
            offers={cardMap}
            activeOffer={activeRoom}
            style={{ height: '400px' }}
          />
        </section>
        <div className="container">
          <NearPlaces
            nearPlaceCards={nearPlaces}
            setActiveCard={setActiveRoom}
          />
        </div>
      </main>
    </>
  );
}

export default Room;
