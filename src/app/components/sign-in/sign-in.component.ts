import { Component, OnInit } from "@angular/core";
import { SignInService } from "src/app/services/sign-in.service";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  error: boolean = false;
  username: string = "";
  password: string = "";
  constructor(
    private signInService: SignInService,
    private taskService: TaskService
  ) {}
  clearFields() {
    this.username = "";
    this.password = "";
  }
  ngOnInit() {}
  onSubmit = () => {
    if (this.username === "" || this.password === "") {
      console.log("error");
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    } else {
      const authDetail = {
        username: this.username,
        password: this.password
      };

      this.signInService.signIn(authDetail).subscribe(
        response => {
          console.log(response.token);
          this.taskService.accessToken = response.token;
        },
        error => console.log("error")
      );
      this.clearFields();
    }
  };
}
