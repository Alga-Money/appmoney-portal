import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {environment} from '../../../environments/environment';
import {Account, AccountType, Transaction} from '../../core/model';
import {TokenStorageService} from '../../shared/services/token-storage-service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  transactionUrl: string;

  constructor(private http: HttpService, private storageToken: TokenStorageService) {
    this.transactionUrl      =  `dashboard`;
  }


  getTotais(): Promise<any[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.transactionUrl}/?user_id=${user.id}`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

}
