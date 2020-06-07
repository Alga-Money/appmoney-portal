import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {environment} from '../../../environments/environment';
import {Account, AccountType, Transaction} from '../../core/model';
import {TokenStorageService} from '../../shared/services/token-storage-service';
import {CommonService, QueryString} from '../../shared/services/common-service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactionUrl: string;

  constructor(private http: HttpService,
              private storageToken: TokenStorageService,
              private commonService: CommonService) {
    this.transactionUrl      =  `transactions`;
  }


  register(transaction: Transaction): Promise<Transaction> {
    return this.http.post<Transaction>(this.transactionUrl, transaction)
      .toPromise();
  }

  editTransaction(transaction: any): Promise<Transaction> {
    return this.http.put<Transaction>(`${this.transactionUrl}/${transaction.id}`, transaction)
      .toPromise();
  }

  getTransactions(queryString: QueryString): Promise<any[]> {
    const user = this.storageToken.getUser();
    queryString.user_id = user.id;
    const params = this.commonService.createParams(queryString);


    return this.http.get<any>(`${this.transactionUrl}/`, {params: params })
      .toPromise()
      .then(response => {
        return response;
      });
  }

  getTransaction(ID): Promise<Account[]> {
    const user = this.storageToken.getUser();
    let queryString = null;
    queryString.user_id = user.id;
    const params = this.commonService.createParams(queryString);

    return this.http.get<any>(`${this.transactionUrl}/${ID}?user_id=${user.id}`,{params: params })
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

  getTotais(): Promise<any[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.transactionUrl}/total/?user_id=${user.id}`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

  delete(ID): Promise<any> {
    return this.http.delete<Transaction>(`${this.transactionUrl}/${ID}`).toPromise();
  }



}
