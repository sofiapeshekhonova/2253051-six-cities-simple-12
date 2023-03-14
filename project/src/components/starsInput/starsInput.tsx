type StarsInputProps = {
  star: string;
  index: number;
  rating: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({ star, index, handleChange, rating }: StarsInputProps): JSX.Element {
  const starId = 5 - index;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${starId}-stars`}
        type="radio"
        onChange={handleChange}
        value={rating}
      />
      <label
        htmlFor={`${starId}-stars`}
        className="reviews__rating-label form__rating-label"
        title={star}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default StarsInput;
