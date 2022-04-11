import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  excludeURLs: any = {
    ipAddress: 'https://api.ipify.org/?format=json',
    userLogOut: 'https://152.67.3.226/GF2020EQA/api/Auth/login/UpdateLogOut'
  };
  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${this.auth.getToken()}`
    //   }
    // });
    if (!request.url.includes(this.excludeURLs.ipAddress || this.excludeURLs.userLogOut)) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + this.auth.getToken()) });
      return next.handle(request);
    }
    return next.handle(request);
  }
}
