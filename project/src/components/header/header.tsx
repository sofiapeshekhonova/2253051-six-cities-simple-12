import { useAppSelector } from 'hooks';
import { Link} from 'react-router-dom';
import HeaderLogged from './headerLoged';
import HeaderNotLogged from './headerNotLoged';
import { getAuthorizationStatus, getUserInformation } from 'store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { memo } from 'react';

type Props = {
navigation: boolean;
}

function Header({navigation}: Props): JSX.Element {
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
          {navigation && (authorizationStatus === AuthorizationStatus.Auth ? <HeaderLogged email={user?.email} avatar={user?.avatarUrl} /> : <HeaderNotLogged />)}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);

