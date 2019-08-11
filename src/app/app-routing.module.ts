import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { AllTaskComponent } from "./components/all-task/all-task.component";
import { UsersComponent } from "./components/users/users.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { AuthGuard } from "./authGuard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/signIn", pathMatch: "full" },
  { path: "signIn", component: SignInComponent },
  { path: "addTask", component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: "allTask", component: AllTaskComponent, canActivate: [AuthGuard] },
  { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: "notifications",
    component: NotificationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "userDetail/:id",
    component: UserDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
