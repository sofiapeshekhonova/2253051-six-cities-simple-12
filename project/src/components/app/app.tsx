
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
import LoadingScreen from 'pages/loading-screen/loading-screen';
import { useAppSelector } from 'hooks';

type AppScreenProps = {
  reviews: ReviewsType[];
  nearPlaceCards: Card[];
}

function App({ reviews, nearPlaceCards }: AppScreenProps): JSX.Element {

  const isCardsDataLoading = useAppSelector((state) => state.isCardsDataLoading);

  if (isCardsDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderLogged />
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          {/* <Route path={AppRoute.Room} element={<Room cards={cards} reviews={reviews} nearPlaceCards={nearPlaceCards} />} /> */}
          <Route path={AppRoute.Room} element={<Room reviews={reviews} nearPlaceCards={nearPlaceCards} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
