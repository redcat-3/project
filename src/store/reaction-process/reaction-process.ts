import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { ReactionProcess } from '../../types/state';
import { notifications } from '../../mocks/notifications';

const initialState: ReactionProcess = {
  notifications,
};

export const reactionProcess = createSlice({
  name: NameSpace.Reaction,
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<number>) => {
      const notificationsNew = state.notifications;
      if(action.payload) {
        const index = notificationsNew.findIndex(item => item.notificationId === action.payload);
        if (index !== -1) {
          notificationsNew.splice(index, 1);
        }
      }
      state.notifications = notificationsNew;
    }
  },
  extraReducers(builder) {
    builder

  }
});
export const { setNotifications } = reactionProcess.actions;
