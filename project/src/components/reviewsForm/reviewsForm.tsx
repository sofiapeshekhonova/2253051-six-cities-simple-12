import { useState, FormEvent, ChangeEvent } from 'react';
import { STARS } from '../../constants';
import StarsInput from '../../components/starsInput/starsInput';

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });
  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }
  const { rating, review } = formData;

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
  }

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star, index) => (
          <StarsInput key={star} index={index} star={star} handleChange={handleChange} rating={rating} />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
