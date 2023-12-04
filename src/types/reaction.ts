export enum RequestStatus {
  Consider = 'consider',
  Rejected = 'rejected',
  Accept = 'accept',
}

export type Request = {
  requestId?: number;
  requester: string;
  userId: string;
  createdDate: Date;
  updatedDate: Date;
  status: RequestStatus;
}

export type Notification = {
  notificationId: number;
  userId: string;
  createdDate: string;
  text: string;
  isActive: boolean;
};

export type Order = {
  orderId?: number;
  workoutId: number;
  userId: string;
  count: number;
  createdDate: Date;
}

export type OrderToCoach = {
  workoutId: number;
  orderPrice: number;
  countWorkout: number;
}

export type Feedback = {
  feedbackId?: number;
  workoutId: number;
  userId: string;
  avatar: string;
  name: string;
  rating: number;
  text: string;
  createdDate: Date;
}