import { UserLevel } from "./user-data";

export type TrainigQuery = {
  priceMin: number;
  priceMax: number;
  caloriesMin: number;
  caloriesMax: number;
  ratingMin: number;
  ratingMax: number;
  times: string[];
}

export type UserQuery = {
  limit?: number;
  page?: number;
  location?: string;
  typeOfTrain?: string;
  level?: UserLevel;
  sortDirection: 'asc' | 'desc';
}

export type WorkoutQueryDto = {
  limit: number;
  page: Number;
  sortBy: 'createdDate' | 'price';
  caloriesToSpend?: string;
  price?: string;
  type?: string;
  rating?: string;
  timeOfTraining?: string;
  sortDirection: 'asc' | 'desc';
}

export type OrderQueryDto = {
  limit: number;
  page: number;
  sortDirection: 'asc' | 'desc';
  sortBy: 'orderPrice' | 'count';
}

export type FeedbackQueryDto = {
  limit?: number;
  page?: number;
}