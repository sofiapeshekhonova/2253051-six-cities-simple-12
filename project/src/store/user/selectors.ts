import { State } from 'types/state';
import { UserData } from 'types/user-data';
import { AuthorizationStatus, Namespace } from '../../constants';


export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[Namespace.User].authorizationStatus;

export const getUserInformation = (state: State): UserData | null => state[Namespace.User].userInformation;

export const getLoginStatus = (state: State): string => (
  state[Namespace.User].status
);
