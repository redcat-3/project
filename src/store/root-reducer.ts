import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace} from '../constant';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
});
