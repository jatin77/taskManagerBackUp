import { Component, OnInit, OnDestroy } from "@angular/core";
import { Task } from "src/app/models/task";
import { TaskService } from "src/app/services/task.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-all-task",
  templateUrl: "./all-task.component.html",
  styleUrls: ["./all-task.component.scss"]
})
export class AllTaskComponent implements OnInit, OnDestroy {
  private getTaskSubscription: Subscription;

  tasks: Task[];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTaskSubscription = this.taskService
      .getTasks()
      .subscribe(tasks => (this.tasks = tasks));
  }
  trackByFunction(index, item) {
    return index;
  }
  ngOnDestroy(): void {
    this.getTaskSubscription.unsubscribe();
  }
}
