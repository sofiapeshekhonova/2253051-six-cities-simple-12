import { useAppSelector } from 'hooks';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { getOffersCity } from '../../store/app/selectors';
type СityProps = {
  city: string;
  handleChangeCity: (city: string) => void;
};

function CityNav({ city, handleChangeCity }: СityProps): JSX.Element {
  const activeCity = useAppSelector(getOffersCity);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    handleChangeCity(city);
  };

  return (
    <li className="locations__item" >
      <Link to={'/'} className={activeCity === city ? 'locations__item-link tabs__item tabs__item--active' : ' locations__item-link tabs__item'} onClick={handleClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityNav;
