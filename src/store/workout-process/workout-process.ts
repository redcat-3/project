import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constant';
import { WorkoutProcess } from '../../types/state';
import { fetchWorkoutAction, fetchWorkoutsAction, fetchWorkoutsCoachAction } from '../api-actions';

const initialState: WorkoutProcess = {
  workout: null,
  isWorkoutDataLoading: false,
  workouts: [],
  isWorkoutsDataLoading: false,
  workoutsCount: 0,
};

export const workoutProcess = createSlice({
  name: NameSpace.Workout,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
    .addCase(fetchWorkoutAction.pending, (state) => {
      state.isWorkoutDataLoading = true;
    })
    .addCase(fetchWorkoutAction.fulfilled, (state, action) => {
      state.workout = action.payload;
      state.isWorkoutDataLoading = false;
    })
    .addCase(fetchWorkoutAction.rejected, (state) => {
      state.isWorkoutDataLoading = false;
    })
    .addCase(fetchWorkoutsAction.pending, (state) => {
      state.isWorkoutsDataLoading = true;
    })
    .addCase(fetchWorkoutsAction.fulfilled, (state, action) => {
      state.workouts = action.payload.workoutsList;
      state.workoutsCount = action.payload.count;
      state.isWorkoutsDataLoading = false;
    })
    .addCase(fetchWorkoutsAction.rejected, (state) => {
      state.isWorkoutsDataLoading = false;
    })
    .addCase(fetchWorkoutsCoachAction.pending, (state) => {
      state.isWorkoutsDataLoading = true;
    })
    .addCase(fetchWorkoutsCoachAction.fulfilled, (state, action) => {
      state.workouts = action.payload;
      state.workoutsCount = state.workouts.length;
      state.isWorkoutsDataLoading = false;
    })
    .addCase(fetchWorkoutsCoachAction.rejected, (state) => {
      state.isWorkoutsDataLoading = false;
    })
  }
});
export const {} = workoutProcess.actions;
