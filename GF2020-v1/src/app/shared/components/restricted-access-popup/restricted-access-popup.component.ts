import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestrictedAccessPopupService } from './restricted-access-popup.service';
import { BasicDailogService } from '../basic-dailog/basic-dailog/basic-dailog.service';
import { RestrictedAccess } from './restricted-access';
import { AlertifyService } from '../../_services/alertify.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-restricted-access-popup',
  templateUrl: './restricted-access-popup.component.html',
  styleUrls: ['./restricted-access-popup.component.scss']
})
export class RestrictedAccessPopupComponent implements OnInit {
  data: any;

  loginForm: FormGroup;
  loginObj: RestrictedAccess = new RestrictedAccess();
  tmpLoginObj: RestrictedAccess = new RestrictedAccess();

  constructor(
    private _service: RestrictedAccessPopupService,
    private fb: FormBuilder,
    private alertify: AlertifyService,
    private _localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this._service.getMessage().subscribe(data => {
      this.data = data;
      if (data !== null) {
        this.initFormValidation(data.shareInfo);
      }
    });
  }

  initFormValidation(object?: RestrictedAccess) {
    let data: RestrictedAccess = null;
    if (object !== undefined && object !== null) {
      data = object;
    } else {
      data = this.loginObj;
    }

    this.loginForm = this.fb.group({
      userName: [data.userName, [Validators.required]],
      password: [data.password, [Validators.required]]
    });

    this.tmpLoginObj = JSON.parse(JSON.stringify(this.loginForm.value));
  }

  unlockAccess() {
    const that = this;
    const input = {
      usermasterfk : 1,
      username  : this.loginForm.value.userName,
      password  : this.loginForm.value.password,
    };
    this._service.confirmUser(input).subscribe((response: any) => {
      if (!response.error) {
        this._localStorage.setLocalStorage('isAuthoriseduser', true);
        that._service.closePopup();
        this._service.isAuthoriseduser = true;
      } else {
        this.alertify.error(response.message);
      }
    }, (err) => {
      this.alertify.error(err.message);
    });
  }

}
