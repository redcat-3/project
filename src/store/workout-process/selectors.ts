import { Notification, Order } from '../../types/reaction';
import { State } from '../../types/state';
import { NameSpace } from '../../constant';
import { Workout } from '../../types/workout-data';

export const getWorkouts = (state: State): Workout[] => state[NameSpace.Workout].workouts;
export const getFilteredWorkouts = (state: State): Workout[] => state[NameSpace.Workout].filteredWorkouts;
export const getWorkout = (state: State): Workout | null => state[NameSpace.Workout].workout;
export const getWorkoutsDataLoadingStatus = (state: State): boolean => state[NameSpace.Workout].isWorkoutsDataLoading;
export const getWorkoutsCount = (state: State): number => state[NameSpace.Workout].workoutsCount;