type cityProps = {
  city: string;
}

function Cities({city}: cityProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="city?">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Cities;
