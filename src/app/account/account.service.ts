import { Injectable } from '@angular/core';
import {HttpService} from '../shared/services/http-service';
import {AccountType, Account} from '../core/model';
import {environment} from '../../environments/environment';

@Injectable()
export class AccountService {
  accountTypesUrl: string;
  accountUrl: string;

  constructor(private http: HttpService) {
    this.accountTypesUrl = `${environment.apiUrl}/account-types`;
    this.accountUrl      =  `${environment.apiUrl}/accounts`;
  }


   register(accountType: AccountType): Promise<AccountType> {
    return this.http.post<AccountType>(this.accountTypesUrl, accountType)
      .toPromise();
   }


  registerAccount(data: any): Promise<Account> {
    return this.http.post<Account>(this.accountUrl, data)
      .toPromise();
  }

   getAllAcountTypes(): Promise<AccountType[]> {
     return this.http.get<any>(this.accountTypesUrl)
       .toPromise()
       .then(response => response.data);
   }

  getAcounts(): Promise<Account[]> {
   // let url = `${this.accountUrl}/${paramId}`
    return this.http.get<any>(this.accountUrl)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }


}
