import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { MockJsonService } from 'src/app/shared/services/mock-json.service';
import { APIENDPOINT } from 'src/app/shared/constant/api-end-points';
import { HttpParams } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RblDocService {

  constructor(private apiService: AppService,
    private mockJsonService: MockJsonService) { }
  fetchDocVesselList(reqInput: any) {
    return {
      'Status': 'Success',
      'StatusCode': 'GFS000001',
      'Data': [
        {
          'serviceid': 'AME',
          'voyage': 'AME 2001 N',
          'bkgcnt': 24,
          'port': 'motevideo',
          'terdtls': [
            {
              'tername': 'montevideo',
              'eta': '2020-07-17T12:44:05.2878242+05:30',
              'etd': '2020-07-18T12:44:05.2878242+05:30',
              'bkgcnt': 5,
              'RBL': 25,
              'WIP': 5,
              'draft': 10,
              'micdta': 5,
              'print': 5
            },
            {
              'tername': 'montevideo',
              'eta': '2020-07-18T12:44:05.2878242+05:30',
              'etd': '2020-07-19T12:44:05.2878242+05:30',
              'bkgcnt': 19,
              'RBL': 20,
              'WIP': 5,
              'draft': 10,
              'micdta': 5,
              'print': 5
            }
          ]
        }
      ]
    };
  }
}
