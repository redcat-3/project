import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../constant';
import { UserProcess } from '../../types/state';
import { checkAuthAction, fetchFriendsAction, fetchUserAction, fetchUsersAction, loginAction, registerAction } from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: false,
  user: null,
  isUserDataLoading: false,
  users: [],
  usersCount: 0,
  isUsersDataLoading: false,
  friendsList: [],
  isFriendsDataLoading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
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
      .addCase(registerAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authorizationError = false;
      })
      .addCase(fetchUserAction.pending, (state) => {
        state.isUserDataLoading = true;
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isUserDataLoading = false;
      })
      .addCase(fetchUserAction.rejected, (state) => {
        state.isUserDataLoading = false;
      })
      .addCase(fetchUsersAction.pending, (state) => {
        state.isUsersDataLoading = true;
      })
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.users = action.payload.usersList;
        state.usersCount = action.payload.count;
        state.isUsersDataLoading = false;
      })
      .addCase(fetchUsersAction.rejected, (state) => {
        state.isUsersDataLoading = false;
      })
      .addCase(fetchFriendsAction.pending, (state) => {
        state.isFriendsDataLoading = true;
      })
      .addCase(fetchFriendsAction.fulfilled, (state, action) => {
        state.friendsList = action.payload;
        state.isFriendsDataLoading = false;
      })
      .addCase(fetchFriendsAction.rejected, (state) => {
        state.isFriendsDataLoading = false;
      });
  }
});
export const {} = userProcess.actions;
