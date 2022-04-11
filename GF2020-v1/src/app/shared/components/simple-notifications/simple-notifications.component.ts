import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SharedService } from '../../services/shared.service';

@Component({
  selector: "app-simple-notifications",
  templateUrl: "./simple-notifications.component.html",
  styleUrls: ["./simple-notifications.component.scss"]
})
export class SimpleNotificationsComponent implements OnInit {
  @Input() messages:any = [];
  @Input() intervalPeriod;
  @Input() isNotification;
  @Output()
  onNotificationClose = new EventEmitter<any>();
  constructor(private sharedService: SharedService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    if(this.messages != undefined){
      setInterval(() => {
        this.messages.forEach((message, index) => {
          if (message.notificationType === "1") {
            this.messages.splice(index, 1);
          }
        });
      }, this.intervalPeriod);
    }
  }

  closeNotification(key,type) {
    console.log('type..', type);
    this.sharedService.setNotificationConfirmation(type);
    this.messages.splice(key, 1);
    this.isNotification = false;
    this.onNotificationClose.emit(false);
  }
}
