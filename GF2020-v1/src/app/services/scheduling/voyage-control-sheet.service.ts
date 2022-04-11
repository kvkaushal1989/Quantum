import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class VoyageControlSheetService {

    constructor(private apiService: AppService) { }

    fetchList(reqInput: any) {
      let params = new HttpParams();

      params = params.append('Status', reqInput.Status || 1);
      params = params.append('SearchValue', reqInput.SearchValue);
      params = params.append('ServicePK', reqInput.ServicePK);

      return this.apiService.getMethod(APIENDPOINT.SCHEDULING.VCS.FETCHVOYAGECONTROLSCHEDULELIST, params, reqInput.PageNumber);
    }

    fetchFilterDropDownList(reqInput: any) {
      return this.apiService.getMethod(APIENDPOINT.SCHEDULING.VCS.FETCHFILETERDROPDOWN, reqInput);
    }

    fetchFilterList(reqInput: any) {
      return this.apiService.getMethod(APIENDPOINT.SCHEDULING.VCS.FILTERVOYAGECONTROLSCHEDULELIST, reqInput);
    }

    fetchVoyageSettings(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SCHEDULING.VCS.FETCHVOYAGESETTINGS, reqInput);
    }

    fetchAmendSettings(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SCHEDULING.VCS.FETCHCOMMERCIALSCHEDULEVCS, reqInput);
    }

    fetchVoyageControlSettingsList() {
      return this.apiService.get(APIENDPOINT.SCHEDULING.VCS.FETCHVOYAGECONTROLSETTINGSLIST);
    }

    getVoyageControlDropdown(reqInput: any) {
      return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
    }

    public saveVoyageControlSettings(body: any) {
      return this.apiService.postMethod(APIENDPOINT.SCHEDULING.VCS.SAVEVOYAGECONTROLSETTINGS, body);
    }

    saveVoyageSettings(body: any) {
      return this.apiService.postMethod(APIENDPOINT.SCHEDULING.VCS.SAVEVOYAGESETTINGS, body);
    }

    saveCommercialScheduleVCS(body: any) {
      return this.apiService.postMethod(APIENDPOINT.SCHEDULING.VCS.SAVECOMMERCIALSCHEDULEVCS, body);
    }

    // public getBoundDropdown(reqInput: any) {
    //   return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
    // }

    // public getCustomerDropdown(reqInput: any) {
    //   return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
    // }

    // getCustomerPopupList(reqInput: any) {
    //   return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.FETCH_CUSTOMERS, reqInput);
    // }

    // public getSettingsDropdown() {
    //   return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.FETCHSETTINGS);
    // }

    // public saveSettings(body: any) {
    //   return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.SAVESETTINGS, body);
    // }

    // public getOverBookingDropdown(reqInput: any) {
    //   return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
    // }

    // public getShortFallDropdown(reqInput: any) {
    //   return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
    // }

    // public saveRoutes(body: any) {
    //   return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.ASSIGN_ALLOCATION.SAVEROUTES, body);
    // }

}
