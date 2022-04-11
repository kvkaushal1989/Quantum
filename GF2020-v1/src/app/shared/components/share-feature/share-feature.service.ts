import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { APIENDPOINT } from '../../constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class ShareFeatureService {
  private subject = new Subject<any>();
  constructor(
    private apiService: AppService
  ) { }

  openShare(data: any, siFn?: () => void, noFn?: () => void) {
      console.log('Receiving Data =>', data);
      this.setConfirmation(data, 'share', siFn, noFn);
  }

  setConfirmation(data: any, t: string, siFn: () => void, noFn: () => void, h?: string) {
      const that = this;
      this.subject.next({
          type: t,
          header: h,
          shareInfo: data,
          text: data,
          siFn() {
              that.subject.next(null); // this will close the modal
              siFn();
          },
          noFn() {
              that.subject.next(null);
              noFn();
          }
      });
      console.log(this.subject);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  shareFileByEmail(reqInput: any) {
    return this.apiService.post(APIENDPOINT.COMMON.SHARE_BY_EMAIL, reqInput);
  }
}
