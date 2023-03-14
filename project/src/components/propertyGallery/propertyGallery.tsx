type Props = {
  image: string;
}

function PropertyGallery({ image }: Props): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        <div className="property__image-wrapper">
          <img className="property__image" src={image} alt="studio" />
        </div>
      </div>
    </div>
  );
}

export default PropertyGallery;
