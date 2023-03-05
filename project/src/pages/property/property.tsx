import Goods from '../../components/goods/goods';
import { CardProps, Host } from '../../types/offer';
import Reviews from '../../components/reviews/reviews';
import { reviews } from '../../components/mocks/mocks';
import PropertyGallery from '../../components/propertyGallery/propertyGallery';
import NearPlaces from '../../components/nearPlaces/nearPlaces';
import HeaderLogged from '../../components/header/headerLogged';

type Props = {
  card: CardProps;
  host: Host;
}

function Property({ card, host }: Props): JSX.Element {
  return (
    <>
      <HeaderLogged />
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
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {!host.name ? '' : 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {card.description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
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

export default Property;
