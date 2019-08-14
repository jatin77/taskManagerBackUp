import { Component, OnInit, OnDestroy } from "@angular/core";
import { Users } from "src/app/models/users";
import { UserService } from "src/app/services/user.service";
import { TaskService } from "src/app/services/task.service";
import { Task } from "src/app/models/task";
import { Subscription } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit, OnDestroy {
  private getTaskSubscription: Subscription;
  private getUsersSubscription: Subscription;

  tasks: Task[];
  users: Users[];
  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.getUsersSubscription = this.userService
      .getUsers()
      .subscribe(users => (this.users = users));
    this.getTaskSubscription = this.taskService
      .getTasks()
      .subscribe(tasks => (this.tasks = tasks));
  }
  trackByFunction(index, item) {
    return index;
  }
  showUserDetail(id) {
    let selectedUser = this.users.filter(user => user.id === id);
    let selectedUserTask = this.tasks.filter(task => id === task.remind_to);
    this.taskService.showSelectedTask = selectedUserTask;
    this.userService.showSelectedUser = selectedUser;
  }
  ngOnDestroy(): void {
    this.getUsersSubscription.unsubscribe();
    this.getTaskSubscription.unsubscribe();
  }
}
