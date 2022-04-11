import { Injectable } from '@angular/core';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { AppService } from 'src/app/shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class OperationalScheduleService {

  constructor(private apiService: AppService) { }

  public getPortList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.FETCH_PORT, dataFilter);
  }
  public getTerminalList(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.FETCH_TERMINAL, dataFilter);
  }
  public getDropdown() {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.GET_DROPDOWN);
  }
  public getOperationalColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=18');
  }
  public fetchSchedule(dataFilter: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.FETCH_SCHEDULE, dataFilter);
  }
  public saveSchedule(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.SAVE_SCHEDULE, data);
  }

  public fetchVesselAssets(data: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.FETCH_ASSET_SCHEDULE, data);
  }

  fetchVesselAssetsDropdown(data: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.FETCH_ASSET_DROPDOWN, data);
  }

  validateBooking(data: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.VALIDATE_BOOKING, data);
  }

  validateService(data: any) {
    return this.apiService.get(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.VALIDATE_SERVICE, data);
  }

  singleAssetUpdate(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.SINGLE_ASSET_UPDATE, data);
  }

  multipleAssetUpdate(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.MULTIPLE_ASSET_UPDATE, data);
  }

  public addTerminal(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.ADD_TERMINAL, data);
  }
  public addPort(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.ADD_PORT, data);
  }
  public modifyData(data: any) {
    return this.apiService.post(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.MODIFY_DATA, data);
  }

  public deleteVoyage(data: any) {
    return this.apiService.delete(APIENDPOINT.SCHEDULING.OPERATIONAL_SCHEDULE.DELETE_DATA, data);
  }

}
