import { Link} from 'react-router-dom';
import { ChangeEvent, FormEvent, useState} from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loginAction } from 'store/api-actions';
import { AuthData } from 'types/auth-data';
import './form__text-error.css';
import { Status } from '../../constants';
import Layout from 'components/layout/layout';
import { getLoginStatus } from 'store/user-process/selectors';

type Props = {
  value: string;
  error: string;
  regex: RegExp;
  isValid: boolean;
  hasValue: boolean;
}

type FormProps = {
  [key: string]: Props;
}

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(getLoginStatus);

  const [formValue, setFormValue] = useState<FormProps>({
    email: {
      value: '',
      error: 'Please enter a real email address',
      regex: /[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/,
      isValid: false,
      hasValue: false,
    },
    password: {
      value: '',
      error: 'At least one letter and number',
      regex: /\d+[a-zA-Z]+|[a-zA-Z]+\d+/,
      isValid: false,
      hasValue: false,
    }
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    const isValid = formValue[name].regex.test(value);
    const hasValue = !!value.trim();

    setFormValue({
      ...formValue,
      [name]: {...formValue[name], value, isValid, hasValue},
    });
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit({
      login: formValue.email.value,
      password: formValue.password.value,
    });
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
                  value={formValue.email.value || ''}
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
                <span className={!formValue.email.isValid && formValue.email.hasValue ? 'form__text-error_active' : 'form__text-error'}>
                  {formValue.email.error}
                </span>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={formValue.password.value || ''}
                  onChange={handleChange}
                  className="login__input form__input"
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  minLength={2}
                  pattern="^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)[^\s].+"
                  required
                />
                <span className={!formValue.password.isValid && formValue.password.hasValue ? 'form__text-error_active' : 'form__text-error'}>
                  {formValue.password.error}
                </span>
              </div>
              <button
                disabled={!(formValue.email.isValid && formValue.password.isValid) || loginStatus === Status.Loading || loginStatus === Status.Failed}
                className="login__submit form__submit button"
                type="submit"
              > {loginStatus === Status.Loading ? 'Loading..' : 'Sign in'}
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
