import { Injectable } from "@angular/core";
import { SyncServiceService } from "./sync-service.service";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  showSelectedTask;
  constructor(private syncService: SyncServiceService) {}

  getTasks() {
    return this.syncService.getSyncTasks();
  }

  addTask(task) {
    return this.syncService.addSyncTask(task);
  }
}
