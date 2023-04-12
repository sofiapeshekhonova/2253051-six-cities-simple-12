import { Link, Navigate, generatePath} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import './form__text-error.css';
import Layout from 'components/layout/layout';
import LoginForm from 'components/login-form/login-form';
import { getAuthorizationStatus } from 'store/user/selectors';
import { changeCity } from 'store/app/app';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  const rand = Math.floor(Math.random() * CITIES.length);
  const randomCity = CITIES[rand];

  function handleChangeCity() {
    dispatch(changeCity(randomCity));
  }

  return (
    <Layout className="page page--gray page--login" title="Login" isLoggedIn={false}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={generatePath(AppRoute.Root)} className="locations__item-link" onClick={handleChangeCity}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
