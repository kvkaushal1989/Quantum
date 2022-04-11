import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'
// import { BasicDailogService } from '../components/basic-dailog/basic-dailog/basic-dailog.service';
import { SideMenuService } from '../components/side-menu/service/side-menu.service';
// import { NotificationService } from '../components/basic-dailog/notification-dialog/notification-dialog/notification.service';

@Injectable()
export class MessagingServiceService {

  currentMessage = new BehaviorSubject(null);
  token: any = '';

  constructor(
    // private angularFireDB: any,
    // private angularFireAuth: any,
    // private angularFireMessaging: any,
    // private notificationDialog: NotificationService,
    public sideMenuService: SideMenuService
    ) {
    // this.angularFireMessaging.messaging.subscribe(
    //   (_messaging) => {
    //     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
    //     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
    //   }
    // )
  }

  /**
   * update token in firebase database
   * 
   * @param userId userId as a key 
   * @param token token as a value
   */
  // updateToken(userId, token) {
  //   // we can change this function to request our backend service
  //   this.angularFireAuth.authState.pipe(take(1)).subscribe(
  //     () => {
  //       const data = {};
  //       data[userId] = token
  //       this.angularFireDB.object('fcmTokens/').update(data)
  //     })
  // }

  /**
   * request permission for notification from firebase cloud messaging
   * 
   * @param userId userId
   */

  requestPermission(userId) {
    // this.angularFireMessaging.requestToken.subscribe(
    //   (token) => {
    //     console.log(token);
    //     this.token = token
    //     // this.updateToken(userId, token);
    //   },
    //   (err) => {
    //     console.error('Unable to get permission to notify.', err);
    //   }
    // );
  }

  /**
   * hook method when new notification received in foreground
   */
  showMessage: boolean = false;
  receiveMessage() {
    window.scroll(0, 0)
    this.showMessage = false;
    // this.angularFireMessaging.messages.subscribe(
    //   (payload: any) => {
    //     console.log("new message received. ", payload);
    //     this.sideMenuService.setNotificationItem();
    //     let temp: any = payload;
    //     temp.notification['buttonText'] = payload.data['gcm.notification.btncaption'],
    //       temp.notification['formUrl'] = payload.data['gcm.notification.formurl']
    //     // temp.notification['buttonText'] = temp.data['gcm.notification.formurl']
    //     let type: any = temp.data['gcm.notification.type']
    //     console.log(temp.data['gcm.notification.type'])
    //     if (type == 'alert') {
    //       this.notificationDialog.alert(temp.notification, () => { });
    //     } else if (type == 'information') {
    //       this.notificationDialog.information(temp.notification, () => { });
    //     } else if (type == 'webcall') {
    //       window.scroll(0, 100)
    //       // alert(type)
    //       let temp: any = payload;
    //       let obj: any = {
    //         type: temp.data['gcm.notification.type'],
    //         chatUrl: temp.data['gcm.notification.chatUrl'],
    //         userName: temp.data['gcm.notification.name'],
    //       }
    //       // this.notificationDialog.webcall(obj, () => { });
    //       this.notificationDialog.webchat(obj, () => { });
    //     } else if (type == 'webchat') {
    //       window.scroll(0, 100)
    //       // alert(type)
    //       let temp: any = payload;
    //       let obj: any = {
    //         type: temp.data['gcm.notification.type'],
    //         chatUrl: temp.data['gcm.notification.chatUrl'],
    //         userName: temp.data['gcm.notification.name'],
    //       }
    //       this.notificationDialog.webchat(obj, () => { });
    //     } else {
    //       this.notificationDialog.action(temp.notification, () => { });
    //     }
    //     this.currentMessage.next(payload);
    //   })
  }
}

