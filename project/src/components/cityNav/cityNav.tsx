import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type cityProps = {
  city: string;
  handelChangeCity: (city: string) => void;
};

function CityNav({ city, handelChangeCity }: cityProps): JSX.Element {

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    handelChangeCity(city);
  };

  return (
    <li className="locations__item" >
      <Link to={'/'} className="locations__item-link tabs__item" onClick={handleClick}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityNav;
