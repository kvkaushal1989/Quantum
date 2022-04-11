import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

    constructor(
      private apiService: AppService,
      private apiService1: MockJsonService
    ) { }

    //#region Grid
    fetchGridDataList(reqInput: any) {
      let params = new HttpParams();

      params = params.append('created_by_fk', reqInput.created_by_fk);
      params = params.append('audience', reqInput.audience);
      params = params.append('aud_group', reqInput.aud_group);
      params = params.append('category', reqInput.category);
      params = params.append('from_dt', reqInput.from_dt);
      params = params.append('to_dt', reqInput.to_dt);
      params = params.append('Status', reqInput.Status || 1);
      params = params.append('SearchValue', reqInput.SearchValue);

      return this.apiService.getMethod(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH,  params, reqInput.PageNumber);
    }

    getDeliveryColumnConfig(userpk: any) {
      return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=76');
    }
    //#endregion

    //#region Drop Downs
    fetchDropDowns(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_DROPDOWNS, reqInput);
    }

    fetchCustomers(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_CUSTOMERS, reqInput);
    }
    //#endregion

    //#region Settings
    saveSettings(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_SETTINGS, reqInput);
    }

    fetchSettings(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_SETTINGS, reqInput);
    }
    //#endregion

    //#region Save
    saveAnnouncement(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE, reqInput);
    }

    saveAnnouncementMember(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_MEMBERS, reqInput);
    }

    saveAnnouncementCategory(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_CATEGORIES, reqInput);
    }

    sendExternalEmail(reqInput: any) {
      return this.apiService.post(APIENDPOINT.COMMON.SHARE_BY_EMAIL, reqInput);
    }
    //#endregion

    //#region  Comments
    fetchComments(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_COMMENTS, reqInput);
    }

    saveComments(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_COMMENTS, reqInput);
    }
    //#endregion

    //#region  Likes
    fetchLikes(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_LIKES, reqInput);
    }

    saveLikes(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_LIKES, reqInput);
    }
    //#endregion

    //#region format date
    onDateRangeNrValidate(default_dt_units: any, default_dt_number: any = 0) {
      // if (default_dt_units === 1) {
      //   this.gridOptions.settingsForm.patchValue({ default_dt_number: 365 });
      // } else if (default_dt_units === 2) {
      //   this.gridOptions.settingsForm.patchValue({ default_dt_number: 52 });
      // } else if (default_dt_units === 3) {
      //   this.gridOptions.settingsForm.patchValue({ default_dt_number: 12 });
      // }
    }
    //#endregion

    //#region  Guest
    fetchGuest(reqInput: any) {
      return this.apiService.get(APIENDPOINT.SETTINGS.ANNOUNCEMENT.FETCH_GUEST, reqInput);
    }

    saveGuest(reqInput: any) {
      return this.apiService.post(APIENDPOINT.SETTINGS.ANNOUNCEMENT.SAVE_GUEST, reqInput);
    }
    //#endregion
}
