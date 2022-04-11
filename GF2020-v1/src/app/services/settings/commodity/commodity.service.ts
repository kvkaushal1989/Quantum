import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private apiService: AppService) { }

  public getCommodityList(dataFilter?: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COMMODITY.FETCH + '?commoditycodeifk=' + dataFilter);
  }

  getCommodityDropdown() {
    return this.apiService.get(APIENDPOINT.SETTINGS.COMMODITY.DROPDOWN);
  }

  getCommodityGrpDropdown() {
    return this.apiService.get(APIENDPOINT.SETTINGS.COMMODITY.COMMODITYGRP);
  }

  getCommoditySubGrpDropdown(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COMMODITY.COMMODITYSUBGRP, dataFilter);
  }

  saveCommodity(dataFilter: any) {
    return this.apiService.post(APIENDPOINT.SETTINGS.COMMODITY.SAVECOMMODITY, dataFilter);
  }

  getComodityDetails(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COMMODITY.COMODITYDETAILS, dataFilter);
  }

  filterDataList(inputValue: any, list: any): any {
    list.forEach((cdls, cdlsi) => {
      const commodityListpk = [];
      cdls.commodityGroupList.forEach((element, cgi) => {
        element.commodityList = element.commodityList.filter(a => a.hscode.toLowerCase().includes(inputValue));
        if (element.commodityList.length > 0) {
          commodityListpk.push(element.commodityList[0].commoditymasterfk);
        }
      });
      console.log('commodityListpk => ', commodityListpk);
      cdls.commodityGroupList = cdls.commodityGroupList.filter(cgl => commodityListpk.indexOf(cgl.commoditymasterpk) !== -1);
    });

    return list;
  }
  filterByData(inputValue: any, list: any): any {
    list.forEach((cdls, cdlsi) => {
      const commodityListpk = [];
      cdls.commodityGroupList.forEach((element, cgi) => {
        element.commodityList = element.commodityList.filter((o) => {
          return Object.keys(o).some((k) => {
            return o[k] ? o[k].toString().toLowerCase().indexOf(inputValue) !== -1 : '';
          });
        });
        if (element.commodityList.length > 0) {
          commodityListpk.push(element.commodityList[0].commoditymasterfk);
        }
      });
      cdls.commodityGroupList = cdls.commodityGroupList.filter(cgl => commodityListpk.indexOf(cgl.commoditymasterpk) !== -1);
    });
    return list;
  }
  public deletingcommodity(inputParams: any) {
    return this.apiService.delete(APIENDPOINT.SETTINGS.COMMODITY.DELETECOMMODITY , inputParams);
  }
}

