import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { AllTaskComponent } from "./components/all-task/all-task.component";
import { UsersComponent } from "./components/users/users.component";
import { NotificationsComponent } from "./components/notifications/notifications.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { FormsModule } from "@angular/forms";
import { ErrorComponent } from './components/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    AddTaskComponent,
    AllTaskComponent,
    UsersComponent,
    NotificationsComponent,
    UserDetailComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
