import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { AppService } from 'src/app/shared/services/app.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDefinitionService {
  showcofirmDate: boolean = false;
  constructor(
    private http: HttpClient,
    private apiService: AppService,
    public datepipe: DatePipe
  ) { }

  public getColumnsConfig(userpk: any) {
    return this.apiService.get(APIENDPOINT.COMMON.FETCHGRIDPREF + '?UserFK=' + userpk + '&FormFK=77');
  }
  public getServicePortList() {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.FETCHPORT);
  }
  public getToPortList(fromPortIds) {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.FETCHTOPORT + 'PODPK=0&POLPK=' + fromPortIds);
  }
  public generateService(inputParams: any) {
    const url = 'polpk=' + inputParams.polpk + '&PolTerPKs=' + inputParams.PolTerPKs + '&PODPK='
     + inputParams.PODPK + '&PodTerPKs=' + inputParams.PodTerPKs + '&StartDt=' + inputParams.StartDt +
     '&StartTime=' + inputParams.StartTime;
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.GENERATESERVICE + url);
  }

  public RegenerateMultiPortService(inputParams: any) {
    const url = 'polpk=' + inputParams.polpk + '&PolTerPKs=' + inputParams.PolTerPKs + '&PODPK='
     + inputParams.PODPK + '&PodTerPKs=' + inputParams.PodTerPKs + '&StartDt=' + inputParams.StartDt +
     '&StartTime=' + inputParams.StartTime + '&listSeqNo=' + inputParams.listSeqNo;
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.GENERATESERVICE + url);
  }

  public fetchServiceDetails(inputParams: any) {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.FETCHSERVICE + inputParams);
  }

  public fetchMultiVoyageDetails(inputParams: any) {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.FETCHMV + inputParams);
  }

  public getDropdownList(searchflag: any) {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.GETDROPDOWN + searchflag);
  }

  public saveServiceDefinition(inputParams: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.SAVESERVICE , inputParams);
  }
  public saveMultiVoyageService(inputParams: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.SAVEMULTIVOYAGESERVICE , inputParams);
  }

  public getVoyageDropdownList(key: any) {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.GETMULTIVOYAGEDROPDOWN + key );
  }

  public GenerateBaseVoy(inputParams: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.BASEVOY , inputParams);
  }
  public GenerateTempVoy(inputParams: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.TEMPVOY , inputParams);
  }
  public GetPreview() {
    return this.apiService.get(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.PREVIEWSERVICE );
  }
  public modifiedService(inputParams: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.MODIFIEDSERVICE , inputParams);
  }
  public  addConvoy(): any {
    const date = new Date();
    const convoys: any = {
      convoydtlsPk: 0,
      multivoyassetFk: 0,
      convoynr: 0,
      startday: 0,
      starttime: '',
      confirm_startdate:'',
      bargeFk: 0,
      bargeId: '',
      bargeName: '',
      oceantugFk: 0,
      oceantugId: '',
      oceantugName: '',
      rivertugFk: 0,
      rivertugId: '',
      rivertugName: '',
      isActive: 1,
      createdByFk: 1,
      createdOn: this.datepipe.transform(date, 'yyyy-MM-dd'),
      lastUpdatedByFk: null,
      lastUpdatedOn: null,
      versionNo: 1,
      selectedStartDate: [],
      selectedBarge: [],
      selectedOceanTug: [],
      selectedRiverTug: []
    };
    return convoys;
  }
  public isServiceValid = new BehaviorSubject<any>(false);
  // tslint:disable-next-line:member-ordering
  public mvObject = new BehaviorSubject<any>(
    {
        multivoyassetPk: 0,
        servicemasterFk: 0,
        servicename: '',
        serviceshotcode: '',
        serviceType: 1,
        nrconvey: 0,
        consecutivenr: 1,
        firstvoynr: '',
        vfService: '',
        vfBarge: '',
        vfVoynr: '',
        nbportfk: 0,
        nbportId: '',
        nbportName: '',
        sbportfk: 0,
        sbportId: '',
        sbportName: '',
        generateoption: 1,
        tilldate: '',
        nrofvoy: null,
        isActive: 0,
        createdByFk: 1,
        createdOn: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
        lastUpdatedByFk: null,
        lastUpdatedOn: null,
        versionNo: 1,
        convoyDtls: [],
        bargeCode: ''
    }
  );


  public getDefaultMvObject() {
    const object  = {
       multivoyassetPk: 0,
        servicemasterFk: 0,
        servicename: '',
        serviceshotcode: '',
        serviceType: 1,
        nrconvey: 0,
        consecutivenr: 1,
        firstvoynr: '',
        vfService: '',
        vfBarge: '',
        vfVoynr: '',
        nbportfk: 0,
        nbportId: '',
        nbportName: '',
        sbportfk: 0,
        sbportId: '',
        sbportName: '',
        generateoption: 1,
        tilldate: '', // this.datepipe.transform(date, 'dd/MM/yyyy'),
        nrofvoy: null,
        isActive: 0,
        createdByFk: 1,
        createdOn: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
        lastUpdatedByFk: null,
        lastUpdatedOn: null,
        versionNo: 1,
        convoyDtls: [],
    };
    return object;
  }
  public validatemultivoy(body: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.VALIDATEMULTIVOYAGE , body);
  }
  public validateService(body: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.VALIDATESERVICE , body);
  }
  public modifyService(body: any) {
    return this.apiService.post(APIENDPOINT.ASSETMANAGEMENT.NEWSERVICE.MODIFYSERVICE , body);
  }

}


