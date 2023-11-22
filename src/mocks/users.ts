import { getRandomArrayElement, getRandomNumber, getRandomArray, getRandomBoolean, randomDate } from './utils.js';
import { User, UserGender, UserLevel, UserLocation, UserRole, UserTime } from '../types/user-data.js';
import { CountCaloriesToReset, CountCaloriesToSpend } from '../constant.js';

const NAMES = [
    'Angelina',
    'Angel',
    'Dina',
    'Tom',
    'Dima',
]
const AVATARS = [
    'C:/img/content/avatars/users/photo-1.png',
    'C:/img/content/avatars/users/photo-2.png',
    'C:/img/content/avatars/users/photo-3.png',
    'C:/img/content/avatars/users/photo-4.png',
    'C:/img/content/avatars/users/photo-5.png',
]
const GENDERS = [
    'male',
    'female',
    'indifferent',
]
const ROLES = [
    'user',
    'coach'
]
const DESCRIPTIONS = [
    'Страшный рассказ о драконе. Колдовство, предательство и необыкновенный мир фэнтези.',
    'История про вампиров из маленького городка. Коварство, нестандартный сюжет и необыкновенные приключения священника.',
    'Идти или остановиться? Вопрос без правильного ответа. Рассказ о долгой и смертельной прогулке.',
    'Как похудеть и не сойти с ума? А как вернуть вес обратно? Необычная история противостояния.',
    'Прими звонок и превратись в зомби. Рассказ о зомбировании через средства связи.'
]
const LOCATIONS = [
    'Пионерская',
    'Петроградская',
    'Удельная',
    'Звёздная',
    'Спортивная'
]
const LEVELS = [
    'новичок',
    'любитель',
    'профессионал'
];

const TYPES_OF_TRAIN = [
    'йога', 
    'бег', 
    'бокс', 
    'стрейчинг', 
    'кроссфит', 
    'аэробика', 
    'пилатес'
]
const TIMES_OF_TRAIN = [
    '10-30',
    '30-50',
    '50-80',
    '80-100',
]
const CERTIFICATE = [
    'C:/img/content/certificates-and-diplomas/certificate-1.jpg',
    'C:/img/content/certificates-and-diplomas/certificate-2.jpg',
    'C:/img/content/certificates-and-diplomas/certificate-3.jpg',
    'C:/img/content/certificates-and-diplomas/certificate-4.jpg',
    'C:/img/content/certificates-and-diplomas/certificate-5.jpg'
]
const MERITS = [
    'Страшный рассказ о драконе. Колдовство, предательство и необыкновенный мир фэнтези.',
    'История про вампиров из маленького городка. Коварство, нестандартный сюжет и необыкновенные приключения священника.',
    'Идти или остановиться? Вопрос без правильного ответа. Рассказ о долгой и смертельной прогулке.',
    'Как похудеть и не сойти с ума? А как вернуть вес обратно? Необычная история противостояния.',
    'Прими звонок и превратись в зомби. Рассказ о зомбировании через средства связи.'
]

const generateUser = ( number: number): User => {
    const role = getRandomArrayElement(ROLES) as unknown as UserRole;
    const user = {
      id: `user${number}@pochta.local`,
      email: `user${number}@pochta.local`,
      name: getRandomArrayElement(NAMES),
      avatar: getRandomArrayElement(AVATARS),
      gender: getRandomArrayElement(GENDERS) as unknown as UserGender,
      dateBirth: randomDate(new Date(2012, 0, 1), new Date()),
      createdDate: randomDate(new Date(2012, 0, 1), new Date()),
      role,
      description: getRandomArrayElement(DESCRIPTIONS),
      location: getRandomArrayElement(LOCATIONS) as unknown as UserLocation,
      image: getRandomArrayElement(AVATARS),
      level: getRandomArrayElement(LEVELS) as unknown as UserLevel,
      typeOfTrain: getRandomArray(TYPES_OF_TRAIN),
    }
    if (role === UserRole.User) {
      const userUser = {
        ... user,
        timeOfTrain: getRandomArrayElement(TIMES_OF_TRAIN) as unknown as UserTime,
        caloriesToReset: getRandomNumber(CountCaloriesToReset.Min, CountCaloriesToReset.Max),
        caloriesToSpend: getRandomNumber(CountCaloriesToSpend.Min, CountCaloriesToSpend.Max),
        trainingReady: getRandomBoolean()
      }
      return userUser;
    } else if (role === UserRole.Coach) {
      const userCoach = {
        ... user,
        certificate: getRandomArrayElement(CERTIFICATE),
        merit: getRandomArrayElement(MERITS),
        personalTraining: getRandomBoolean()
      }
      return userCoach;
    }
    const userUser = {
        ... user,
        timeOfTrain: getRandomArrayElement(TIMES_OF_TRAIN) as unknown as UserTime,
        caloriesToReset: getRandomNumber(CountCaloriesToReset.Min, CountCaloriesToReset.Max),
        caloriesToSpend: getRandomNumber(CountCaloriesToSpend.Min, CountCaloriesToSpend.Max),
        trainingReady: getRandomBoolean()
      }
    return userUser;
  };

const createUsers = (ids: number[]) => ids.map((id) => generateUser(id));

export { generateUser, createUsers };