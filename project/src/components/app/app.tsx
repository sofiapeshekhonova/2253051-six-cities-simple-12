
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HeaderLogged from '../header/headerLogged';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Card } from 'types/offer';
import { AppRoute } from '../../constants';
import { ReviewsType } from 'types/reviews';

type AppScreenProps = {
  cards: Card[];
  reviews: ReviewsType[];
}

function App({cards, reviews}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderLogged />
        <Routes>
          <Route path={AppRoute.Root} element={<Main cards={cards}/>} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room cards={cards} reviews={reviews}/>} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
