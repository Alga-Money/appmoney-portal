import { Injectable } from '@angular/core';
import {HttpHeaders, HttpResponse, HttpClient, HttpParams, HttpErrorResponse, HttpHandler} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class HttpService extends HttpClient {


  constructor(handler: HttpHandler) {
    super(handler);
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error || '500 internal server error');
  }

  public getBaseUrl() {
    return environment.apiUrl;
  }
  public delete<T>(url: string, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.delete<T>(`${this.getBaseUrl()}/${url}`, options));
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.patch<T>(`${this.getBaseUrl()}/${url}`, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.head<T>(`${this.getBaseUrl()}/${url}`, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.options<T>(`${this.getBaseUrl()}/${url}`, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.get<T>(`${this.getBaseUrl()}/${url}`, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.post<T>(`${this.getBaseUrl()}/${url}`, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.makeRequisition<T>(() => super.put<T>(url, body, options));
  }

  private makeRequisition<T>(fn: Function): Observable<T> {
    // if (this.auth.isAccessTokenInvalido()) {
    //   console.log('Requisição HTTP com access token inválido. Obtendo novo token...');
    //
    //   const chamadaNovoAccessToken = this.auth.obterNovoAccessToken()
    //     .then(() => {
    //       if (this.auth.isAccessTokenInvalido()) {
    //         throw new NotAuthenticatedError();
    //       }
    //
    //       return fn().toPromise();
    //     });
    //
    //   return observableFromPromise(chamadaNovoAccessToken);
    // } else {
      return fn();
    // }
  }

}
