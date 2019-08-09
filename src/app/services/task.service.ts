import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../models/task";
import { headersToString } from "selenium-webdriver/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class TaskService {
  accessToken: string = "";
  gettaskUrl: string = "";
  postTaskUrl: string = "";
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    httpOptions.headers.append("Authorization", "Bearer" + info.token);
    return this.http.get<Task[]>(this.gettaskUrl);
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(this.postTaskUrl, task, httpOptions);
  }
}
