import { useState, FormEvent, ChangeEvent } from 'react';
import { STARS, Status } from '../../constants';
import StarsInput from 'components/starsInput/starsInput';
import { postRoomCommentsAction } from 'store/api-actions';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getPost } from 'store/currentOffer/selectors';

type Props = {
  cardId: number;
}

function ReviewsForm({ cardId }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const postStatus = useAppSelector(getPost);

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
    setFormData({
      rating: 0,
      comment: '',
      cardId
    });
  }

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
          To submit review please make sure to set <span className="reviews__star">rating</span>
          and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          {(formData.comment && formData.comment.length < 51) && <b> Сharacters left: {51 - formData.comment.length}</b>}
          {(formData.comment && formData.comment.length >= 300) && <b > Max 300 Сharacters</b>}
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={(formData.comment.length <= 50 ||
            formData.rating === 0 || formData.comment.length >= 300
            || postStatus === Status.Loading || postStatus === Status.Failed
          )}
        >
          {postStatus === Status.Loading ? 'Loading' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
