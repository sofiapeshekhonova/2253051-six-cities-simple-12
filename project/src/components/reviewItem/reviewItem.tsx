import { ReviewsType } from 'types/reviews';

type Props = {
  review: ReviewsType;
}

function ReviewItem({ review }: Props): JSX.Element {
  const { user } = review;
  const date = new Date(review.date);
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${Math.round(review.rating / 5 * 100)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{`${month} ${year}`}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
