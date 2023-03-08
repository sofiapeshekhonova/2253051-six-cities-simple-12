import {Link} from 'react-router-dom';

type cityProps = {
  city: string;
}

function Cities({city}: cityProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link to={'/'} className="locations__item-link tabs__item">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default Cities;
