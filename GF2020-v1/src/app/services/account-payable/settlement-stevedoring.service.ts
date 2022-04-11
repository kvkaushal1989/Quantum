import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettlementStevedoringService {

constructor(private apiService: AppService) { }

public getColumnConfig(userpk: any) {
  return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=141');
}

getPortDropdown(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHPORTDROPDOWN, params);
}
public getVoyageDropdown(params ?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHVOYAGEDROPDOWN, params);
}
public getProcessDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.PROCESSLIST + '?searchflag=ddvalue' + '&Param3=132' + '&Param4=process');
}
public getStatusDropdownsList() {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.PROCESSLIST + '?searchflag=ddvalue' + '&Param3=141' + '&Param4=status');
}
getOutstandingReport(userParams?: any, page: number=1): Observable<any> {
  let params = new HttpParams();
  if(userParams.voutype){
    params = params.append('voutype', userParams.voutype);
  }
  if(userParams.portfks) {
    params = params.append('portfks', userParams.portfks);
  }
 if(userParams.cshfks) {
  params = params.append('cshfks', userParams.cshfks);
 }
  if(userParams.status) {
    params = params.append('status', userParams.status);
  }
  
  if(userParams.startdate){
    params = params.append('startdate', userParams.startdate);
  }
  if(userParams.enddate){
    params = params.append('enddate', userParams.enddate);
  }
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.getMethod(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHOUTSTANDINGREPORT, params,page);
}
getsettledReport(userParams?: any, page: number=1): Observable<any> {
  let params = new HttpParams();
  if(userParams.voutype){
    params = params.append('voutype', userParams.voutype);
  }
  if(userParams.portfks) {
    params = params.append('portfks', userParams.portfks);
  }
 if(userParams.cshfks) {
  params = params.append('cshfks', userParams.cshfks);
 }
  if(userParams.status) {
    params = params.append('status', userParams.status);
  }
  
  if(userParams.startdate){
    params = params.append('startdate', userParams.startdate);
  }
  if(userParams.enddate){
    params = params.append('enddate', userParams.enddate);
  }
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.getMethod(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHSETTLEDREPORT, params,page);
}
getarchiveReport(userParams?: any, page: number=1): Observable<any>  {
  let params = new HttpParams();
  if(userParams.voutype){
    params = params.append('voutype', userParams.voutype);
  }
  if(userParams.portfks) {
    params = params.append('portfks', userParams.portfks);
  }
 if(userParams.cshfks) {
  params = params.append('cshfks', userParams.cshfks);
 }
  if(userParams.status) {
    params = params.append('status', userParams.status);
  }
  
  if(userParams.startdate){
    params = params.append('startdate', userParams.startdate);
  }
  if(userParams.enddate){
    params = params.append('enddate', userParams.enddate);
  }
  params = params.append('LoggedInUser', userParams.LoggedInUser);
  return this.apiService.getMethod(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHARCHIVELIST, params,page);
}
getVoyageInfo(dataFilter?: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHVOYAGEINFO, dataFilter);
}
getfetchResultList(dataFilter: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHRESULTLIST, dataFilter);
}
getfetchpopupResultList(dataFilter: any) {
  return this.apiService.get(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.FETCHPOPUPRESULTLIST, dataFilter);
}

// save table modified data
saveSummaryData(dataFilter?: any) {
  return this.apiService.post(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.SAVEVOUCHERDATA, dataFilter);
}

public printPDFSummary(body: any) {
  return this.apiService.print(APIENDPOINT.ACCOUNT_PAYABLE.SETTLEMENT_STEVEDORING.PRINTUMMARY, {}, body);
}

}
