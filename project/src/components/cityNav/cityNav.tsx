import { Link } from 'react-router-dom';
// import { MouseEventHandler } from "react";

type cityProps = {
  city: string;
  handelChangeCity: (city: string) => void;
};

function CityNav({ city, handelChangeCity }: cityProps): JSX.Element {

  // function handelClick(evt: MouseEventHandler) {
  //   evt.preventDefault();
  //   handelChangeCity(city);
  // }
  return (
    <li className="locations__item" >
      <Link to={'/'} className="locations__item-link tabs__item"
        onClick={(evt) => {
          evt.preventDefault();
          handelChangeCity(city);
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityNav;
