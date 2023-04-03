import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState} from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loginAction } from 'store/api-actions';
import { AuthData } from 'types/auth-data';
import './form__text-error.css';
import { AppRoute, AuthorizationStatus } from '../../constants';
import Layout from 'components/layout/layout';
import { getAuthorizationStatus } from 'store/user-process/selectors';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit({
      login: formValue.email,
      password: formValue.password,
    });
    navigate(AppRoute.Root);
  }


  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

  return (
    <Layout className="page page--gray page--login" title="Login" navigation={false}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit} noValidate>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={formValue.email || ''}
                  onChange={handleChange}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  autoComplete="off"
                  id="email"
                  placeholder="Email"
                  minLength={2}
                  required
                />
                <span className={'form__text-error_active'}>{errors.email}</span>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={formValue.password || ''}
                  onChange={handleChange}
                  className="login__input form__input"
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  minLength={2}
                  required
                />
                <span className={'form__text-error_active'}>{errors.password}</span>
              </div>
              <button
                disabled={!(errors.email === '' && errors.password === '')}
                className="login__submit form__submit button"
                type="submit"
              > Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={'/'} className="locations__item-link" >
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Login;
