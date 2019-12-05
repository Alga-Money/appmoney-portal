/*import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import 'rxjs/operators/map';
import 'rxjs/operators/catch';
import 'rxjs/operators/delay';
import 'rxjs/operators/do';

import {Observable, throwError} from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return Observable.throwError(error || '500 internal server error');
  }

  public getBaseUrl() {
    return environment.apiUrl;
  }

  httpGet(path, token, params?: HttpParams) {
    let headers = null;
    let param = null;
    if (token !== null) {
      headers = new HttpHeaders().set('token', token);
    }
    if (params) {
      param = params;
    }
    return this.http
      .get(environment.apiUrl + path, { headers: headers, params: param })
      .catch(this.handleError);
  }

  httpPost(path, body, token) {
    const data = JSON.stringify(body);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };

    return this.http
      .post(environment.apiUrl + path, data, options)
      .map((response: HttpResponse<any>) => response)
      .catch(this.handleError);
  }

  httpPut(path, body, token) {
    const data = JSON.stringify(body);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };
    return this.http
      .put(environment.apiUrl + path, data, options)
      .catch(this.handleError);
  }

  httpDelete(path, token, params?: HttpParams) {
    let headers: HttpHeaders = new HttpHeaders();
    let param = null;
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    if (params) {
      param = params;
    }
    const options = { headers: headers, params: param };
    return this.http
      .delete(environment.apiUrl + path, options)
      .catch(this.handleError);
  }


}*/
