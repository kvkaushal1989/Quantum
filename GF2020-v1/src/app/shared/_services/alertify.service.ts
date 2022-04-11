import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { ERRMSG } from '../constant/error-message';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor( 
) { }
  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {}
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error(error: any) {
    const message = error.error ? error.error : error.code;
    if (message) {
    if (message.indexOf('GFE') >= 0) {
      alertify.alert('ALERT MESSAGE', ERRMSG[message]);
    } else {
      alertify.error(message);
    }
  } else {
    alertify.error(error);
  }
  }

  warning(message: string) {
    alertify.warning(message);
  }
  message(message: string) {
    alertify.message(message);
  }

  // alertify.prompt("This is a prompt dialog.", "Default value",
  // function(evt, value ){
  //   alertify.success('Ok: ' + value);
  // },
  // function(){
  //   alertify.error('Cancel');
  // })
  // ;

}
