export const BACKEND_URL = 'http://localhost:4000';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_LIMIT = 6;

export enum AppRoute {
  SignIn = '/login',
  Logout = '/logout',
  Main = '/',
  Intro = '/intro',
  CreateTraining ='/create-training/:id',
  FriendsList = '/friends-list/:id',
  MyOrders = '/my-orders/:id',
  MyPurchases = '/my-purchases/:id',
  MyTrainings = '/my-trainings/:id',
  PersonalAccountCoach = '/personal-account-coach/:id',
  PersonalAccountUser = '/personal-account-user/:id',
  QuestionnaireCoach = '/questionnaire-coach',
  QuestionnaireUser = '/questionnaire-user',
  SignUp = '/registr',
  TrainingCardCoach = '/training-card-coach/:id',
  TrainingCardUser = '/training-card-user/:id',
  TrainingCatalog = '/training-catalog',
  TrainingDiary = '/training-diary/:id',
  UserCardCoach = '/user-card-coach/:id',
  UserCardUser = '/user-card-user/:id',
  UsersCatalog = '/users-catalog',
  Error404 = '/error404'
}

export enum APIRoute {
  Feedbacks = '/feedback',
  Workouts = '/workouts',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Workout = 'workout',
  Workouts = 'workouts',
  User = 'user',
  Orders = 'orders',
  Notifications = 'notifications',
  Requests = 'requests',
  Feedback = 'feedback',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TabIndex = {
  index0: 0,
  indexMinus1: -1
};

export const UserNameLength = {
  Min: 1,
  Max: 15,
};

export const UserPasswordLength = {
  Min: 6,
  Max: 12,
};

export const UserDescriptionLength = {
  Min: 10,
  Max: 140,
};

export const CoachMeritLength = {
  Min: 10,
  Max: 140,
};

export const CountCaloriesToReset = {
  Min: 1000,
  Max: 5000,
};

export const CountCaloriesToSpend = {
  Min: 1000,
  Max: 5000,
};

export const WorkoutDescriptionLength = {
  Min: 10,
  Max: 140,
};

export const NameLength = {
  Min: 1,
  Max: 15,
};
