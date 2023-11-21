import {store} from '../store/index.js';
import {AuthorizationStatus} from '../constant';


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authorizationError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
