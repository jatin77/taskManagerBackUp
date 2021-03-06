import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { Users } from "src/app/models/users";
import { Task } from "src/app/models/task";
import { UserService } from "src/app/services/user.service";
import { TaskService } from "src/app/services/task.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit, OnDestroy {
  private addTaskSubscription: Subscription;

  error: boolean = false;

  success: boolean = false;
  displayTasksPage: boolean = false;
  users: Users[];
  title: string = "";
  remind_to: number = null;
  created_by: number = null;
  remainder_date: string = "";
  created_date: string = "";
  id: number = Math.floor(Math.random() * 100);
  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.addTaskSubscription = this.userService
      .getUsers()
      .subscribe(users => (this.users = users));
  }

  clearFields() {
    this.title = "";
    this.remind_to = null;
    this.remainder_date = null;
  }
  onSubmit = () => {
    if (
      this.title === "" ||
      this.remind_to === null ||
      this.remainder_date === null
    ) {
      console.log("error");
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    } else {
      let task = {
        title: this.title,
        remind_to: this.remind_to,
        remainder_date: this.remainder_date
      };

      this.taskService.addTask(task).subscribe(
        response => {
          console.log("task assigned", task);
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 5000);
        },
        error => {
          console.log("error", task);
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      );
      this.clearFields();
    }
  };
  ngOnDestroy(): void {
    this.addTaskSubscription.unsubscribe();
  }
}
