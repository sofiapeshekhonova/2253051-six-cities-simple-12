import { useAppSelector } from 'hooks';
import { Link } from 'react-router-dom';
import HeaderLogged from './header-loged';
import HeaderNotLogged from './header-not-loged';
import { getAuthorizationStatus, getUserInformation } from 'store/user/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { memo } from 'react';

type Props = {
  isLoggedIn: boolean;
}

function Header({ isLoggedIn }: Props): JSX.Element {
  const user = useAppSelector(getUserInformation);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isLoggedIn && (authorizationStatus === AuthorizationStatus.Auth ? <HeaderLogged email={user?.email} avatar={user?.avatarUrl} /> : <HeaderNotLogged />)}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);

