import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { ReactionProcess } from '../../types/state';
import { notifications } from '../../mocks/notifications';
import { createNextOrders, createNextOrdersToCoach, orders, ordersToCoach1 } from '../../mocks/orders';
import { createFeedbacks } from '../../mocks/feedbacks';
import { Feedback, Notification, Request } from '../../types/reaction';

const COUNT_OF_ORDERS = 10;

const initialState: ReactionProcess = {
  notifications,
  orders,
  ordersToCoach: ordersToCoach1.sort((a,b) => b.countWorkout - a.countWorkout),
  isOrdersDataLoading: false,
  ordersCount: COUNT_OF_ORDERS,
  ordersToCoachCount: COUNT_OF_ORDERS,
  feedbacks: createFeedbacks(2, 1),
  requests: [],
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
    },
    addNotifications: (state, action: PayloadAction<Notification>) => {
      if(action.payload) {
        state.notifications.push(action.payload);
      }
    },
    addRequest: (state, action: PayloadAction<Request>) => {
      if(action.payload) {
        state.requests.push(action.payload);
      }
    },
    setFeedback: (state, action: PayloadAction<Feedback>) => {
      const feddbacksNew = state.feedbacks;
      if(action.payload) {
        feddbacksNew.push(action.payload);
      }
      state.feedbacks = feddbacksNew;
    },
    ordersInc: (state, action: PayloadAction<number>) => {
      const count = Math.min(state.ordersCount - state.orders.length, action.payload);
      state.orders = state.orders.concat(createNextOrders(count));
    },
    ordersToCoachInc: (state, action: PayloadAction<number>) => {
      const count = Math.min(state.ordersToCoachCount - state.ordersToCoach.length, action.payload);
      state.ordersToCoach = state.ordersToCoach.concat(createNextOrdersToCoach(count));
    },
    sortByPrice: (state, action: PayloadAction<boolean>) => {
      const ordersNew = state.ordersToCoach.slice();
      action.payload ? ordersNew.sort((a, b) => b.orderPrice - a.orderPrice) : ordersNew.sort((a, b) => a.orderPrice - b.orderPrice);
      state.ordersToCoach = ordersNew;
    },
    sortByCount: (state, action: PayloadAction<boolean>) => {
      const ordersNew = state.ordersToCoach.slice();
      action.payload ? ordersNew.sort((a, b) => b.countWorkout - a.countWorkout) : ordersNew.sort((a, b) => a.countWorkout - b.countWorkout);
      state.ordersToCoach = ordersNew;
    }
  },
  extraReducers(builder) {
    builder

  }
});
export const {
  setNotifications,
  ordersInc,
  ordersToCoachInc,
  sortByPrice,
  sortByCount,
  setFeedback,
  addNotifications,
  addRequest
} = reactionProcess.actions;
