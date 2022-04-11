import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { RulesPreferenceObj, Rules, Preference } from 'src/app/models/settings/rules-preferences/rules-preferences.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RulesPreferencesService {
 
  public userPK: any = this.localStorageService.getUserPk();
  constructor(private appService: AppService, private localStorageService: LocalStorageService) { }

  public getRulesPreferencesList(reqInput: any, userpk: any, page: any) {
    let params = new HttpParams();
    params = params.append('usermasterfk', userpk);
    params = params.append('Status', reqInput.Status);
    params = params.append('SearchValue', reqInput.SearchValue);
    return this.appService.getMethod(APIENDPOINT.SETTINGS.RULESPREFERENCES.FETCH, params, page);
  }

  public getRulesPreferenceMasterConfig() {
    const dataFilter = {
      UserFK: this.localStorageService.getUserPk(),
      FormFK: 111
    };
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF, dataFilter);
  }

  public getRulesPreferencesDetails(body: any) {
    const dataFilter = {
      userruleconfigpk: body.Userruleconfigpk,
      is_active: body.Status
    };
    return this.appService.getMethod(APIENDPOINT.SETTINGS.RULESPREFERENCES.FETCH_BY_PK, dataFilter);
  }

  public getDropdown() {
    return this.appService.get(APIENDPOINT.SETTINGS.RULESPREFERENCES.FETCH_DROPDOWN);
  }
  public saveRules(dataFilter: any) {
    return this.appService.post(APIENDPOINT.SETTINGS.RULESPREFERENCES.SAVE, dataFilter);
  }
  public deActivateUser(body: any): Observable<any> {
    return this.appService.put(APIENDPOINT.SETTINGS.RULESPREFERENCES.DEACTIVATE, body);
  }

  public deleteUser(userParams?: any): Observable<any> {
    return this.appService.delete(APIENDPOINT.SETTINGS.RULESPREFERENCES.DELETE + '?customermasterpk=' + userParams);
  }
  initFormRulesPreference(): RulesPreferenceObj {
    let x: RulesPreferenceObj;
    x = {
      userruleconfigpk: 0,
      usermasterfk: 0,
      userrolefk: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: new Date().toISOString(),
      version_no: 1,
      rules: this.defaultRules(),
      preference: this.defaultPreferences()
    };
    return x;
  }
  defaultRules() {
    const initRuleList: Rules = {
      file_storage_loc: '',
      permitted_file_types: '',
      image_file_type: '',
      max_image_size: null,
      max_upload_size: null,
      pass_cap_letter: false,
      pass_change_days: null,
      pass_change_remainder: null,
      pass_history: null,
      pass_max_length: null,
      pass_min_length: 0,
      pass_numeric: false,
      pass_space_allowed: false,
      pass_special_char: false,
      pass_userid_allowed: false,
      ruleconfigfk: 0,
      rulesettingpk: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: new Date().toISOString(),
      version_no: 1,
    };
    return initRuleList;
  }
  defaultPreferences() {
    const initPreferenceList: Preference = {
      preferencesettingpk: 0,
      ruleconfigfk: 0,
      preferred_language: '',
      no_of_record: null,
      date_range: null,
      default_screen: '',
      no_recent_access_menu: 0,
      default_otp_type: '',
      default_download_loc: '',
      message_preference: '',
      alert_preference: '',
      is_active: 1,
      created_by_fk: null,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: new Date().toISOString(),
      version_no: 1,
    };
    return initPreferenceList;
  }
}
