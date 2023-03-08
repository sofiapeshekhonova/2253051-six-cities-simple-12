import { useParams } from 'react-router-dom';
import Goods from '../../components/goods/goods';
import Reviews from '../../components/reviews/reviews';
import PropertyGallery from '../../components/propertyGallery/propertyGallery';
import NearPlaces from '../../components/nearPlaces/nearPlaces';
import { cards, reviews } from '../../components/mocks/mocks';
import { CardProps } from '../../types/offer';
import Host from '../../components/host/host';
import { Helmet } from 'react-helmet-async';

function Room(): JSX.Element {
  const cardId = Number(useParams().id);

  let card: CardProps = {
    id: 1,
    previewImage: 'img/apartment-01.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    premium: true,
    price: 120,
    type: 'Apartment',
    maxAdults: 4,
    bedrooms: 3,
    rating: 4.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Wi-Fi', 'Washing machine', ' Towels', ' Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    images: [
      'img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 10,
      isPro: true,
      name: 'Angelina',
    },
  };

  cards.forEach((item) => {
    if (item.id === cardId) {
      card = item;
      return card;
    }
  });

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
              {reviews.map((review) => (
                <Reviews key={review.id} review={review} />
              ))}
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    </>
  );
}

export default Room;
