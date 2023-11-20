export enum AppRoute {
  SighIn = '/login',
  Main = '/',
  Intro = '/intro',
  CreateTraining ='/create-training',
  FriendsList = '/friends-list',
  MyOrders = 'my-orders',
  MyPurchases = 'my-purchases',
  MyTrainings = 'my-trainings',
  PersonalAccountCoach = 'personal-account-coach',
  PersonalAccountUser = 'personal-account-user',
  QuestionnaireCoach = 'questionnaire-coach',
  QuestionnaireUser = 'questionnaire-user',
  SignUp = 'sign-up',
  TrainingCardCoach = 'training-card-coach',
  TrainingCardUser = 'training-card-user',
  TrainingCatalog = 'training-catalog',
  TrainingDiary = 'training-diary',
  UserCardCoach = 'user-card-coach',
  UserCardUser = 'user-card-user',
  UsersCatalog = 'users-catalog',
  Error404 = '/error404'
}

export enum APIRoute {
  Comments = '/comments',
  Workouts = '/workouts',
  Login = '/login',
}

export const TabIndex = {
  index0: 0,
  indexMinus1: -1
}

export const BACKEND_URL = 'http://localhost:4000';
export const REQUEST_TIMEOUT = 5000;