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
  displayedColumns: string[] = ['dueDate', 'description', 'paymentValue'];

  navigatoToCreateTransaction() {
    this.router.navigate(['list-transactions/create-transaction']);
  }

  async getData() {
   this.dataSource = await    this.serviceTransaction.getTransactions();
   console.table(this.dataSource);
  }

  getTextByValueTransction = (value) => TransactionType.getTextByValue(value);
}
