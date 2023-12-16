import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, DEFAULT_LIMIT } from '../../constant';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { coach, createNextUsers, user, users } from '../../mocks/users';
import { UserTime } from '../../types/user-data';

const COUNT_OF_USERS = 20;

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: false,
  users,
  user: {...user, merit: '', certificate: ['']},
  //{...coach, timeOfTrain: '' as UserTime, caloriesToReset: 0, caloriesToSpend: 0},
  usersCount: COUNT_OF_USERS,
  isUsersDataLoading: false,
  friendsList: [],
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    usersInc: (state, action: PayloadAction<number>) => {
      const usersCount = Math.min(state.usersCount - state.users.length, action.payload);
      state.users = state.users.concat(createNextUsers(usersCount));
    },
    addFriend: (state, action: PayloadAction<string>) => {
      state.friendsList.push(action.payload);
    },
    removeFriend: (state, action: PayloadAction<string>) => {
      const friendsNew = state.friendsList;
      if(action.payload) {
        const index = friendsNew.findIndex(item => item === action.payload);
        if (index !== -1) {
          friendsNew.splice(index, 1);
        }
      }
      state.friendsList = friendsNew;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authorizationError = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authorizationError = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
export const { usersInc, addFriend, removeFriend } = userProcess.actions;
