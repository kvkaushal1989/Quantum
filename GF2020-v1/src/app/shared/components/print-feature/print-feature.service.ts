import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BasicDailogService } from '../basic-dailog/basic-dailog/basic-dailog.service';

@Injectable({
  providedIn: 'root'
})
export class PrintFeatureService {
  private subject = new Subject<any>();
  constructor( ) { }

  print(data: any, type: string = 'print', siFn?: () => void, noFn?: () => void) {
      this.setConfirmation(data, type, siFn, noFn);
  }

  view(data: any, siFn?: () => void, noFn?: () => void) {
    this.setConfirmation(data, 'viewer', siFn, noFn);
  }

  success(data: any, siFn?: () => void, noFn?: () => void) {
    this.setConfirmation(data, 'success', siFn, noFn);
  }

  setConfirmation(data: any, t: string, siFn: () => void, noFn: () => void, h?: string) {
      const that = this;
      this.subject.next({
          type: t,
          header: h,
          formValue: data,
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
}
