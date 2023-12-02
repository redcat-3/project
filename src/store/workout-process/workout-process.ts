import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { WorkoutProcess } from '../../types/state';
import { createWorkout } from '../../mocks/workouts';

const COUNT_OF_WORKOUTS = 10;

const initialState: WorkoutProcess = {
  workout: null,
  workouts: [],
  isWorkoutsDataLoading: false,
  workoutsCount: COUNT_OF_WORKOUTS,
};

export const workoutProcess = createSlice({
  name: NameSpace.Workout,
  initialState,
  reducers: {
    setWorkoutById: (state, action: PayloadAction<number>) => {
      state.workout = createWorkout(action.payload);
    },
  },
  extraReducers(builder) {
    builder

  }
});
export const { setWorkoutById } = workoutProcess.actions;
