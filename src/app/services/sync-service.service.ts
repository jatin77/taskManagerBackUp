import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../models/task";
import { Notifications } from "../models/notifications";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class SyncServiceService {
  notificationUrl: string = "http://localhost:8000/notifications/";
  signInUrl: string = "http://localhost:8000/api-token-auth/";
  taskUrl: string = "http://127.0.0.1:8000/api/create-task/";
  constructor(private http: HttpClient) {}

  signInSync(authDetail): Observable<any> {
    return this.http.post(this.signInUrl, authDetail, httpOptions);
  }

  getSyncTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    });
  }

  addSyncTask(task): Observable<any> {
    return this.http.post(this.taskUrl, task, httpOptions);
  }

  getSyncNotifications(): Observable<Notifications[]> {
    return this.http.get<Notifications[]>(this.notificationUrl, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + localStorage.getItem("token")
      })
    });
  }
}
