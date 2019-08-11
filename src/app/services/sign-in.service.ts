import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class SignInService {
  signInUrl: string = "http://localhost:8000/api-token-auth/";
  constructor(private http: HttpClient) {}

  signIn(authDetail): Observable<any> {
    return this.http.post(this.signInUrl, authDetail, httpOptions);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
