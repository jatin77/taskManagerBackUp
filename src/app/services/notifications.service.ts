import { Injectable } from "@angular/core";
import { SyncServiceService } from "./sync-service.service";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  constructor(private syncService: SyncServiceService) {}

  getNotifications() {
    return this.syncService.getSyncNotifications();
  }
}
