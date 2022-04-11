import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

constructor(private apiService: AppService, private localStorage: LocalStorageService) { }

userPK: any = this.localStorage.getUserPk();
public getCurrencies(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.CURRENCYLIST, params);
}
public getSettingsDropdown() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.SETTINGDDL);
}
public fetchSettings() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.FETCHSETTING);
}
public saveSetting(params: any) {
  return this.apiService.postMethod(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.SAVESETTING, params);
}
public saveROEDetails(params: any) {
  return this.apiService.postMethod(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.SAVEROE, params);
}

public getTableConfig() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.TABLECONFIG);
}

public fetchCurrentROE(param: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.CURRENTROE, param);
}
public getColumnConfig() {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + this.userPK + '&FormFK=74');
}

public viewHistoricDetails(param: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.VIEWHISTORIC, param);
}

public calculateExchangeRate(param: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.EXCHANGE_RATE.EXCHANGERATE, param);
}

}
