import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-notification',
  templateUrl: './status-notification.component.html',
  styleUrls: ['./status-notification.component.scss']
})
export class StatusNotificationComponent implements OnInit {

  @Input() notificationType;
  @Input() notificationMessage;
  @Input()
  public isNotification : boolean;

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.isNotification = false;
    }, 6000)
  }

  ngOnChanges() {
    this.isNotification = true;
    setTimeout(()=> {
      this.isNotification = false;
    }, 8000)
  }

  public closeNotification() {
    this.isNotification = false;
  }

}
