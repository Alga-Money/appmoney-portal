import { Injectable } from '@angular/core';
import {HttpService} from '../shared/services/http-service';
import {AccountType} from '../core/model';
import {environment} from '../../environments/environment';

@Injectable()
export class AccountService {
  accountTypesUrl: string;

  constructor(private http: HttpService) {
    this.accountTypesUrl = `${environment.apiUrl}/account-types`;
  }


   register(accountType: AccountType): Promise<AccountType> {
    return this.http.post<AccountType>(this.accountTypesUrl, accountType)
      .toPromise();
   }

   getAll(): Promise<AccountType> {
     return this.http.get<any>(this.accountTypesUrl)
       .toPromise()
       .then(response => response.content);
   }
}
