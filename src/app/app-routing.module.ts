import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { AllTaskComponent } from "./components/all-task/all-task.component";
import { UsersComponent } from "./components/users/users.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";

const routes: Routes = [
  { path: "", component: SignInComponent },
  { path: "addTask", component: AddTaskComponent },
  { path: "allTask", component: AllTaskComponent },
  { path: "users", component: UsersComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "userDetail/:id", component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
