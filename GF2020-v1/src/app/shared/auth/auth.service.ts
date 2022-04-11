import { Injectable } from '@angular/core';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // public af: AngularFireAuth
    ) { }

  // loginWithGoogle() {
  //   return this.af.auth.login({

  //   })
  // }
  public getToken(): string {
    return localStorage.getItem('token');
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting 
  //   // whether or not the token is expired
  //   return tokenNotExpired(token);
  // }
}
