export const BACKEND_URL = 'http://localhost:4000';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  SignIn = '/login',
  Logout = '/logout',
  Main = '/',
  Intro = '/intro',
  CreateTraining ='/create-training',
  FriendsList = '/friends-list',
  MyOrders = '/my-orders',
  MyPurchases = '/my-purchases',
  MyTrainings = '/my-trainings',
  PersonalAccountCoach = '/personal-account-coach',
  PersonalAccountUser = '/personal-account-user',
  QuestionnaireCoach = '/questionnaire-coach',
  QuestionnaireUser = '/questionnaire-user',
  SignUp = '/registr',
  TrainingCardCoach = '/training-card-coach',
  TrainingCardUser = '/training-card-user',
  TrainingCatalog = '/training-catalog',
  TrainingDiary = '/training-diary',
  UserCardCoach = '/user-card-coach',
  UserCardUser = '/user-card-user',
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