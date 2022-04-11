import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ThreeDigitDecimalDirective } from "../../directives/three-digit-decimal.directive";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent implements OnInit {
  @Input() messages;
  //later can remove 
  @Input() type;
  @Input() isNotification;
  //.....
  @Input() intervalPeriod;

  @Output()
  onNotificationClose = new EventEmitter<any>();

  constructor() {}

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

  closeNotification(key) {
    this.messages.splice(key, 1);
    this.isNotification = false;
    this.onNotificationClose.emit(false);
  }
}
