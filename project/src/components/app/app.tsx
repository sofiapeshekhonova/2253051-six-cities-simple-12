
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HeaderLogged from '../header/headerLogged';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute } from '../../constants';
import { Card } from 'types/offer';
import { ReviewsType } from 'types/reviews';
import { City } from 'components/mocks/mocks';

type AppScreenProps = {
  cards: Card[];
  reviews: ReviewsType[];
  nearPlaceCards: Card[];
}

function App({ cards, reviews, nearPlaceCards }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderLogged />
        <Routes>
          <Route path={AppRoute.Root} element={<Main cards={cards} city={City} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room cards={cards} reviews={reviews} city={City} nearPlaceCards={nearPlaceCards} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
