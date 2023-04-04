//import Layout from 'components/layout/layout';

type Props = {
  city: string;
}

function MainEmpty({ city }: Props): JSX.Element {

  return (
    // <Layout className="page__main page__main--index page__main--index-empty" title="Main" navigation>
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
        </div>
      </section>
    </div>
    // </Layout>
  );
}

export default MainEmpty;
