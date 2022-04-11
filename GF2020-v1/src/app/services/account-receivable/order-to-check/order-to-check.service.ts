import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { OrderCheckObj } from 'src/app/models/account-recievable/order-to-check.model';

@Injectable({
  providedIn: 'root'
})
export class OrderToCheckService {

  constructor(private appService: AppService) { }

  public getOrderColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=116');
  }

  public getReportColumnConfig(userpk: any) {
    return this.appService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=80');
  }
  public getFilteredOrderList(dataFilter: any) {
    const body: any = {
      customer: dataFilter.customer_pk,
      voyage: dataFilter.voyage_pk,
      origin: dataFilter.origin_pk,
      tab_id: dataFilter.tab_id
    }
    return this.appService.get(APIENDPOINT.VESSELOPERATIONS.FIXEDCOST.FETCHFILTEREDLIST, body);
  }

  public getOrderDataList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.FETCHORDERLIST, dataFilter);
  }

  public fetchOTCSummary(dataFilter: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.FETCHORDERSUMMARY, dataFilter);
  }
  public getVoyageList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.VOYAGELIST, dataFilter);
  }

  public getOriginList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.ORIGINLIST, dataFilter);
  }

  public getCustomerList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.CUSTOMERLIST, dataFilter);
  }

  public getOrderList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.ORDERLIST, dataFilter);
  }

  public getInvoiceList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.INVOICELIST, dataFilter);
  }

  public getCollectionList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.COLLECTIONLIST, dataFilter);
  }

  public getDestinationList(dataFilter?: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.DESTINATIONLIST, dataFilter);
  }

  public getOrderSettings(dataFilter: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.ORDERSETTINGS, dataFilter);
  }
  
  public getOrderReport(dataFilter: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.INVOICING.INVOICEREPORT, dataFilter);
  }

  public saveSettings(dataFilter: any) {
    return this.appService.post(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.SAVESETTINGS, dataFilter);
  }

  public initSettings(): OrderCheckObj {
    let x: OrderCheckObj;
    x = {
      ordertocash_settings_pk: 0,
      show_on_load: 1,
      outstanding_based_on: 1,
      zero_os_archive_flag: true,
      set_value_archive_flag: true,
      set_archive_value: 1,
      is_active: 0,
      created_by_fk: 0,
      created_on: new Date().toISOString(),
      last_updated_by_fk: 0,
      last_updated_on: new Date().toISOString(),
      version_no: 0
    };
    return x;
  }

  getReportList(dataFilter: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.REPORTLIST, dataFilter);
  }

  getBookingSummary(dataFilter: any) {
    return this.appService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.FETCHORDERSUMMARY, dataFilter);
  }

  printInvoiceDetail(dataFilter?: any) {
    return this.appService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.PRINTSUMMARY + dataFilter, '');
  }

  invoicePrePrint(dataFilter?: any) {
    return this.appService.print(APIENDPOINT.ACCOUNT_RECEIVABLE.ORDER_TO_CHECK.INVOICEPREPRINT + dataFilter, '');
  }

}
