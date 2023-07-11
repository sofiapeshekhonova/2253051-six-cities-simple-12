type СityProps = {
  item: string;
}

function Goods({ item }: СityProps): JSX.Element {

  return (
    <li className="property__inside-item">
      {item}
    </li>
  );
}

export default Goods;
