import { ReviewsType } from '../../types/reviews';
import ReviewsForm from 'components/reviews-form/reviews-form';
import ReviewItem from 'components/review-item/review-item';
import { useAppSelector } from 'hooks';
import { getAuthorizationStatus } from 'store/user/selectors';
import { AuthorizationStatus } from '../../constants';

type Props = {
  reviews: ReviewsType[];
  roomId: number;
  roomCommentsLength: number;
}

function Reviews({ reviews, roomId, roomCommentsLength }: Props): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{roomCommentsLength}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm cardId={roomId}/> }
    </section>
  );
}

export default Reviews;
