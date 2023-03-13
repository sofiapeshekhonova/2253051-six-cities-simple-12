type StarsInputProps = {
  star: string;
  index: number;
  reviewsRating: string;
  handleChange: ( evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({star, index, handleChange, reviewsRating}: StarsInputProps): JSX.Element {
  const starId = 5 - index;
  // const [rating, setRating] = useState('');

  // function handleRatingChange (event: ChangeEvent<HTMLInputElement>) {
  //   setRating(event.target.value);
  // }

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        id={`${ starId }-stars`}
        type="radio"
        onChange={handleChange}
        value={reviewsRating}
      />
      <label
        htmlFor={`${ starId }-stars`}
        className="reviews__rating-label form__rating-label"
        title={ star }
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default StarsInput;
