import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClauseMasterService {

  constructor(private apiService: AppService) { }

 public getClauseMaster(userParams?: any, page: number= 1): Observable<any> {
    return this.apiService.getMethod(APIENDPOINT.SETTINGS.CLAUSEMASTER.FETCH);
  }
  public getColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=17');
  }
  public saveClauseMaster(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.CLAUSEMASTER.SAVE, body);
  }
  public getDropdown(): Observable<any> {
    return this.apiService.getMethod(APIENDPOINT.SETTINGS.CLAUSEMASTER.DROPDOWN);
  }
  public deactivateClause(clausePK: any): Observable<any> {
    return this.apiService.put(APIENDPOINT.SETTINGS.CLAUSEMASTER.DEACTIVATE + '?ClausePK=' + clausePK, {});
  }
  public deleteClause(clausePK: any): Observable<any> {
    return this.apiService.delete(APIENDPOINT.SETTINGS.CLAUSEMASTER.DELETE + '?ClausePK=' + clausePK);
  }

}

