import {getRandomArrayElement, getRandomNumber, getRandomArray, getSubArrayFromArray, getRandomBoolean} from './utils.js';

const NAMES = [
  'Angelina',
  'Angel',
  'Dina',
  'Tom',
  'Dima',
];

const AVATARS = [
    'C:/img/content/avatars/users/photo-1.png',
    'C:/img/content/avatars/users/photo-2.png',
    'C:/img/content/avatars/users/photo-3.png',
    'C:/img/content/avatars/users/photo-4.png',
    'C:/img/content/avatars/users/photo-5.png',
];

const GENDERS = [
    'male',
    'female',
    'indifferent',
];

const ROLES = [
    'user',
    'coach'
];

const DESCRIPTIONS = [
    'Страшный рассказ о драконе. Колдовство, предательство и необыкновенный мир фэнтези.',
    'История про вампиров из маленького городка. Коварство, нестандартный сюжет и необыкновенные приключения священника.',
    'Идти или остановиться? Вопрос без правильного ответа. Рассказ о долгой и смертельной прогулке.',
    'Как похудеть и не сойти с ума? А как вернуть вес обратно? Необычная история противостояния.',
    'Прими звонок и превратись в зомби. Рассказ о зомбировании через средства связи.'
];

const LOCATIONS = [
    'Пионерская',
    'Петроградская',
    'Удельная',
    'Звёздная',
    'Спортивная'
];

const LEVELS = [
    'новичок',
    'любитель',
    'профессионал'
];

const  TYPES_OF_TRAIN = [
    'йога', 
    'бег', 
    'бокс', 
    'стрейчинг', 
    'кроссфит', 
    'аэробика', 
    'пилатес'
];

const TIMES_OF_TRAIN = [
    '10-30',
    '30-50',
    '50-80',
    '80-100',
];

const createWorkout = (id: number) => {
  const workout = {
    workoutId: id,
    name: getRandomArrayElement(NAMES),
    background: 'image.jpg',
    level: getRandomArrayElement(LEVELS),
    type: getRandomArrayElement(TYPES_OF_TRAIN),
    timeOfTraining: getRandomArrayElement(TIMES_OF_TRAIN),
    price: getRandomNumber(0, 1000),
    caloriesToSpend: getRandomNumber(1000, 5000),
    description: getRandomArrayElement(DESCRIPTIONS),
    gender: getRandomArrayElement(GENDERS),
    video: '/video1.mov',
    special: getRandomBoolean(),
    rating: 0
  };
  return workout;
};

export {createWorkout};
