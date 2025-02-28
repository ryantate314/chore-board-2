import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../reducers/task.reducer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private readonly http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.apiUrl}/tasks`
    )
  }
}
