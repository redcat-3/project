import {store} from '../store/index.js';
import {AuthorizationStatus} from '../constant';
import { User } from './user-data.js';
import { Feedback, Notification, Order, OrderToCoach } from './reaction.js';
import { Workout } from './workout-data.js';

export type ReactionProcess = {
  notifications: Notification[];
  orders: Order[];
  ordersToCoach: OrderToCoach[];
  isOrdersDataLoading: boolean;
  ordersCount: number;
  ordersToCoachCount: number;
  feedbacks: Feedback[];
};

export type WorkoutProcess = {
  workout: Workout | null;
  workouts: Workout[];
  isWorkoutsDataLoading: boolean;
  workoutsCount: number;
  filteredWorkouts: Workout[];
}


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
