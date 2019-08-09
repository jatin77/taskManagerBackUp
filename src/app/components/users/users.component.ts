import { Component, OnInit } from "@angular/core";
import { Users } from "src/app/models/users";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  users: Users[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
}
