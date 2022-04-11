import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReturnResult } from '../models/pagination';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient, public localStorageService: LocalStorageService) {
  }

  public get(apiURL: string, dataGET?: any) {

    const requestOptions = {
      params: dataGET ? dataGET : undefined
    };
    return this.http.get(environment.baseEndPoint + apiURL, requestOptions);
  }

  // public reportget(apiURL: string, dataGET?: any) {

  //   const requestOptions = {
  //     params: dataGET ? dataGET : undefined
  //   };
  //   return this.http.get(environment.reportUrl + apiURL, requestOptions);
  // }

  public patch(apiURL: string, dataGET?: any) {
    // const headers = new Headers();
    // headers.set('Content-Type', 'application/json');
    // headers.set('Accept', 'application/json');

    // const requestOptions = {
    //   params: options && options.params ? options.params : undefined
    // };
    const requestOptions = {
      params: dataGET ? dataGET : undefined
    };
    return this.http.get(environment.baseEndPoint + apiURL, requestOptions);
    // // .pipe(
    // //   map((response: any) => response.json())
    // // );

    // return this.http.get(environment.baseUrl+url)
    // .pipe(
    //   retry(1),
    //   catchError(() => {
    //     return EMPTY;
    //   }),
    //   shareReplay(),
    //   map((response: any) => response.json())
    // );
  }

  public getMethod(apiURL: string, params?: any, page?: any): Observable<any> {
    let itemPerPage = this.localStorageService.getUserDetails().rec_count_page;
    const itemsPerPage: any = itemPerPage ? itemPerPage : 10;
    // const itemsPerPage: any = 10;
    const paginatedResult: ReturnResult<any> = new ReturnResult<any>();
    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http
      .get(environment.baseEndPoint + apiURL, { observe: 'response', params })
      .pipe(
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }

  public getMethodExcel(apiURL: string, params?: any, page?: any, itemPerPage?: any): Observable<any> {
    // let itemPerPage = this.localStorageService.getUserDetails().rec_count_page;
    // const itemsPerPage: any = itemPerPage ? itemPerPage : 10;
    // const itemsPerPage: any = 10;
    const paginatedResult: ReturnResult<any> = new ReturnResult<any>();
    if (page != null && itemPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemPerPage);
    }
    return this.http
      .get(environment.baseEndPoint + apiURL, { observe: 'response', params })
      .pipe(
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(
              response.headers.get('Pagination')
            );
          }
          return paginatedResult;
        })
      );
  }

  public postMethod(apiURL: string, body: any): Observable<any> {
    const returnResult: ReturnResult<any> = new ReturnResult<any>();
    return this.http
      .post(environment.baseEndPoint + apiURL, body)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public postMethodReport(apiURL: string, body: any): Observable<any> {
    const returnResult: ReturnResult<any> = new ReturnResult<any>();
    return this.http
      .post(environment.reportUrl + apiURL + '?flexireportmasterfk=' + body, '')
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  getExcel(apiURL: string, body: any, dataFilter?: any): Observable<any> {
    return this.http.post(environment.baseEndPoint + apiURL, body, { responseType: 'blob', params: dataFilter });
  }

  getExcelCopy(apiURL: string, body: any, dataFilter?: any): Observable<any> {
    return this.http.post(environment.baseEndPoint + apiURL, body, { responseType: 'text', params: dataFilter });
  }

  upload(apiURL: string, body: any, dataFilter?: any): Observable<any> {
    return this.http.post(environment.baseEndPoint + apiURL, body, { params: dataFilter });
  }

  download(apiURL: string, dataFilter?: any): Observable<any> {
    return this.http.get(environment.baseEndPoint + apiURL, { responseType: 'blob', params: dataFilter });
  }
  public post(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(environment.baseEndPoint + url, body);
  }

  public put(apiURL: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.put(environment.baseEndPoint + apiURL, body);
  }

  public delete(apiURL: string, dataOPT?: any): Observable<any> {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const requestOptions = {
      params: dataOPT ? dataOPT : undefined
    };
    return this.http.delete(environment.baseEndPoint + apiURL, requestOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  //#region Print
  public print(url: string, body: any, dataFilter?: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(environment.reportUrl + url, body, { responseType: 'blob', params: dataFilter });
  }
  //#endregion

  //#region EDI Generate
  public generateFile(url: string, dataFilter?: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(environment.baseEndPoint + url, { responseType: 'blob', params: dataFilter });
  }
  //#endregion

  public readLocalFiles(url: string): any {
    return this.http.get(url);
  }

  public forkJoinsCommon(data: any[]): Observable<any[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Authorization': 'bearer '+ this.token
    });

    const res = [];
    data.forEach((v, i) => {
      if (v.method === 'post') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'put') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'delete') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'get') {

        const requestOptions = {
          params: v.request ? v.request : undefined
        };

        res[i] = this.http.get(environment.baseEndPoint + v.url, requestOptions).pipe(
          map(response => {
            return response;
          })
        );
      }
    });

    return forkJoin(res);
  }

  //#region  Taulia
  public tauliaPost(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(environment.tauliaUrl + url, body);
  }

  public tauliaPut(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.put(environment.tauliaUrl + url, body);
  }

  public tauliaGet(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.get(environment.tauliaUrl + url, body);
  }

  public tauliaDownload(url: string, body: any, dataFilter?: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(environment.baseEndPoint + url, body, { responseType: 'blob', params: dataFilter });
  }

  //#endregion


  public PostMethodForThread(body): any {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post(environment.baseEndPointForThread, body, { responseType: 'text' });
  }
}
