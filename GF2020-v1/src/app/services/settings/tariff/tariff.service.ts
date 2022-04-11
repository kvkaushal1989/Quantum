import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(
    private apiService: AppService
    ) { }

    public getTariffPortList() {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.FETCHFROMPORT);
    }
    public getTariffToPortList(porPk: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.FETCHTOPORT + porPk);
    }
    public getChargeGroupList() {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.FETCHCHARGEGRP);
    }
    public getChargeElementList(chargeId: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.FETCHCHARGEELE + chargeId);
    }
    public getChangePreferenceList() {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.GETCHANGEPREF);
    }
    public getTariffDropdown() {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.TARIFFDROPDOWN);
    }
    public gettariffConfig() {
      return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=1&FormFK=47');
    }
    public generateTraffic(url: any) {
      // const url = 'fromportfk=' + inputParams.fromportfk + '&toportfk=' + inputParams.toportfk + '&validfrom='
      //  + inputParams.validfrom + '&validto=' + inputParams.validto;
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.GENERATETARIFF + url);
    }

    public viewTraffic(url: any) {
      // const url = 'fromportfk=' + inputParams.fromportfk + '&toportfk=' + inputParams.toportfk + '&validfrom='
      //  + inputParams.validfrom + '&validto=' + inputParams.validto;
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.VIEWTARIFF + url);
    }
    public saveSetting(body: any) {
      return this.apiService.postMethod(APIENDPOINT.SETTINGS.TARIFF.SAVESETTING, body);
    }
    public saveTariff(body: any) {
      return this.apiService.postMethod(APIENDPOINT.SETTINGS.TARIFF.SAVETARIFF, body);
    }
    public getRevisedListt(input: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.TARIFF.GETRIVISION, input);
    }

    public defoutSettings() {
      const object = {
        tariffsettingpk: 0,
        applyfreight: 2,
        all_in_freight: 2,
        expire_days_before: 0,
        expire_notification: true,
        revision_notification: true,
        activation_notification: true,
        deactivation_notification: true,
        vatos_notification: true,
        advatos_notification: true,
        is_active: 0,
        created_by_fk: 0,
        created_on: new Date().toISOString(),
        last_updated_by_fk: 0,
        last_updated_on: new Date().toISOString(),
        version_no: 0,
        applicableCharges: [
          {
            tariffchargepreferencepk: 0,
            fromportfk: 0,
            toportfk: 0,
            chargemasterfk: 0,
            applicable_flag: true,
            is_active: 0,
            created_by_fk: 0,
            created_on: new Date().toISOString(),
            last_updated_by_fk: 0,
            last_updated_on: new Date().toISOString(),
            version_no: 0
          }
        ]
      };
      return object;
    }

}
