import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TransactionService} from '../transaction.service';
import {TransactionType} from '../../../shared/enuns/TransactionType';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  dataSource = [];
  constructor(private router: Router, private serviceTransaction: TransactionService) { }

  ngOnInit() {
    this.getData();
  }

  displayedColumns: string[] = ['dueDate', 'description', 'paymentValue', 'star'];

  navigatoToCreateTransaction() {
    this.router.navigate(['list-transactions/create-transaction']);
  }

  navigatoToEditTransaction(idTransaction) {
    this.router.navigate(['list-transactions/edit-transaction', idTransaction],{queryParams:{operation:'edit'}});
  }

  navigatoToConfirmTransaction(idTransaction) {
    this.router.navigate(['list-transactions/confirm-transaction', idTransaction],{queryParams:{operation:'confirm'}});
  }


  async getData() {
   this.dataSource = await    this.serviceTransaction.getTransactions(null);
   console.table(this.dataSource);
  }




}
