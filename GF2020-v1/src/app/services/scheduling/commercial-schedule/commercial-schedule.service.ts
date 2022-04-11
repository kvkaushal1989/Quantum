import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CommercialScheduleService {

  constructor(private appService: AppService) { }
  public getCommercialScheduleList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('usermasterfk', userParams.usermasterfk);
    params = params.append('commercial_schedule_hdr_pk', userParams.commercial_schedule_hdr_pk);
    params = params.append('fromportfk', userParams.fromport_fk);
    params = params.append('toportfk', userParams.toport_fk);
    params = params.append('fromdate', userParams.from_date);
    if(userParams.to_date !== null && userParams.to_date !== '') {
      params = params.append('todate', userParams.to_date);
    }
    params = params.append('is_active', userParams.is_active);
    params = params.append('searchflag', userParams.searchflag);
    params = params.append('CSHPK', userParams.CSHPK);

    return this.appService.getMethod(APIENDPOINT.SCHEDULING.COMMERCIAL_SCHEDULE.FETCH_COMMERCIALSCHEDULE_LIST, params, page);
  }
  getCommercialScheduleFromList(fromPortFK) {
    return this.appService.get(APIENDPOINT.SCHEDULING.COMMERCIAL_SCHEDULE.FETCH_FROM_LIST + '?fromportfk=' + fromPortFK);
  }
  getCommercialScheduleToList(toPortFK) {
    return this.appService.get(APIENDPOINT.SCHEDULING.COMMERCIAL_SCHEDULE.FETCH_TO_LIST + '?toportfk=' + toPortFK);
  }
  printPDF(body: any) {
    return this.appService.print(APIENDPOINT.SCHEDULING.COMMERCIAL_SCHEDULE.PRINT, {}, body);
  }
  getRecentSearchList(usermasterfk: any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.COMMERCIAL_SCHEDULE.FETCH_RECENT_SEARCH_LIST + '?usermasterfk=' + usermasterfk);
  }
  filterByData(inputValue: any, list: any): any {
    list.forEach((cdls, cdlsi) => {
      cdls.polTerminalList = cdls.polTerminalList.filter((o) => {
          return Object.keys(o).some((k) => {
            return o[k] ? o[k].toString().toLowerCase().indexOf(inputValue) !== -1 : '';
          });
      });
    });
    return list;
  }
}
