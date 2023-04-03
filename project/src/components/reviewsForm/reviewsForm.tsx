import { useState, FormEvent, ChangeEvent } from 'react';
import { STARS } from '../../constants';
import StarsInput from 'components/starsInput/starsInput';
import { postRoomCommentsAction } from 'store/api-actions';
import { useAppDispatch } from 'hooks';

type Props = {
  cardId: number;
}

function ReviewsForm({cardId}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    cardId
  });

  function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(postRoomCommentsAction(formData));
    formData.comment = '';
    // рейтинг не стирается
    formData.rating = 0;
  }
  console.log('revForm')
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STARS.map((star) => (
          <StarsInput key={star.id} name={star.name} starId={star.id} value={formData.rating} handleChange={handleChange} />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={(formData.comment === '' || formData.rating === 0)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
