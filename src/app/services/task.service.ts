import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../models/task";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class TaskService {
  taskUrl: string = "http://127.0.0.1:8000/api/create-task/";
  showSelectedTask;
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    });
  }

  addTask(task): Observable<any> {
    return this.http.post(this.taskUrl, task, httpOptions);
  }
}
