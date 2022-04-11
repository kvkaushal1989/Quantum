import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(
    private apiService: AppService
  ) { }

  public getVoyageList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.voyage, param);
  }

  public getInvoiceList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.INVOICE, param);
  }

  public getPoList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.POLIST, param);
  }

  public getCollectionList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.COLLECTION, param);
  }

  public getCustomerList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.CUSTOMER, param);
  }
  public getCollectionsColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=109');
  }
  public getOpenCollList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.OPENCOLL, param);
  }
  public getPartialCollList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.PARTIALCOLL, param);
  }
  public getRecieveCollList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.RECIEVECOLL, param);
  }
  public getArchiveCollList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.ARCHIEVECOLL, param);
  }

  public saveSetting(params: any) {
    return this.apiService.postMethod(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.SAVESETTING, params);
  }
  public getSetting(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.GETSETTING, param);
  }
  public getCollDetailsHeader(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.HEADER, param);
  }
  public getCollDetails(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.DETAILS, param);
  }

  public getDataSourceList() {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.DATASOUCE);
  }
  public getPaymentModeList() {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.PAYMENT);
  }
  public getBankNameList(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.BANK, param);
  }
  public saveCollection(params: any) {
    return this.apiService.postMethod(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.SAVECOLL, params);
  }
  public getPastColletion(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.PASTCOLL, param);
  }
  public getReceiptPopup(param?: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.RPTCOLL, param);
  }
  public downloadFile(body: any) {
    return this.apiService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.COLLECTION.PRINT, {}, body);
  }




}
