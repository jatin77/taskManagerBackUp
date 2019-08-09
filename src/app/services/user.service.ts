import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UserService {
  getUserUrl: string = "http://localhost:8000/api/users/";
  constructor(private http: HttpClient) {}
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.getUserUrl);
  }
}
