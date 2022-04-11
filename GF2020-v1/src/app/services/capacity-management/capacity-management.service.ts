import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpParams } from '@angular/common/http';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CapacityManagementService {

  constructor(private apiService: AppService) { }

  fetchList(reqInput: any) {
    let params = new HttpParams();

    params = params.append('Status', reqInput.Status || 1);
    params = params.append('SearchValue', reqInput.SearchValue);

    return this.apiService.getMethod(APIENDPOINT.SCHEDULING.VCS.FETCHVOYAGECONTROLSCHEDULELIST, params, reqInput.PageNumber);
  }

  fetchSettings(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHCAPSETTINGS, reqInput);
  }

  fetchCAPSETTINGS() {
    // https://localhost:44313/api/DropDown/FetchDropdown?searchflag=CAPSETTINGS
  }

  saveSettings(body: any) {
    return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.SAVECAPSETTINGS, body);
  }

  fetchPortServices(reqInput: any = { searchflag: 'PORTSERVICE' }) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHDROPDOWN, reqInput);
  }

  fetchFilterCapacityManagement(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FILTERCAPACITYMANAGEMENT, reqInput);
  }

  fetchGraph(reqInput: any) {
    // https://152.67.3.226/GF2020DEVAPI/api/Booking/FetchGraph?polcstpk=746
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHGRAPH, reqInput);
  }

  formatGraphData(data: any, list: any): any {
      list.max = data.vsllist[0];
      list.min = data.bkglist[0];
      list.lineChartData.push({data: data.vsllist, borderWidth: 0, pointRadius: 0});
      list.lineChartData.push({data: data.bkglist, borderWidth: 0, pointRadius: 0});
      list.lineChartData.push({data: data.daylist, borderWidth: 0, pointRadius: 0});

      if (data.daylist.length > 0) {
        list.lineChartLabels = [];
        data.daylist.forEach(v => {
          list.lineChartLabels.push('');
        });
      }

      list.lineChartColors = [{
        borderColor: 'rgba(229, 69, 109, 1)',
        backgroundColor: 'rgba(229, 69, 109, 0)'
      }, {
        borderColor: 'rgba(57,189,134,1)',
        backgroundColor: 'rgba(0,0,0,0)'
      }, {
        borderColor: 'rgba(57,189,134,1)',
        backgroundColor: 'rgba(57,189,134, 0)'
      }];

      list.lineChartOptions = {
        responsive: true,
        scales: {
          xAxes: [{
              display: false
          }], yAxes: [{
            display: true,
            ticks: {
              stepSize: 100,
              max : data.vsllist[0] || 500,
              min: data.bkglist[0] || 0
            }
          }]
        }
      };

      return list;
  }

  fetchViewCutOff(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHVIEWCUTOFF, reqInput);
  }

  fetchCustomerBookingSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHCUSTBOOKINGS, reqInput);
  }

  fetchBookingSummary(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHBOOKINGSUMMARY, reqInput);
  }

  fetchManageOverBooking(reqInput: any) {
    return this.apiService.get(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.FETCHMANAGEBOOKING, reqInput);
  }

  approveBooking(body: any) {
    return this.apiService.postMethod(APIENDPOINT.CAPACITY_MANAGEMENT.CAPACITYMANAGEMENT.APPROVE_BOOKING, body);
  }

  rejectBooking(body: any) {
    return this.apiService.postMethod(APIENDPOINT.SCHEDULING.VCS.SAVECOMMERCIALSCHEDULEVCS, body);
  }

}
