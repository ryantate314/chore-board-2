import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Task } from "../reducers/task.reducer";

export const TaskActions = createActionGroup({
    source: "Home Page",
    events: {
        "Create Task": props<{ task: Task }>,
        "Mark Complete": props<{ id: string }>,
        "Retrieve Tasks": emptyProps()
    }
})

export const TaskApiActions = createActionGroup({
    source: "Tasks API",
    events: {
        "Retrieved Task List": props<{ tasks: Task[] }>()
    }
})