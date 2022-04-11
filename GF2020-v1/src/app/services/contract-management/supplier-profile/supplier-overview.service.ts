import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';
import { BehaviorSubject } from 'rxjs';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierOverviewService {


  public isPopupOrg: any;
  public supplierDetails: any;

  constructor(private aapService: AppService,
              private mockJsonService: MockJsonService) {
    this.isPopupOrg = false;
    this.supplierDetails = new BehaviorSubject<any>(null);
  }
  public getSupplierOverview(suppliermasterpk: any) {
     return this.aapService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.FETCHOVERVIEW + '?suppliermasterpk=' + suppliermasterpk);
    // return this.mockJsonService.get(APIENDPOINT.CONTRACTMANAGEMENT.SUPPLIERPROFILE.FETCHOVERVIEW + '?suppliermasterpk=' + suppliermasterpk);
  }
}
