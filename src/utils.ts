import { UserLevel } from "./types/user-data";
import { WorkoutType } from "./types/workout-data";

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
    default:
      return 'новичок';
    case UserLevel.Ethusiast:
      return 'любитель';
    case UserLevel.Pro:
      return 'профессионал';
  }
}

export function typeToRussian (type: WorkoutType): string {
  switch (type) {
    case WorkoutType.Yoga:
    default:
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
  }
}