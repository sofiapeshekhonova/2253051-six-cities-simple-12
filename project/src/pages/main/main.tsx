import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import CityNav from 'components/cityNav/cityNav';
import Offers from 'components/offers/offers';
import Map from 'components/map/map';
import SortOptions from 'components/sortOptions/sortOptions';
import { CITIES, SortCards } from '../../constants';
import { changeCity } from 'store/action';
import { useAppDispatch, useAppSelector } from 'hooks';
import LoadingScreen from 'pages/loading-screen/loading-screen';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState< null | number >(null);
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  const cards = useAppSelector((state) => state.cards.filter((card) => card.city.name === selectedCity));

  const selectedSortItem = useAppSelector((state) => state.sortOption);
  const sortCards = SortCards(cards, selectedSortItem);

  const handleChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };

  const isCardsDataLoading = useAppSelector((state) => state.isCardsDataLoading);

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
              {CITIES.map((cityNav) => <CityNav city={cityNav} key={cityNav} handleChangeCity={handleChangeCity}/>)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cards.length} places to stay in {selectedCity}</b>
              <SortOptions selectedSortItem={selectedSortItem}/>
              {isCardsDataLoading ? <LoadingScreen /> : <Offers cards={sortCards} setActiveCard={setActiveCard}/>}
            </section>
            <div className="cities__right-section">
              {isCardsDataLoading ? <LoadingScreen /> :
                <Map className='cities__map map' cards={cards} activeCard={activeCard} style={{ height: '1100px' }} />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
