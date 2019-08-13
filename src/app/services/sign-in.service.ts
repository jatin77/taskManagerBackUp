import { Injectable } from "@angular/core";

import { SyncServiceService } from "./sync-service.service";

@Injectable({
  providedIn: "root"
})
export class SignInService {
  constructor(private syncService: SyncServiceService) {}

  signIn(authDetail) {
    return this.syncService.signInSync(authDetail);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
