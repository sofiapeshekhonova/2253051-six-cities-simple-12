
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import browserHistory from 'browser-history';
import Header from '../header/header';
import Main from 'pages/main/main';
import Login from 'pages/login/login';
import Room from 'pages/room/room';
import NotFoundScreen from 'pages/not-found-screen/not-found-screen';
import LoadingScreen from 'pages/loading-screen/loading-screen';
import { AppRoute } from '../../constants';
import { Card } from 'types/offer';
import { useAppSelector } from 'hooks';
import HistoryRouter from 'components/history-route/history-route';

type AppScreenProps = {
  nearPlaceCards: Card[];
}

function App({ nearPlaceCards }: AppScreenProps): JSX.Element {

  const isCardsDataLoading = useAppSelector((state) => state.isCardsDataLoading);

  if (isCardsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Header />
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room nearPlaceCards={nearPlaceCards} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
