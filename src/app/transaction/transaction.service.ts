import { Injectable } from '@angular/core';
import {HttpService} from '../shared/services/http-service';
import {environment} from '../../environments/environment';
import {AccountType, Transaction} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactionUrl: string;

  constructor(private http: HttpService) {
    this.transactionUrl      =  `${environment.apiUrl}/transactions`;
  }


  register(transaction: Transaction): Promise<Transaction> {
    console.log(transaction);
    return this.http.post<Transaction>(this.transactionUrl, transaction)
      .toPromise();
  }


}
