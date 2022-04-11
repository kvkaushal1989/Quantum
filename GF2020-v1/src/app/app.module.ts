import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ChartsModule, ThemeService } from 'ng2-charts';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';


// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

import { NgxPrintModule } from 'ngx-print';

import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from './shared/shared.module';
// import { AuthenticationModule } from './authentication/authentication.module';
import { SharedService } from './shared/services/shared.service';

import { environment } from '../environments/environment';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';

// import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
  return localStorage.getItem('token');
}

import { registerLocaleData } from '@angular/common';

import localeHu from '@angular/common/locales/hu';
import localeDe from '@angular/common/locales/de';
import { ConfirmLeaveComponent } from './shared/components/confirm-leave/confirm-leave.component';
// import { PreventUnsavedChanges } from './authentication/services/prevent-unsaved-changes.service';
// import { MessagingServiceService } from './shared/services/messaging-service.service';
import { AsyncPipe } from '../../node_modules/@angular/common';

// import * as firebase from 'firebase';
import { MessagingServiceService } from './shared/services/messaging-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/auth/token-interceptor';
import { NumberFormatePipe } from './shared/pipes/number-formate.pipe';
import { RoeFormatPipe } from './shared/pipes/roe-format.pipe';



// firebase.initializeApp(environment.firebaseConfig);

registerLocaleData(localeHu, 'hu');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeDe, 'es-PY');
registerLocaleData(localeDe, 'ar-ED');
registerLocaleData(localeDe, 'fr-FR');
registerLocaleData(localeDe, 'pt-BR');

// tslint:disable-next-line: variable-name
// const JWT_Module_Options: JwtModuleOptions = {
//   config: {
//     tokenGetter,
//   }
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPrintModule,
    ChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    // AuthenticationModule,
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireMessagingModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxSpinnerModule,
    // JwtModule.forRoot(JWT_Module_Options),
    ModalModule.forRoot()
  ],
  providers: [SharedService, MessagingServiceService, AsyncPipe, NumberFormatePipe, RoeFormatPipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmLeaveComponent,
  ]
})
export class AppModule { }
