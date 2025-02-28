import { createReducer, on } from "@ngrx/store";
import { TaskApiActions } from "../actions/task.actions";

export const taskFeaturekey = "task";

export interface Task {
    name: string;
    id: string;
    description: string | null;
}

export interface TaskState {
    tasks: Task[]
}

export const initialState: TaskState = {
    tasks: []
}

export const taskReducer = createReducer(
    initialState,
    on(TaskApiActions.retrievedTaskList, (state, {tasks}) => ({...state, tasks: tasks }) )
);