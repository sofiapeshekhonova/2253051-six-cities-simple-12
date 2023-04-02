import { State } from 'types/state';
import { UserData } from 'types/user-data';
import { AuthorizationStatus, NameSpace } from '../../constants';


export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;

export const checkAuthorizationStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserInformation = (state: State): UserData | null => state[NameSpace.User].userInformation;
