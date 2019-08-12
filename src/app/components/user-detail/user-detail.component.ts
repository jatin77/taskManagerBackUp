import { Component, OnInit } from "@angular/core";

import { TaskService } from "src/app/services/task.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  userTasks;
  selectedUser;
  constructor(
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userTasks = this.taskService.showSelectedTask;

    this.selectedUser = this.userService.showSelectedUser[0];
  }
}
