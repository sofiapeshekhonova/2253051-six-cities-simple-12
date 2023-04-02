import { Card } from 'types/offer';
import { State } from 'types/state';
import { NameSpace, Status } from '../../constants';

export const getOffers = (state: State): Card[] => state[NameSpace.Hotels].hotels;
export const getStatus = (state: State): Status=> state[NameSpace.Hotels].status;


// export const getOffersStatus = createSelector([getStatus], (status) => ({
//   isLoading: [FetchStatus.Idle, FetchStatus.Loading].includes(status),
//   isSuccess: status === FetchStatus.Success,
//   isError: status === FetchStatus.Failed,
// }));
