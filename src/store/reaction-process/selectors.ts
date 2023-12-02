import { Notification, Order, OrderToCoach } from '../../types/reaction';
import { State } from '../../types/state';
import { NameSpace } from '../../constant';

export const getNotifications = (state: State): Notification[] => state[NameSpace.Reaction].notifications;
export const getOrdersToCoach = (state: State): OrderToCoach[] => state[NameSpace.Reaction].ordersToCoach;
export const getOrders = (state: State): Order[] => state[NameSpace.Reaction].orders;
export const getOrdersDataLoadingStatus = (state: State): boolean => state[NameSpace.Reaction].isOrdersDataLoading;
export const getOrdersCount = (state: State): number => state[NameSpace.Reaction].ordersCount;
export const getOrdersToCoachCount = (state: State): number => state[NameSpace.Reaction].ordersToCoachCount;