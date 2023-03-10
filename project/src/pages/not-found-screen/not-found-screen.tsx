import { Link } from 'react-router-dom';
import styles from './not-found-screen.module.css';
import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Six Cities. Rooms</title>
      </Helmet>
      <section className={styles.notFounPage}>
        <h1 className={styles.notFoundPage__title}>Page not found</h1>
        <button className={styles.notFoundPage__button}>
          <Link to={'/'}>Перейти на главную страницу</Link>
        </button>
      </section>
    </>
  );
}

export default NotFoundScreen;
