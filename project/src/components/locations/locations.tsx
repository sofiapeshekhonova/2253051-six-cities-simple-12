import CityNav from 'components/cityNav/cityNav';
import { useAppDispatch } from 'hooks';
import { memo } from 'react';
import { changeCity } from 'store/app/app-slice';
import { CITIES } from '../../constants';

function Locations(): JSX.Element {

  const dispatch = useAppDispatch();

  const handleChangeCity = (city: string) => {
    dispatch(changeCity(city));
  };

  console.log('locations')
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityNav) => <CityNav city={cityNav} key={cityNav} handleChangeCity={handleChangeCity} />)}
      </ul>
    </section>
  );
}

export default memo(Locations);
