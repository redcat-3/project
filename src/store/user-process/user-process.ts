import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, DEFAULT_LIMIT } from '../../constant';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { createNextUsers, users } from '../../mocks/users';

const COUNT_OF_USERS = 20;

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: false,
  users: users,
  usersCount: COUNT_OF_USERS,
  isUsersDataLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    usersInc: (state, action: PayloadAction<number>) => {
      const renderedUsersCount = Math.min(state.usersCount - state.users.length, action.payload);
      state.users = state.users.concat(createNextUsers(renderedUsersCount));
    },
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
export const { usersInc } = userProcess.actions;
