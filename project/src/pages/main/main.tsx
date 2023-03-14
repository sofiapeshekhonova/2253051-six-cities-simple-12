import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import CityNav from 'components/cityNav/cityNav';
import Offers from 'components/offers/offers';
import Map from 'components/map/map';
import { CITIES } from '../../constants';
import { Card } from 'types/offer';
import { CityType } from 'types/city';

type AppScreenProps = {
  cards: Card[];
  city: CityType;
}

function Main({ cards, city }: AppScreenProps): JSX.Element {

  const [activeCard, setActiveCard] = useState< null | number >(null);

  return (
    <>
      <Helmet>
        <title>Six Cities. Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((cityNav) => <CityNav city={cityNav} key={cityNav} />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <Offers cards={cards} setActiveCard={setActiveCard}/>
            </section>
            <div className="cities__right-section">
              <Map className='cities__map map' city={city} cards={cards} activeCard={activeCard}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
