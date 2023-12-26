import {store} from '../store/index.js';
import {AuthorizationStatus} from '../constant';
import { User } from './user-data.js';
import { Feedback, INotification, Order, OrderToCoach, IRequest, IFeedback, Balance } from './reaction.js';
import { Workout } from './workout-data.js';

export type ReactionProcess = {
  notifications: INotification[];
  orders: Order[];
  ordersToCoach: OrderToCoach[];
  isOrdersDataLoading: boolean;
  ordersCount: number;
  ordersToCoachCount: number;
  summaryPrice: number;
  feedbacks: IFeedback[];
  requests: IRequest[];
  balances: Balance[];
};

export type WorkoutProcess = {
  workout: Workout | null;
  isWorkoutDataLoading: boolean;
  workouts: Workout[];
  isWorkoutsDataLoading: boolean;
  workoutsCount: number;
}


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  authorizationError: boolean;
  users: User[];
  isUserDataLoading: boolean;
  user: User | null;
  usersCount: number;
  isUsersDataLoading: boolean;
  friendsList: User [];
  isFriendsDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
