import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { BehaviorSubject } from 'rxjs';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CustomerOverviewService {

  public isPopupOrg: any;
  public customerDetails: any;

  constructor(private aapService: AppService) {
    this.isPopupOrg = false;
    this.customerDetails = new BehaviorSubject<any>(null);
  }
  public getCustomerOverview(customerPk: any) {
    return this.aapService.get(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.FETCHOVERVIEW + '?customermasterpk=' + customerPk);
  }
  public getCustomerList(orgPK: any) {
    return this.aapService.getMethod(APIENDPOINT.CONTRACTMANAGEMENT.CUSTOMERMASTER.GETCUSTOMERDETAILS + orgPK);
  }
}
