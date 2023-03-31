type StarsInputProps = {
  name: string;
  starId: number;
  value: number;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({ handleChange, starId, name, value }: StarsInputProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        type="radio"
        onChange={handleChange}
        value={starId}
        id={`${starId}-stars`}
      />
      <label
        htmlFor={`${starId}-stars`}
        className="reviews__rating-label form__rating-label"
        title={name}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default StarsInput;
