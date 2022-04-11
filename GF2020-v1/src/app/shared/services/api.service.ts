import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ReturnResult } from '../models/pagination';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient) { }

  public get(apiURL: string, dataGET?: any) {
    const headers = new Headers();
    // const headers = new Headers();
    // headers.set('Content-Type', 'application/json');
    // headers.set('Accept', 'application/json');

    // const requestOptions = {
    //   params: options && options.params ? options.params : undefined
    // };
    const requestOptions = {
      params: dataGET ? dataGET : undefined,

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
    // const headers = new Headers();
    // headers.set('Content-Type', 'application/json');
    // headers.set('Accept', 'application/json');
    const itemsPerPage: any = 10;
    const paginatedResult: ReturnResult<any> = new ReturnResult<any>();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    // const requestOptions = {
    //   params: options ? options : undefined,
    // };

    // return this.http.get(environment.baseUrl+url);
    // .pipe(
    //   map((response: any) => response.json())
    // );

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

          // return response.body;
        })
      );
  }

  public postMethod(apiURL: string, body: any): Observable<any> {
    const returnResult: ReturnResult<any> = new ReturnResult<any>();
    return this.http
      .post(environment.baseEndPoint + apiURL, body)
      .pipe(
        map((response: any) => {
          // response.result = response;
          return response;
        })
      );
  }

  public post(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    // const userToken:string = sessionStorage.getItem("userToken");
    // headers.append("qiom_api_token", userToken);

    return this.http.post(environment.baseEndPoint + url, body);
  }

  public put(url: string, body: any) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    // const userToken:string = sessionStorage.getItem("userToken");
    // headers.append("qiom_api_token", userToken);

    return this.http.put(environment.baseEndPoint + url, body);
  }

  public delete(url: string) {
    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    // const userToken:string = sessionStorage.getItem("userToken");
    // headers.append("qiom_api_token", userToken);

    return this.http.delete(environment.baseEndPoint + url);
  }

  public readLocalFiles(url: string): any {
    return this.http.get(url);
  }

  public forkJoinsCommon(data: any[]): Observable<any[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Authorization': 'bearer '+ this.token
    });

    const res = [];
    data.forEach((v, i) => {
      if (v.method === 'post') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.body, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'put') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.body, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'delete') {
        res[i] = this.http.post(environment.baseEndPoint + v.url, v.body, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      } else if (v.method === 'get') {
        res[i] = this.http.get(environment.baseEndPoint + v.url, { headers }).pipe(
          map(response => {
            return response;
          })
        );
      }
    });

    return forkJoin(res);
  }
}
