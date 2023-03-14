import { Card } from 'types/offer';

type Props = {
  card: Card;
}

function Host({ card }: Props): JSX.Element {
  const { host } = card;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {host.name}
        </span>
        <span className="property__user-status">
          {!host.isPro ? '' : 'Pro'}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {card.description}
        </p>
        <p className="property__text">
          An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
        </p>
      </div>
    </div>
  );
}

export default Host;
