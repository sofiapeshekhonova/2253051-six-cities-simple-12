import { useAppDispatch } from 'hooks';
import { MouseEvent } from 'react';
import { logoutAction } from 'store/api-actions';
import './header__nav_button.css';
type Props = {
  email: string | undefined;
  avatar: string | undefined;
}

function HeaderLogged({ email, avatar }: Props): JSX.Element {

  console.log('headerLog')
  const dispatch = useAppDispatch();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={avatar} alt="avatar"/>
            </div>
            <span className="header__user-name user__name">{email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <button className="header__nav-link header__nav_button" >
            <span className="header__signout" onClick={handleClick}>Sign out</span>
          </button >
        </li>
      </ul>
    </nav>

  );
}

export default HeaderLogged;
