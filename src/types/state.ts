import {store} from '../store/index.js';
import {AuthorizationStatus} from '../constant';
import { User } from './user-data.js';


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authorizationError: boolean;
  users: User[];
  usersCount: number;
  isUsersDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
