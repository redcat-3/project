import { UserGender, UserLevel, UserTime } from "./user-data";

export enum WorkoutType {
    Yoga = 'yoga',
    Running = 'running',
    Boxing = 'boxing',
    Stretching = 'stretching',
    Crossfit = 'crossfit',
    Aerobics = 'aerobics',
    Pilates = 'pilates',
}

export type Workout = {
  workoutId: number;
  name: string;
  background: string;
  level: UserLevel;
  type: WorkoutType;
  timeOfTraining: UserTime;
  price: number;
  caloriesToSpend: number;
  description: string;
  gender: UserGender;
  video: string;
  special: boolean;
  rating: number;
};

export const WORKOUT_TYPES = [
  'йога',
  'бег',
  'бокс',
  'стрейчинг',
  'кроссфит',
  'аэробика',
  'пилатес',
] as const;

export const WORKOUT_TIMES = [
  '10-30',
  '30-50',
  '50-80',
  '80-100',
] as const;