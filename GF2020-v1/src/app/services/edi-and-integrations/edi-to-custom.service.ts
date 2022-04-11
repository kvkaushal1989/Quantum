import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EdiToCustomService {

  constructor(
    private apiService: AppService,
    private apiService1: MockJsonService
  ) { }

  //#region  File Registration
  fetchEDIToCustomCollList(reqInput: any) {
    return this.apiService1.get(APIENDPOINT.COMMON.FETCHGRIDPREF, reqInput);
  }

  fetchEDIToCustomDataList(reqInput: any) {
    let params = new HttpParams();

    // params = params.append('Status', reqInput.Status || 1);
    params = params.append('CSHPK', reqInput.CSHPK);
    params = params.append('PolTerPKs', reqInput.PolTerPKs);
    params = params.append('PodTerPKs', reqInput.PodTerPKs);
    params = params.append('FrmDate', reqInput.FrmDate);
    params = params.append('ToDate', reqInput.ToDate);
    params = params.append('Status', reqInput.Status);
    params = params.append('SearchValue', reqInput.SearchValue);
    params = params.append('SelFlag', reqInput.SelFlag);
    return this.apiService.getMethod(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.FETCHCUSTOMSEDI, params, reqInput.PageNumber);
  }

  exportEdiToCustom(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.GENERATECUSTOMSEDI, reqInput);
  }
  //#endregion

  //#region Export
  generateCustomsEDI(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.GENERATECUSTOMSEDI, dataFilter);
  }
  //#endregion

  //#region Drop Downs
  fetchDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  fetchVoyageDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.FETCHVOYAGE, reqInput);
  }

  fetchPOLTerDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.FETCHPOLPORT, reqInput);
  }

  fetchPODTerDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.CUSTOMSEDI.FETCHPODPORT, reqInput);
  }

  fetchStatusDropDown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }
  //#endregion
  
}
