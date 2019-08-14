import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "src/app/services/notifications.service";
import { Notifications } from "src/app/models/notifications";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent implements OnInit {
  notifications: Notifications[];
  constructor(private notifyService: NotificationsService) {}

  ngOnInit() {
    setInterval(() => {
      this.notifyInterval();
    }, 1000);
  }
  notifyInterval = () => {
    this.notifyService
      .getNotifications()
      .subscribe(notifications => (this.notifications = notifications));
  };
  trackByFunction(index, item) {
    return index;
  }
}
