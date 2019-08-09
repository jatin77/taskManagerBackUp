import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/models/task";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-all-task",
  templateUrl: "./all-task.component.html",
  styleUrls: ["./all-task.component.scss"]
})
export class AllTaskComponent implements OnInit {
  displayTaskpage: boolean = false;
  tasks: Task[];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
}
