import { AppRoute } from '../../constants';
import { useAppSelector } from 'hooks';
import { Route, Link, Routes } from 'react-router-dom';
import HeaderLogged from './headerLoged';
import HeaderNotLogged from './headerNotLoged';

function Header(): JSX.Element {
  const user = useAppSelector((state) => state.userInformation);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <Routes>
            <Route path={AppRoute.Root} element={
              user ? <HeaderLogged email={user.email} avatar={user.avatarUrl}/> : <HeaderNotLogged/>
            }
            />
          </Routes>
        </div>
      </div>
    </header>
  );
}

export default Header;

