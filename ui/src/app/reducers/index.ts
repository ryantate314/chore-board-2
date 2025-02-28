import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { taskFeaturekey, taskReducer, TaskState } from './task.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  [taskFeaturekey]: taskReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];


export const selectTaskFeature = createFeatureSelector<TaskState>(taskFeaturekey);

export const selectTasks = createSelector(
  selectTaskFeature,
  (state: TaskState) => state.tasks
)