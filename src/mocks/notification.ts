import { randomDate } from "./utils";

export type Notification = {
  notificationId: number;
  userId: string;
  createdDate: string;
  text: string;
  isActive: boolean;
}

export const generateNotification = ( number: number): Notification => {
  const notification = {
    notificationId: number,
    userId: `user${number}@pochta.local`,
    createdDate: randomDate(new Date(2023, 1, 1), new Date()),
    text: `Пользователь ${number} добавил вас в друзья`,
    isActive: true
  }
  return notification;
}

export function createNotifications (count: number) {
  const arr = [0];
  for (let i = 1; i <= count; i++) {
	arr.push(i);
  }
  return arr.map((id) => generateNotification(id));
} 

export const notifications = createNotifications(5);