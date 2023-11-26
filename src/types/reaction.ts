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
}
