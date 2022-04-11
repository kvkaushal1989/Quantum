import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoarriService {

  constructor(
    private apiService: AppService
  ) { }

  //#region  File Registration
  fetchCOARRIList(reqInput: any) {
    return this.apiService.get(APIENDPOINT.EDI_AND_INTEGRATIONS.COARRI.FETCH_LIST, reqInput);
  }
  processCoarri(reqInput: any) {
    return this.apiService.post(APIENDPOINT.EDI_AND_INTEGRATIONS.COARRI.PROCESS_DATASET, reqInput);
  }
  uploadCoarri(body: any, param: any) {
    const formData = new FormData();
    formData.append('file', body);
    return this.apiService.upload(APIENDPOINT.EDI_AND_INTEGRATIONS.COARRI.GET_DATASET, formData, param);
  }

}
