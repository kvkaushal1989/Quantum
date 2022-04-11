import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
// import { LoginNewComponent } from './authentication/components/login-new/login-new.component';
// import { OtpVerificationComponent } from './authentication/components/otp-verification/otp-verification.component';
// import { ResetPasswordComponent } from './authentication/components/reset-password/reset-password.component';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';


// import { AuthGuardService as AuthGuard } from './authentication/services/auth-guard.service';
// import { EmailManagementComponent } from './pages/email-management/email-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './pages/form-controls/auto-complete/auto-complete.component';
import { FormControlsComponent } from './pages/form-controls/form-controls/form-controls.component';
import { TextInputComponent } from './pages/form-controls/text-input/text-input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/form-control',
    pathMatch: 'full'
  },
  {
    path: 'form-control',
    component: FormControlsComponent
  },
  {
    path: 'under-construction',
    component: UnderConstructionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'form-controls',
    loadChildren: () =>
      import('./pages/form-controls/form-controls.module').then(m => m.FormControlsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
