import Main from '../../pages/main/main';
import {HelmetProvider} from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import HeaderLogged from '../header/headerLogged';

function App(): JSX.Element {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <HeaderLogged />
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<Room />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
