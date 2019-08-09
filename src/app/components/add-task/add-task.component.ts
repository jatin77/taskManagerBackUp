import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Users } from "src/app/models/users";
import { Task } from "src/app/models/task";
import { UserService } from "src/app/services/user.service";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"]
})
export class AddTaskComponent implements OnInit {
  error: boolean = false;
  displayTasksPage: boolean = false;
  users: Users[];
  title: string = "";
  remind_to: string = "";
  created_by: string = "";
  remainder_date: string = "";
  created_date: Date = new Date();
  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    // this.userService.getUsers().subscribe(users => (this.users = users));
    this.users = this.getUsers();
  }
  getUsers() {
    return [
      {
        id: 1,
        username: "username1",
        first_name: "first name1",
        last_name: "last name1"
      }
    ];
  }
  clearFields() {
    this.title = "";
    this.remind_to = "";
    this.remainder_date = "";
    this.created_date = new Date();
    this.created_by = "";
  }
  onSubmit = () => {
    if (
      this.title === "" ||
      this.remind_to === "" ||
      this.remainder_date === "" ||
      this.created_by === ""
    ) {
      console.log("error");
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    } else {
      let task = {
        title: this.title,
        created_by: this.created_by,
        remainder_date: this.remainder_date,
        remind_to: this.remind_to,
        created_date: new Date()
      };
      console.log(task);
      this.taskService.addTask(task).subscribe(
        response => {
          console.log("task assigned");
        },
        error => console.log("error")
      );
      this.clearFields();
    }
  };
}
