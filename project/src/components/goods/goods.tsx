type cityProps = {
  item: string;
}

function Goods({ item }: cityProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
}

export default Goods;
