import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { ErrorComponent } from "./components/error/error.component";
import { AuthGuard } from "./authGuard/auth.guard";
import { AuthInterceptor } from "./authInterceptor/auth.interceptor";
import { SuccessComponent } from './components/success/success.component';
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
    ErrorComponent,
    SuccessComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
