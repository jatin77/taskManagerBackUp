import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationsService } from "src/app/services/notifications.service";
import { Notifications } from "src/app/models/notifications";
import { Subscription } from "rxjs";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private getNotifySubscription: Subscription;

  interval;
  notifications: Notifications[];
  constructor(private notifyService: NotificationsService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.notifyInterval();
    }, 1000);
  }
  notifyInterval = () => {
    this.getNotifySubscription = this.notifyService
      .getNotifications()
      .subscribe(notifications => (this.notifications = notifications));
  };
  trackByFunction(index, item) {
    return index;
  }
  ngOnDestroy(): void {
    this.getNotifySubscription.unsubscribe();
    clearInterval(this.interval);
  }
}
