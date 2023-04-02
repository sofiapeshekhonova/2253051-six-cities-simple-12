import { useAppSelector } from 'hooks';
import { Route, Link, Routes } from 'react-router-dom';
import HeaderLogged from './headerLoged';
import HeaderNotLogged from './headerNotLoged';
import { getAuthorizationStatus, getUserInformation } from 'store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';

function Header(): JSX.Element {
  const user = useAppSelector(getUserInformation);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  let email;
  let avatar;
  if (user !== null) {
    email = user.email;
    avatar = user.avatarUrl;
  }

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
              authorizationStatus === AuthorizationStatus.Auth ? <HeaderLogged email={email} avatar={avatar}/> : <HeaderNotLogged/>
            }
            />
          </Routes>
        </div>
      </div>
    </header>
  );
}

export default Header;

