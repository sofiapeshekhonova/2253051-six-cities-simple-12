import { ReviewsType } from 'types/reviews';
import ReviewsForm from 'components/reviewsForm/reviewsForm';

type Props = {
  review: ReviewsType;
  reviews: ReviewsType[];
}

function Reviews({ review, reviews }: Props): JSX.Element {
  const { user } = review;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
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
            <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
          </div>
        </li>
      </ul>
      {/* если пользователь зарегестрированн */}
      <ReviewsForm />
    </section>
  );
}

export default Reviews;
