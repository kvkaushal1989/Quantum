import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganisationOverviewService {

 
  public isPopupOrg: any;
  public orgDetails: any;

  constructor(private appService: AppService) {
    this.isPopupOrg = false;
    this.orgDetails = new BehaviorSubject<any>(null);
  }
  public getOrganisationOverview(orgPk: any) {
    return this.appService.get(APIENDPOINT.SETTINGS.ORGANISATION.FETCHOVERVIEW + orgPk);
  }
  public getOrganisationsList(orgPK: any,userParams?: any,) {
    let params = new HttpParams();
    params = params.append('LoggedInUser', userParams.LoggedInUser);
    return this.appService.getMethod(APIENDPOINT.SETTINGS.ORGANISATION.FETCH + '?CompanyPK=' + orgPK,params);
  }
  public printPDF(body: any) {
    return this.appService.print(APIENDPOINT.SETTINGS.ORGANISATION.PRINT, {}, body);
  }
}
