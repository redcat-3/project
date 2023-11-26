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
