import {store} from '../store/index.js';
import {AuthorizationStatus} from '../constant';
import { User } from './user-data.js';
import { Notification } from './reaction.js';

export type ReactionProcess = {
  notifications: Notification[];
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authorizationError: boolean;
  users: User[];
  user: User;
  usersCount: number;
  isUsersDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
