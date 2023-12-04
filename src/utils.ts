import dayjs from "dayjs";
import { UserGender, UserLevel, UserLocation } from "./types/user-data";
import { WorkoutType } from "./types/workout-data";
import { NOTIFICATION_DATE_FORMAT } from "./constant";

export function workoutTypeToValue (type: string): string {
  switch (type) {
    case 'yoga':
    default:
      return 'йога';
    case 'running':
      return 'бег';
    case 'boxing':
      return 'бокс';
    case 'stretching':
      return 'стрейчинг';
    case 'crossfit':
      return 'кроссфит';
    case 'aerobics':
      return 'аэробика';
    case 'pilates':
      return 'пилатес';
  }
}

export function workoutTypeToName (type: string): string {
  switch (type) {
    case 'yoga':
    default:
      return 'Йога';
    case 'running':
      return 'Бег';
    case 'boxing':
      return 'Бокс';
    case 'stretching':
      return 'Стрейчинг';
    case 'crossfit':
      return 'Кроссфит';
    case 'aerobics':
      return 'Аэробика';
    case 'pilates':
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
      return 'Новичок';
    case UserLevel.Ethusiast:
      return 'Любитель';
    case UserLevel.Pro:
      return 'Профессионал';
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

export function genderToRussian (gender: string): string {
  switch (gender) {
    case UserGender.Female:
      return 'Женский';
    case UserGender.Male:
      return 'Мужской';
    case UserGender.Indifferent:
      return 'Не важно';
    default:
      return '';
  }
}

export function locationToEnum (location: string): UserLocation {
  switch (location) {
    case 'Пионерская':
      return UserLocation.Pion;
    case 'Петроградская':
    default:
      return UserLocation.Petr;
    case 'Удельная':
      return UserLocation.Udel;
    case 'Звёздная':
      return UserLocation.Star;
    case 'Спортивная':
      return UserLocation.Sport;
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