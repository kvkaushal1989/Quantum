import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  message: any;

  constructor(
    private notificatioService: NotificationService,
    private router : Router
  ) { }

  ngOnInit() {
    this.notificatioService.getMessage().subscribe(message => {
      this.message = message;
      console.log(this.message)
      // if (this.message.type == 'information') {
      //   setTimeout(() => {
      //     this.message.siFn()
      //   }, 5000);
      // }
    });
  }

  // redirectToPage(url) {
  //   let tmpUrl = url.split('?')
  //  this.router.navigate([tmpUrl[0]])
  // }


  redirectToPage(url) {
    let tmpUrl = url.split('?')
    console.log(tmpUrl[1])
    var queryString = tmpUrl[1];
    let jsonObj = JSON.parse('{"' + decodeURI(queryString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    this.router.navigate([tmpUrl[0]], { queryParams: jsonObj })
  }


}

