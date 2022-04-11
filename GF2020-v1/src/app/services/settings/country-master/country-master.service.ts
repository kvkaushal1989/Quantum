import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CountryMasterService {

  constructor(private apiService: AppService) { }

  public getCountryMaster(userParams?: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    // params = params.append('CountryPk', userParams.CountryPk);
    params = params.append('Status', userParams.Status);
    params = params.append('SearchValue', userParams.SearchValue);

    return this.apiService.getMethod(APIENDPOINT.SETTINGS.COUNTRY.FETCH, params, page);
  }

  public getCountryList(dataFilter?) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COUNTRY.FETCHCOUNTRY_API, dataFilter);
  }

  public getRegionsList(dataFilter) {
    return this.apiService.get(APIENDPOINT.SETTINGS.REGION.FETCH, dataFilter);
  }

  public getCurrenciesList(dataFilter) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COUNTRY.FETCH_CURRENCY, dataFilter);
  }
  gettimezoneList(dataFilter) {
    return this.apiService.get(APIENDPOINT.SETTINGS.COUNTRY.FETCH_TIMEZONE, dataFilter);
  }

  public getAreasList(dataFilter) {
    // return this.apiService.get(APIENDPOINT.SETTINGS.AREA.FETCH + '?regionPK=' + dataFilter.regionPk);
    return this.apiService.get(APIENDPOINT.SETTINGS.AREA.FETCH, dataFilter);
  }

  public saveCountryMaster(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.COUNTRY.SAVE, body);
  }

  public saveSettings(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.COMMON.SAVEGRIDPREF, body);
  }

  public deleteCountry(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.COUNTRY.DELETE, body);
  }

  public deactivateCountry(body: any): Observable<any> {
    return this.apiService.postMethod(APIENDPOINT.SETTINGS.COUNTRY.DEACTIVATE, body);
  }

  public forkJoin(): Observable<any> {
    const reqests = [
      { url: APIENDPOINT.SETTINGS.COUNTRY.FETCH_CURRENCY, method: 'get' },
      { url: APIENDPOINT.SETTINGS.REGION.FETCH, method: 'get' },
      { url: APIENDPOINT.SETTINGS.COUNTRY.FETCHCOUNTRY_API, method: 'get' }
    ];

    return this.apiService.forkJoinsCommon(reqests);
  }

  public compareFormData(originalData: any, formData: any): boolean {
    for (const data of Object.keys(formData)) {
      if ((typeof originalData[data] === 'object') && originalData[data] !== null) {
        if (originalData[data][0].text !== formData[data][0].text) {
          return true;
        }
      } else {
        if (formData[data] !== originalData[data]) {
          return true;
        }
      }
    }

    return false;
  }

  public getColumnConfig(userFK: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userFK + '&FormFK=1');
  }

  confiDataList(colList: any, dataList: any): any {
    // let formatList:any[] = [];
    // let datalsit1: any = JSON.parse(JSON.stringify(dataList));
    // datalsit1.forEach((data, di)=>{
    //   colList.forEach((col, ci)=>{
    //     if(col.field !== 'HiddenField'){
    //       data[col.field] = data[col.field];

    //       // if(col.field === 'flag'){
    // tslint:disable-next-line: max-line-length
    //       //   data[col.field] = '<div class="flag-img"><img class="flag-img" src="'+data[col.field]+'" style="width: 48px; height: 48px; vertical-align: middle;border-radius: 40px;"></div>';
    //       // }

    //       // if(col.field === 'countryName'){
    //       //   if(!col.isHyperLink){
    //       //     data[col.field] = "<div class='td-coll'><div class='td-label1'><a> "+data[col.field]+" </a></div> "+
    //       //                           "<div class='table-anchor-tag'> "+
    //       //                             "<span> "+data['countryCode2']+" </span> "+
    //       //                             " | <span> "+data['countryCode3']+" </span>"+
    //       //                           "</div></div>";

    //       //   }else{
    //       //     data[col.field] = data[col.field]
    //       //   }
    //       // }

    //       // if(col.field === 'currencyName'){
    //       //   data[col.field] = '<div class="currency-symbol"><span class="currency-symbol">'+data["currencySymbol"]+'</span></div> <div class="table-anchor-tag"> <span class="table-anchor-tag">'+data[col.field]+'</span></div>';
    //       // }

    //       // if(col.field === 'Location'){
    //       //   data[col.field] = '<div class="table-anchor-tag"><a class="table-anchor-tag" (click)="onRowSelectionEmit(lisObj)">'+data['locationList']+'</a></div>';
    //       // }

    //       // if(col.field === 'areaName'){
    //       //   data[col.field] = '<div class="currency-symbol"><span class="currency-symbol">'+data[col.field]+'</span></div><div class="table-anchor-tag"><span class="table-anchor-tag">'+data['regionName']+'</span></div>';
    //       // }

    //     }
    //   });

    //   formatList.push(data)
    // });

    return dataList;
  }
}
