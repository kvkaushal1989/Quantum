import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class AssetOverviewService {

  constructor(private appService: AppService) { }

  public getAssetOverview(vesselmasterpk: any) {
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.ASSETOVERVIEW.GETASSETOVERVIEW + '?VesselmasterPk=' +vesselmasterpk)
  }
  public printPDF(body: any) {
    return this.appService.print(APIENDPOINT.VESSELOPERATIONS.ASSETOVERVIEW.PRINT, {}, body);
  }
}
