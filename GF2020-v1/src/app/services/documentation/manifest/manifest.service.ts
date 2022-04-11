import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { MatCalendarBody } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ManifestService {

  constructor(private appService: AppService) { }

  searchManifest(body: any) {
    return this.appService.print(APIENDPOINT.DOCUMENTATION.MANIFEST.SEARCH, {}, body);
  }
  searchManifestfilter(datafilter?: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.FETCHMANIFESTFILTER,datafilter);
  }
  fetchPOLList(rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.POL + '?RbOption=' + rb_option);
  }
  fetchPOLTerminalList(pol: any, rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.POLTERMINAL + '?PortPK=' + pol.pol_pk + '&RbOption=' + rb_option);
  }
  fetchPODList(rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.POD + '?RbOption=' + rb_option);
  }
  fetchCargoList(rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.CARGO + '?searchflag=COMMGRPALL' + '&RbOption' + rb_option);
  }
  fetchSettingsDropdown() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.SETTINGSDROPDOWN +
      '?searchflag=DDVALUE' + '&Param3=67' + '&Param4=homescreen');
  }
  fetchPODTerminalList(pod: any, rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.PODTERMINAL + '?PortPK=' + pod.pod_pk, '&RbOption=' + rb_option);
  }
  fetchVoyageList(rb_option: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.VOYAGE + '?RbOption=' + rb_option);
  }
  fetchSettings() {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.FETCHSETTINGS);
  }
  saveSettings(body: any) {
    return this.appService.post(APIENDPOINT.DOCUMENTATION.MANIFEST.SAVESETTINGS, body);
  }
  getRblList(datafilter?: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.FETCHRBLLIST,datafilter);
  }
  getRblDetailList(datafilter?: any) {
    return this.appService.get(APIENDPOINT.DOCUMENTATION.MANIFEST.FETCHRBLDETAILLIST,datafilter);
  }
  printRBLhManifest(body: any) {
    return this.appService.print(APIENDPOINT.DOCUMENTATION.MANIFEST.PRINTRBLWISE, {}, body);
  }
}
