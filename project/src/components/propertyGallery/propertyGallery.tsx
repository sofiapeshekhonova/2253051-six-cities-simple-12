type Props = {
  image: string;
};

function PropertyGallery({ image }: Props): JSX.Element {

  console.log('propertyGallery')
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="studio" />
    </div>
  );
}

export default PropertyGallery;
