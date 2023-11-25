export const BACKEND_URL = 'http://localhost:4000';
export const REQUEST_TIMEOUT = 5000;
export const DEFAULT_LIMIT = 6;
export const EMAIL_REGEXP = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
export const MAX_AVATAR_SIZE = 2200000;
export const MAX_TYPES_COUNT = 3;
export const NOTIFICATION_DATE_FORMAT = 'DD MMMM, HH:mm';

export enum AppRoute {
  SignIn = '/login',
  Logout = '/logout',
  Main = '/main/',
  Intro = '/',
  CreateTraining ='/create-training',
  FriendsList = '/friends-list/:id',
  MyOrders = '/my-orders/:id',
  MyPurchases = '/my-purchases/:id',
  MyTrainings = '/my-trainings/:id',
  PersonalAccount = '/personal-account/:id',
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

export const ErrorMessage = {
  Name: `Mинимальная длина ${UserNameLength.Min} символ, максимальная длина ${UserNameLength.Max} символов`,
  Title: `Mинимальная длина ${NameLength.Min} символ, максимальная длина ${NameLength.Max} символов`,
  File: 'Максимальный размер изображения 1 мегабайт',
  Email: 'Неверный формат электронной почты',
  Password: `Mинимальная длина ${UserPasswordLength.Min} символов, максимальная длина ${UserPasswordLength.Max} символов`,
  Description: `Mинимальная длина ${WorkoutDescriptionLength.Min} символов, максимальная длина ${WorkoutDescriptionLength.Max} символов`,
  Price: 'Цена должна быть больше или равна 0',
  Form: 'Необходимо заполнить все поля',
  TypesCount: `Одновременно может быть выбрано не больше ${MAX_TYPES_COUNT} типов тренировок`,
  CaloriesToReset: `Минимальное значение ${CountCaloriesToReset.Min}, максимально значение ${CountCaloriesToReset.Max}, только целые числа.`,
  CaloriesToSpend: `Минимальное значение ${CountCaloriesToSpend.Min}, максимально значение ${CountCaloriesToSpend.Max}, только целые числа.`
} as const
