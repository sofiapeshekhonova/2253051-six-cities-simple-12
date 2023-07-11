import { useAppDispatch } from 'hooks';
import { memo, useState } from 'react';
import { changeOffersSort } from 'store/app/app';
import { sortList } from '../../constants';

type SortScreenProps = {
  selectedSortItem: string;
};

function SortOptions({ selectedSortItem }: SortScreenProps) {

  const dispatch = useAppDispatch();
  const [isOpenSortList, setIsOpenSortList] = useState(false);

  const handelOpenSortList = () => {
    setIsOpenSortList(true);
  };

  const handelChooseSort = (item: string) => {
    dispatch(changeOffersSort(item));
    setIsOpenSortList(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handelOpenSortList}>
        {selectedSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpenSortList && (
        <ul className="places__options places__options--custom places__options--opened" >
          {sortList.map((item) => <li className='places__option' onClick={() => handelChooseSort(item)} tabIndex={0} key={item}>{item}</li>)}
        </ul>
      )}
    </form>
  );
}

export default memo(SortOptions);
