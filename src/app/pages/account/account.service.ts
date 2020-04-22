import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {AccountType, Account} from '../../core/model';
import {environment} from '../../../environments/environment';
import {TokenStorageService} from '../../shared/services/token-storage-service';

@Injectable()
export class AccountService {
  accountTypesUrl: string;
  accountUrl: string;

  constructor(private http: HttpService, private storageToken: TokenStorageService) {
    this.accountTypesUrl = `account-types`;
    this.accountUrl      =  `accounts`;
  }


   register(accountType: AccountType): Promise<AccountType> {
    return this.http.post<AccountType>(this.accountTypesUrl, accountType)
      .toPromise();
   }


  registerAccount(data: any): Promise<Account> {
    return this.http.post<Account>(this.accountUrl, data)
      .toPromise();
  }

  editAccount(data: any): Promise<Account> {
    return this.http.put<Account>(`${this.accountUrl}/${data.id}`, data)
      .toPromise();
  }

   getAllAcountTypes(): Promise<AccountType[]> {
     return this.http.get<any>(this.accountTypesUrl)
       .toPromise()
       .then(response => response.data);
   }

  getAcounts(): Promise<Account[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.accountUrl}/?user_id=${user.id}`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

  getAcountsDashboard(): Promise<Account[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.accountUrl}/?user_id=${user.id}&dashboard=true`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }


  getAcountsById(ID): Promise<Account[]> {
    return this.http.get<any>(`${this.accountUrl}/${ID}`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }


}
