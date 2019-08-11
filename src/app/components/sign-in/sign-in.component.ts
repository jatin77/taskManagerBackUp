import { Component, OnInit } from "@angular/core";
import { SignInService } from "src/app/services/sign-in.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  error: boolean = false;
  hello: boolean = false;
  username: string = "";
  password: string = "";
  constructor(private signInService: SignInService, private router: Router) {}
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
          console.log(response, "success");
          localStorage.setItem("token", response.token);
          this.router.navigate(["/allTask"]);
          this.hello = true;
        },
        error => {
          console.log("error");
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      );
      this.clearFields();
    }
  };
}
