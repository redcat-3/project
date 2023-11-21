export enum UserGender {
  Male = 'male',
  Female = 'female',
  Indifferent = 'indifferent',
};

export enum UserRole {
  User = 'user',
  Coach = 'coach',
};

export enum UserLocation {
  Pion = 'Пионерская',
  Petr = 'Петроградская',
  Udel = 'Удельная',
  Star = 'Звёздная',
  Sport = 'Спортивная',
};

export enum UserLevel {
  Beginner = 'beginner',
  Ethusiast = 'ethusiast',
  Pro = 'pro'
};

export enum UserTime {
  One = '10-30',
  Two = '30-50',
  Three = '50-80',
  Four = '80-100',
}

export type LoggedUser = {
  email: string;
  accessToken: string;
};

export type User = UserUser | UserCoach;

export type UserUser = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt: string;
  gender: UserGender;
  dateBirth: string;
  role: UserRole;
  description: string;
  location: UserLocation;
  image?: string;
  level: UserLevel;
  typeOfTrain: string[];
  timeOfTrain?: UserTime;
  caloriesToReset: number;
  caloriesToSpend: number;
  trainingReady: boolean;
};

export type UserCoach = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  createdAt: string;
  gender: UserGender;
  dateBirth: string;
  role: UserRole;
  description: string;
  location: UserLocation;
  image?: string;
  level: UserLevel;
  typeOfTrain: string[];
  certificate: string;
  merit: string;
  personalTraining: boolean;
};

export const UserLevels = [
  'новичок',
  'любитель',
  'профессионал'
] as const;