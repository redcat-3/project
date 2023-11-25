import dayjs from "dayjs";
import { UserGender, UserLevel } from "./types/user-data";
import { WorkoutType } from "./types/workout-data";
import { NOTIFICATION_DATE_FORMAT } from "./constant";

export function workoutTypeToValue (type: string): string {
  switch (type) {
    case 'йога':
    default:
      return 'yoga';
    case 'бег':
      return 'running';
    case 'бокс':
      return 'boxing';
    case 'стрейчинг':
      return 'stretching';
    case 'кроссфит':
      return 'crossfit';
    case 'аэробика':
      return 'aerobics';
    case 'пилатес':
      return 'pilates';
  }
}

export function workoutTypeToName (type: string): string {
  switch (type) {
    case 'йога':
    default:
      return 'Йога';
    case 'бег':
      return 'Бег';
    case 'бокс':
      return 'Бокс';
    case 'стрейчинг':
      return 'Стрейчинг';
    case 'кроссфит':
      return 'Кроссфит';
    case 'аэробика':
      return 'Аэробика';
    case 'пилатес':
      return 'Пилатес';
  }
}

export function levelToValue (level: string): UserLevel {
  switch (level) {
    case 'новичок':
    default:
      return UserLevel.Beginner;
    case 'любитель':
      return UserLevel.Ethusiast;
    case 'профессионал':
      return UserLevel.Pro;
  }
}

export function levelToRussian (level: UserLevel): string {
  switch (level) {
    case UserLevel.Beginner:
      return 'новичок';
    case UserLevel.Ethusiast:
      return 'любитель';
    case UserLevel.Pro:
      return 'профессионал';
    default:
      return '';
  }
}

export function typeToRussian (type: WorkoutType): string {
  switch (type) {
    case WorkoutType.Yoga:
      return 'йога';
    case WorkoutType.Aerobics:
      return 'аэробика';
    case WorkoutType.Boxing:
      return 'бокс';
    case WorkoutType.Crossfit:
      return 'кроссфит';
    case WorkoutType.Pilates:
      return 'пилатес';
    case WorkoutType.Running:
      return 'бег';
    case WorkoutType.Stretching:
      return 'стрейчинг';
    default:
      return '';
  }
}

export function createNotificationMessage (name: string, gender: string): string {
  if(gender === UserGender.Female) {
    return `${name} пригласила вас на&nbsp;тренировку`;
  } else {
    return `${name} пригласил вас на&nbsp;тренировку`;
  }
}

export function getNotificationDate(date: string) {
  return date ? dayjs(date).format(NOTIFICATION_DATE_FORMAT) : '';
}