import { useMemo, useState } from 'react';
import Offers from 'components/offers/offers';
import Map from 'components/map/map';
import SortOptions from 'components/sort-options/sort-options';
import { SortCards } from '../../constants';
import { useAppSelector } from 'hooks';
import { getOffers, getStatus } from 'store/hotels/selectors';
import { getSortOffers, getOffersCity } from 'store/app/selectors';
import LoadingScreen from 'pages/loading-screen/loading-screen';
import Locations from 'components/locations/locations';
import Layout from 'components/layout/layout';
import MainEmpty from 'components/main-empty/main-empty';

function Main(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<null | number>(null);

  const isOffersDataLoading = useAppSelector(getStatus);

  const selectedCity = useAppSelector(getOffersCity);
  const allOffers = useAppSelector(getOffers);

  const offers = useMemo(
    () => allOffers.filter((card) => card.city.name === selectedCity),
    [allOffers, selectedCity]
  );

  const selectedSortItem = useAppSelector(getSortOffers);
  const sortOffers = SortCards(offers, selectedSortItem);

  return (
    <Layout className=" page page--gray page--main" title="Main" isLoggedIn>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        {isOffersDataLoading === 'Loading' ? <LoadingScreen /> :
          <div className="cities">
            {offers.length === 0 ? <MainEmpty city={selectedCity} /> :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
                  <SortOptions selectedSortItem={selectedSortItem} />
                  <Offers offers={sortOffers} setActiveOffer={setActiveOffer} />
                </section>
                <div className="cities__right-section">
                  <Map className='cities__map map' cards={offers} activeCard={activeOffer} style={{ height: '770px' }} />
                </div>
              </div>}
          </div>}
      </main>
    </Layout>
  );
}

export default Main;
