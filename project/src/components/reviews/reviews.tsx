import { ReviewsType } from '../../types/reviews';
import ReviewsForm from 'components/reviewsForm/reviewsForm';
import ReviewItem from 'components/reviewItem/reviewItem';
import { useAppSelector } from 'hooks';

type Props = {
  reviews: ReviewsType[];
  cardId: number;
}

function Reviews({ reviews, cardId }: Props): JSX.Element {
  const user = useAppSelector((state) => state.userInformation);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
      </ul>
      {user ? <ReviewsForm cardId={cardId}/> : ''}
    </section>
  );
}

export default Reviews;
