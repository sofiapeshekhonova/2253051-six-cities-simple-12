import { memo } from 'react';

type StarsInputProps = {
  name: string;
  starId: number;
  value: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function StarsInput({ onChange, starId, name, value }: StarsInputProps): JSX.Element {

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        type="radio"
        onChange={onChange}
        value={starId}
        id={`${starId}-stars`}
        checked={starId === Number(value)}
      />
      <label
        htmlFor={`${starId}-stars`}
        className="reviews__rating-label form__rating-label"
        title={name}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default memo(StarsInput);
