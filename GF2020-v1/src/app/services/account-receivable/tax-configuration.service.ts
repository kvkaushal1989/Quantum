import { Injectable } from '@angular/core';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { map } from 'rxjs/operators';
import { TaxConfigAdd, VatList, RuleList } from 'src/app/models/account-recievable/tax-configuration.model';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class TaxConfigurationService {

  constructor(private appService: AppService) { }

  public getTaxSettings() {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.TAX_CONFIG.FETCHSETTINGS);
  }
  public getTaxListing(body: any) {
    const body1: any = {
      countryfk: body.countryfk,
      paymenttypefk: body.paymenttypefk
    };
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.TAX_CONFIG.FETCHLIST, body);
  }
  public getApTaxListing(reqInput: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_PAYABLE.TAX_CONFIG.FETCHLISTAP + '?countryfk=' + reqInput);
  }
  public saveRuleListAP(body: any) {
    return this.appService.post(APIENDPOINT.ACCOUNT_PAYABLE.TAX_CONFIG.SAVERULELISTAP, body);
  }
  public saveSettings(body: any) {
    return this.appService.post(APIENDPOINT.ACCOUNT_RECEIVABLE.TAX_CONFIG.SAVESETTINGS, body);
  }
  public saveRuleList(body: any) {
    return this.appService.post(APIENDPOINT.ACCOUNT_RECEIVABLE.TAX_CONFIG.SAVERULELIST, body);
  }
  public getInvoinceCountryList() {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.TAX_CONFIG.INVOICECOUNTRY);
  }
  initFormSTaxConfig(): TaxConfigAdd {
    let x: TaxConfigAdd;
    x = {
    vatcountrysettingpk: 0,
    countryfk: 0,
    country_name: '',
    is_active: 0,
    created_by_fk: 0,
    last_updated_on: new Date().toISOString(),
    version_no: 0,
    vatList: this.defaultVat(),
    created_on: new Date().toISOString(),
    last_updated_by_fk: null,
    };
    return x;
  }
  defaultVat() {
    const initDocList: VatList[] = [{
      vatsettingpk: 0,
      vatcountrysettingfk: 0,
      vat_id: '',
      vat_name: '',
      vat_percentage: 0,
      applicable_flag: false,
      is_active: 0,
      created_by_fk: 0,
      created_on: new Date().toISOString(),
      last_updated_by_fk: null,
      last_updated_on: new Date().toISOString(),
      version_no: 0,
    }];
    return initDocList;
  }
  initRuleListConfig(): RuleList {

    let x: RuleList;
    x = { 
      vatrulespk: 0,
      countryfk: 0,
      chargemasterfk: 0,
      paymenttypefk: 0,
      invoiceing: '',
      orgin: '',
      vat_name: '',
      vatlist: [
        {
          vatpercentagesettingpk: 0,
          vat_name: '',
          vat_percentage: 0
        }]
    };
    return x;
  }
}
