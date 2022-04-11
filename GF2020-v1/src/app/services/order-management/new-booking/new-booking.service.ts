import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { BookingDetails, ContainerTypelist, BookingFreightList, BookingOtherFreightList, BookingRouteList, AllocationDetails } from 'src/app/models/order-management/new-booking/new-booking';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewBookingService {
  filename: any;
  public newBookingBhSubject: any = new BehaviorSubject(null);

  constructor(private apiService: AppService) {
    // this.newBookingBhSubject = new BehaviorSubject<any>(null);
  }

  getBookingColumnConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=54');
  }
  fetchCustDropDownList() {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCUSTDROPDOWN);
  }

  fetchPortDropdownList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETPORTDROPDOWN, reqInput);
  }

  fetchSchedule(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHSCHEDULE, reqInput);
  }

  fetchRecentSearch(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.RECENTSEARCH, reqInput);
  }

  getNewIncome(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETNEWINCOME, reqInput);
  }

  fetchSettings(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHSETTINGS, reqInput);
  }

  saveSettings(body: any) {
    return this.apiService.postMethod(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.SAVESETTINGS, body);
  }

  fetchDropDowns(body: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, body);
  }

  fetchBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHBOOKING, reqInput);
  }

  fetchAvgWeight(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETAVGWGT, reqInput);
  }
  fetcHBookingCODAvgWeight(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHCODAVGWT, reqInput);
  }
  fetchCODBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHCODBOOKING, reqInput);
  }

  fetchAllocation(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.GETALLOCATION, reqInput);
  }
  savecodBooking(body: any) {
    return this.apiService.postMethod(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.SAVECODBOOKING, body);
  }

  saveBooking(body: any) {
    return this.apiService.postMethod(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.BOOKINGSAVE, body);
  }

  updateBooking(body: any) {
    return this.apiService.put(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.BOOKINGUPDATE, body);
  }

  // /api/Booking/GetCharges
  getCharges(reqInput: any) {
    return this.apiService.post(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.GETCHARGES, reqInput);
  }

  // /api/Booking/GetCharges
  getOtherCharges(reqInput: any) {
    return this.apiService.post(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.GETOTHERCHARGES, reqInput);
  }

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

  downloadFile(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.PRINT, {}, body);
  }
  // downloadFileForAck(body: any) {
  //   return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.PRINT,{},body);
  // }
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

  fetchReSchedule(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHRESCHEDULE, reqInput);
  }

  fetchReBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHREBOOKING, reqInput);
  }
  fetchValidateBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHVALIDATEBOOKING, reqInput);
  }
  fetchDestinationDropdown(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHDESTDROPDOWN, reqInput);
  }
  fetchScheduleList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHSCHEDULELIST, reqInput);
  }
  fetchvalidatecharge(body: any) {
    return this.apiService.postMethod(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FETCHVALIDATECHARGE, body);
  }

  saveReBooking(body: any) {
    return this.apiService.postMethod(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.REBOOKINGSAVE, body);
  }

  forkJoin() {
    const reqests = [
      { url: APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCUSTDROPDOWN, method: 'get', request: {}, response: null },
      { url: APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETPORTDROPDOWN, method: 'get', request: {}, response: null },
      { url: APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETPORTDROPDOWN, method: 'get', request: {}, response: null }
    ];

    return this.apiService.forkJoinsCommon(reqests);
  }

  //#region Init defaults
  initBooking(gridHeaderObj: any, vslObj: any): BookingDetails {
    const bookingDetails: BookingDetails = {
      bookingmasterpk: 0,
      companyfk: 0,
      bookingid: null,
      // bookingdate: gridHeaderObj.formDate,
      bookingdate: new Date(),
      referencetype: null,
      referencefk: 0,
      referencenumber: null,
      customerfk: gridHeaderObj.selectedCustomer,
      shipperfk: gridHeaderObj.selectedCustomer,
      consigneefk: gridHeaderObj.selectedCustomer,
      polfk: vslObj.polportpk,
      polterfk: vslObj.polterpk,
      polagentfk: null,
      podfk: vslObj.podportpk,
      podterfk: vslObj.podterpk,
      podagentfk: null,
      tosfk: 1,
      bookingtype: 1,
      genteus: 0, // vslObj.gridBookingDetails.ctypelist[0].genqty,
      reeferteus: 0, // vslObj.gridBookingDetails.ctypelist[0].reeferqty,
      hazmatteus: 0, // vslObj.gridBookingDetails.ctypelist[0].hazmatqty,
      ladenwgt: 0,
      totalwgt: 0, // vslObj.gridBookingDetails.ctypelist[0].totalwgt,
      emptyteus: 0, // vslObj.gridBookingDetails.ctypelist[0].emptyqty,
      emptywgt: 0,
      totalteus: 0, // vslObj.gridBookingDetails.ctypelist[0].totalteus,
      bookingstatus: 'O',
      mloblnr: null,
      bkgcur: 0,
      bkgamt: 0,
      is_active: 1,
      created_by_fk: null,
      last_updated_by_fk: null,
      version_no: null,
      // allocteus: null,
      // bkgteus: null,
      // availableteus: null,
      // overbkdteus: null,
      // customercode: null,
      // customername: null,
      // customerimage: null,
      // bkgcurid: null,
      // allocationpk: null,
      // allocationtype: null,
      // servicedefintionfk: 0,
      priority: 1,
      reNominatePK: 0,
      commercial_schedule_hdr_fk: vslObj.commercial_schedule_hdr_pk,
      ctypelist: this.initContainerTypelist(),
      // bkgFrtList: BookingFreightList[],
      // bkgOthFrtList: BookingOtherFreightList[],
      bkgRouteList: this.initBookingRouteList(vslObj),
      allocDtl: this.initAllocationlist(),
      allocationChecks: { isSummaryChecked: false, isAutoWeightChecked: false }
    };

    return bookingDetails;
  }

  initBookingRouteList(obj: any): BookingRouteList[] {
    const routeList: BookingRouteList[] = [{
      bookingmasterfk: 0,
      bookingroutingpk: 0,
      slno: 1,
      polfk: obj.polportpk,
      polterfk: obj.polterpk,
      podfk: obj.podportpk,
      podterfk: obj.podterpk,
      loadcstfk: obj.polcstpk,
      dischargecstfk: obj.podcstpk,
      orgloadcstfk: 0,
      orgdiscstfk: 0,
      rolloverremarks: null,
      rolloverdate: null,
      rolloverby: null,
      is_active: 1,
      created_by_fk: null,
      created_on: null,
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: null
    }];

    return routeList;
  }

  initContainerTypelist(): ContainerTypelist[] {
    const ctypeList: ContainerTypelist[] = [{
      bookingctypepk: 0,
      bookingmasterfk: 0,
      containersize: 'Total',
      genqty: 0,
      reeferqty: 0,
      hazmatqty: 0,
      ladenteus: null,
      ladenwgt: null,
      emptyqty: 0,
      emptywgt: 0,
      totalteus: 0,
      totalwgt: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: null,
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: null,
      preference: 0,
    }, {
      bookingctypepk: 0,
      bookingmasterfk: 0,
      containersize: '20',
      genqty: 0,
      reeferqty: 0,
      hazmatqty: 0,
      ladenteus: null,
      ladenwgt: null,
      emptyqty: 0,
      emptywgt: 0,
      totalteus: 0,
      totalwgt: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: null,
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: null,
      preference: 0,
    }, {
      bookingctypepk: 0,
      bookingmasterfk: 0,
      containersize: '40',
      genqty: 0,
      reeferqty: 0,
      hazmatqty: 0,
      ladenteus: null,
      ladenwgt: null,
      emptyqty: 0,
      emptywgt: 0,
      totalteus: 0,
      totalwgt: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: null,
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: null,
      preference: 0,
    }, {
      bookingctypepk: 0,
      bookingmasterfk: 0,
      containersize: 'HC',
      genqty: 0,
      reeferqty: 0,
      hazmatqty: 0,
      ladenteus: null,
      ladenwgt: null,
      emptyqty: 0,
      emptywgt: 0,
      totalteus: 0,
      totalwgt: 0,
      is_active: 1,
      created_by_fk: null,
      created_on: null,
      last_updated_by_fk: null,
      last_updated_on: null,
      version_no: null,
      preference: 0,
    }];

    return ctypeList;
  }

  initAllocationlist(): AllocationDetails[] {
    const ctypeList: AllocationDetails[] = [{
      allocDesc: null,
      teu: 0,
      reefer: 0,
      hazmat: 0,
      wgt: 0,
      preference: 0
    }];

    return ctypeList;
  }
  //#endregion

  //#region Validate
  validateAllocation(data: any): boolean {
    let sum = 0;
    if (data.length > 0) {
      data.forEach(v => {
        sum = sum + v.genqty + v.reeferqty + v.hazmatqty + v.emptyqty + v.totalteus + v.totalwgt;
      });
    }
    return sum > 0;
  }
  //#endregion

  //#region Credit Policy
  getCreditPolicy(param: any) {
    return this.apiService.get(APIENDPOINT.ACCOUNT_RECEIVABLE.CREDITPOLICY.GETCREDITPOLICYOFCUSTOMER, param);
  }
  //#endregion

  getLocationPK(body: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETLOCATIONPK, body);
  }

  checkIsApprover(body: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.CHECKAPPROVER, body);
  }

  getRestrictionList(body: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.RESTRICTIONLIST, body);
  }

  sendRestrictionMail(body: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.SENDRESTRICTIONMAIL, body);
  }
  downloadmanualFile(body: any) {
    return this.apiService.print(APIENDPOINT.ORDERMANAGEMNT.RBL.MANUALPRINT, {}, body);
  }

  // this.newBookingBhSubject = new BehaviorSubject<any>(null);

  fetchFriegthRevision(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETFRIEGHTREVISION, reqInput);
  }

  fetchChargeList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCHARGELIST, reqInput);
  }

  fetchContainerList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCONTAINERLIST, reqInput);
  }

  fetchCommonGroupList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCOMMONGROUPLIST, reqInput);
  }

  fetchCurrencyList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCURRID, reqInput);
  }

  fetchCustomerList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETCUSTOMERLIST, reqInput);
  }

  fetchVatList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETVATLIST, reqInput);
  }

  saveFrieghtData(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.FRIEGHTSAVE, reqInput);
  }
  getvalidatevatos(reqInput: any) {
    return this.apiService.post(APIENDPOINT.ORDERMANAGEMNT.NEW_BOOKING.GETVALIDATEVATOS, reqInput);
  }


}
