import { Notification } from '../../types/reaction';
import { State } from '../../types/state';
import { NameSpace } from '../../constant';

export const getNotifications = (state: State): Notification[] => state[NameSpace.Reaction].notifications;