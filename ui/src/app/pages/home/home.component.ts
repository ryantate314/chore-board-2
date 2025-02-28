import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../reducers';
import { Observable } from 'rxjs';
import { Task } from '../../reducers/task.reducer';
import { TaskActions } from '../../actions/task.actions';
import { AsyncPipe } from '@angular/common';
import { TaskCardComponent } from '../../components/task-card/task-card.component';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    TaskCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tasks$: Observable<Task[]>;
  
  constructor(private readonly store: Store) {
    this.tasks$ = this.store.select(selectTasks);
  }

  ngOnInit() {
    this.store.dispatch(TaskActions.retrieveTasks());
  }
}
