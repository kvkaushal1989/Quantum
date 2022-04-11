import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private apiService: AppService) { }

  //#region Booking Report Status

  getReportPortList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.PORTLIST, param);
  }

  getReportTerminalList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.TERMINALLIST, param);
  }

  getReportServiceList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.SERVICELIST, param);
  }

  getReportVoyageList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VOYAGELIST, param);
  }

  getReportCustomerList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.CUSTOMERLIST, param);
  }

  viewReportByPort(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VIEWREPORTBYPORT, param);
  }

  viewReportByTerminal(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VIEWREPORTBYTERMINAL, param);
  }

  viewReportByService(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VIEWREPORTBYSERVICE, param);
  }

  viewReportByVoyage(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VIEWREPORTBYVOYAGE, param);
  }

  viewReportByCustomer(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.VIEWREPORTBYCUSTOMER, param);
  }

  showBookingSummary(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.GETBOOKINGSUMMARY, param);
  }

  confirmUser(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.USERACCESS, param);
  }

  downloadFile(body1: any) {
    // const body: any = {
    //   usermasterfk: body1.usermasterfk,
    //   reportflag: body1.reportflag,
    //   portmasterfks: body1.portmasterfks,
    //   terminalmasterfks: body1.terminalmasterfks,
    //   servicedefinitionfk: body1.servicedefinitionfk,
    //   cshfks: body1.cshfks,
    //   customermasterfks: body1.customermasterfks,
    //   reporttype: body1.reporttype,
    //   booking_date: body1.booking_date,
    //   Thou_Sep: body1.Thou_Sep,
    //   Dec_Sep: body1.Dec_Sep
    // };
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.BOOKING_REPORT.PRINTREPORT, body1);
  }
  //#endregion

  //#region Daily Booking Report Status

  getDailyReporttPortList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.PORTLIST, param);
  }

  getDailyReporttTerminalList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.TERMINALLIST, param);
  }

  getDailyReporttServiceList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.SERVICELIST, param);
  }

  getDailyReporttVoyageList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VOYAGELIST, param);
  }

  getDailyReporttCustomerList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.CUSTOMERLIST, param);
  }

  dailyViewReportByPort(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VIEWREPORTBYPORT, param);
  }

  dailyViewReportByTerminal(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VIEWREPORTBYTERMINAL, param);
  }

  dailyViewReportByService(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VIEWREPORTBYSERVICE, param);
  }

  dailyViewReportByVoyage(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VIEWREPORTBYVOYAGE, param);
  }

  dailyViewReportByCustomer(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.DAILY_BOOKING_REPORT.VIEWREPORTBYCUSTOMER, param);
  }

  //#endregion

  //#region vessel status report

  getVesselReportServiceList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.VESSEL_STATUS_REPORT.SERVICELIST, param);
  }

  getVesselReporttVoyageList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.VESSEL_STATUS_REPORT.VOYAGELIST, param);
  }

  getVesselStatusList(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.VESSEL_STATUS_REPORT.VSTATUSLIST, param);
  }

  viewVesselStatusReport(param: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.VESSEL_STATUS_REPORT.VIEWREPORT, param);
  }
  public printPDFSummary(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.VESSEL_STATUS_REPORT.PRINTUMMARY, {}, body);
  }

////#endregion
}
