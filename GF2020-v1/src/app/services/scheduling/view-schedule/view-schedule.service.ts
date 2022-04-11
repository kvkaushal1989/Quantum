import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewScheduleService {

  constructor(private appService: AppService) { }
  public getViewScheduleList(userParams?: any, page: number= 1): Observable<any> {
    let params = new HttpParams();
    params = params.append('usermasterfk', userParams.usermasterfk);
    params = params.append('commercial_schedule_hdr_pk', userParams.commercial_schedule_hdr_pk);
    params = params.append('fromportfk', userParams.fromport_fk);
    params = params.append('toportfk', userParams.toport_fk);
    params = params.append('fromdate', userParams.from_date);
    //params = params.append('todate', userParams.to_date);
    if(userParams.to_date !== null && userParams.to_date !== '') {
      params = params.append('todate', userParams.to_date);
    }
    params = params.append('is_active', userParams.is_active);
    params = params.append('searchflag', userParams.searchflag);

    return this.appService.getMethod(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.FETCH_VIEWSCHEDULE_LIST, params, page);
  }
  getViewScheduleFromList(toPortFk) {
    return this.appService.get(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.FETCH_FROM_LIST + '?fromportfk=' +toPortFk);
  }
  getViewScheduleColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=40');
  }
  getViewScheduleToList(fromPortFK) {
    return this.appService.get(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.FETCH_TO_LIST + '?toportfk=' + fromPortFK);
  }
 
  getRecentSearchList(usermasterfk : any) {
    return this.appService.get(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.FETCH_RECENT_SEARCH_LIST + '?usermasterfk=' + usermasterfk);
  }

  public deactivateViewSchedule(body: any): Observable<any> {
    return this.appService.put(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.DEACTIVATE_VIEWSCHEDULE, body);
  }
 
  public deleteViewSchedule(commercial_schedule_hdr_pk: any) {
    return this.appService.delete(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.DELETE_VIEWSCHEDULE + '?commercial_schedule_hdr_pk=' + commercial_schedule_hdr_pk);
  }
  public printPDFSummary(body: any) {
    return this.appService.print(APIENDPOINT.SCHEDULING.VIEW_SCHEDULE.PRINTUMMARY, {}, body);
  }
}
