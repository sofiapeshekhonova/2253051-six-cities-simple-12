import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Goods from 'components/goods/goods';
import Reviews from 'components/reviews/reviews';
import PropertyGallery from 'components/propertyGallery/propertyGallery';
import NearPlaces from 'components/nearPlaces/nearPlaces';
import Host from 'components/host/host';
import Map from 'components/map/map';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchActiveOfferAction, fetchNearOffersAction, fetchRoomCommentsAction} from 'store/api-actions';
import { getActiveOffer, getStatusOffer } from 'store/hotels/selectors';
import { getNearOffers, getroomComments } from 'store/currentOffer/selectors';
import Layout from 'components/layout/layout';
import { Status } from '../../constants';
import LoadingScreen from 'pages/loading-screen/loading-screen';

function Room(): JSX.Element {
  const dispatch = useAppDispatch();
  const roomId = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchActiveOfferAction(roomId));
    dispatch(fetchRoomCommentsAction(roomId));
    dispatch(fetchNearOffersAction(roomId));
  }, [dispatch, roomId]);

  const roomComments = useAppSelector(getroomComments);
  const nearPlaces = useAppSelector(getNearOffers);
  const status = useAppSelector(getStatusOffer);
  const offer = useAppSelector(getActiveOffer);

  if (offer === null || status === Status.Idle || status === Status.Loading) {
    return (
      <LoadingScreen />
    );
  }

  const { title, rating, type, bedrooms, isPremium, maxAdults, price, goods } = offer;

  const sortRoomComments = roomComments.slice(0, 9).sort((a,b) => Date.parse(b.date) - Date.parse(a.date));

  let images : string[] = [];
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));
  while (images.length !== 6) {
    const index = getRandomInt(offer.images.length);
    images.push(offer.images[index]);
    images = images.filter((v, i, arr) => arr.indexOf(v) === i);
  }

  return (
    <Layout className="page" title="Rooms" isLoggedIn>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <PropertyGallery image={image} key={image} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className='property__mark'><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${(rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <Goods item={item} key={item} />
                  ))}
                </ul>
              </div>
              <Host room={offer} />
              <Reviews reviews={sortRoomComments} roomCommentsLength={roomComments.length} roomId={roomId}/>
            </div>
          </div>
          <Map
            className="property__map map"
            cards={[offer, ...nearPlaces]}
            activeCard={roomId}
            style={{ height: '600px'}}
          />
        </section>
        <div className="container">
          <NearPlaces
            nearPlaceCards={nearPlaces}
          />
        </div>
      </main>
    </Layout>
  );
}

export default Room;
