import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { WorkoutProcess } from '../../types/state';
import { createWorkout, createWorkouts, workouts } from '../../mocks/workouts';
import { TrainigQuery } from '../../types/query';

const COUNT_OF_WORKOUTS = 10;

const initialState: WorkoutProcess = {
  workout: null,
  workouts,
  isWorkoutsDataLoading: false,
  workoutsCount: COUNT_OF_WORKOUTS,
  filteredWorkouts: workouts
};

export const workoutProcess = createSlice({
  name: NameSpace.Workout,
  initialState,
  reducers: {
    setWorkoutById: (state, action: PayloadAction<number>) => {
      state.workout = createWorkout(action.payload);
    },
    workoutsInc: (state, action: PayloadAction<number>) => {
      const count = Math.min(state.workoutsCount - state.workouts.length, action.payload);
      state.workouts = state.workouts.concat(createWorkouts(count));
    },
    filterWorkouts: (state, action: PayloadAction<TrainigQuery>) => {
      const workoutsNew = state.workouts.slice();
      if(action.payload.times.length === 0) {
        workoutsNew.filter((item) => {
          item.price > action.payload.priceMin &&
          item.price < action.payload.ratingMax &&
          item.rating > action.payload.ratingMin &&
          item.rating < action.payload.ratingMax &&
          item.caloriesToSpend > action.payload.caloriesMin &&
          item.caloriesToSpend < action.payload.caloriesMax
        })
      } else {
        workoutsNew.filter((item) => {
          item.price > action.payload.priceMin &&
          item.price < action.payload.ratingMax &&
          item.rating > action.payload.ratingMin &&
          item.rating < action.payload.ratingMax &&
          item.caloriesToSpend > action.payload.caloriesMin &&
          item.caloriesToSpend < action.payload.caloriesMax &&
          action.payload.times.includes(item.timeOfTraining)
        })
      }
      state.filteredWorkouts = workoutsNew;
    }
  },
  extraReducers(builder) {
    builder

  }
});
export const { setWorkoutById, filterWorkouts, workoutsInc } = workoutProcess.actions;
