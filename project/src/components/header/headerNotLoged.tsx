import { Link } from 'react-router-dom';

function HeaderNotLogged(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={'/login'} className="header__nav-link" >
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNotLogged;
