import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../services/task.service";
import { TaskActions, TaskApiActions } from "../actions/task.actions";
import { catchError, EMPTY, exhaustMap, map } from "rxjs";

@Injectable()
export class TaskEffects {
    private readonly actions$ = inject(Actions);
    private readonly taskService = inject(TaskService);

    constructor() {
    }

    loadTasks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TaskActions.retrieveTasks.type),
            exhaustMap(() => this.taskService.getTasks()
                .pipe(
                    map(tasks => TaskApiActions.retrievedTaskList({ tasks })),
                    catchError(() => EMPTY)
                )
            )
        )
    });
}