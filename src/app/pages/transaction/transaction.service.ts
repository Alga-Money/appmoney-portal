import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {environment} from '../../../environments/environment';
import {Account, AccountType, Transaction} from '../../core/model';
import {TokenStorageService} from '../../shared/services/token-storage-service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactionUrl: string;

  constructor(private http: HttpService, private storageToken: TokenStorageService) {
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

  getTransactions(params): Promise<Account[]> {
    const user = this.storageToken.getUser();
    if(params){
      params = `&${params}`;
    }else {params = '';}

    return this.http.get<any>(`${this.transactionUrl}/?user_id=${user.id}${params}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  getTransaction(ID): Promise<Account[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.transactionUrl}/${ID}?user_id=${user.id}`)
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

}
