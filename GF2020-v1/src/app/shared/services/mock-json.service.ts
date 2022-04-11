import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReturnResult } from '../models/pagination';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class MockJsonService {
  jsonServerUrl: string = 'http://localhost:3000/';
  // json-server --watch booking.json ;

  constructor(private http: HttpClient) {  }

  public get(apiURL: string, dataGET?: any) {

    const requestOptions = {
      params: dataGET ? dataGET : undefined
    };
    return this.http.get(this.jsonServerUrl + apiURL, requestOptions);
  }

  public getMethod(apiURL: string, params?: any, page?: any): Observable<any> {
    const itemsPerPage: any = 10;
    const paginatedResult: ReturnResult<any> = new ReturnResult<any>();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    return this.http
      .get(this.jsonServerUrl + apiURL, { observe: 'response', params })
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
      .post(this.jsonServerUrl + apiURL, body)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  getExcel(apiURL: string, body: any, dataFilter?: any): Observable<any> {
    return this.http.post(this.jsonServerUrl + apiURL, body, { responseType: 'blob', params: dataFilter });
  }
  public post(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(this.jsonServerUrl + url, body);
  }

  public put(apiURL: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.put(this.jsonServerUrl + apiURL, body);
  }

  public delete(apiURL: string, dataOPT?: any): Observable<any> {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const requestOptions = {
      params: dataOPT ? dataOPT : undefined
    };
    return this.http.delete(this.jsonServerUrl + apiURL, requestOptions).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

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
        res[i] = this.http.post(this.jsonServerUrl + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'put') {
        res[i] = this.http.post(this.jsonServerUrl + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'delete') {
        res[i] = this.http.post(this.jsonServerUrl + v.url, v.request, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'get') {

        const requestOptions = {
          params: v.request ? v.request : undefined
        };

        res[i] = this.http.get(this.jsonServerUrl + v.url, requestOptions).pipe(
          map(response => {
            return response;
          })
        );
      }
    });

    return forkJoin(res);
  }

}
