import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TransactionService} from '../transaction.service';


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
  displayedColumns: string[] = ['dueDate', 'description', 'status', 'paymentValue'];
  //displayedColumns: string[] = ['id', '', '', '', ''];

  navigatoToCreateTransaction() {
    this.router.navigate(['list-transactions/create-transaction']);
  }

  async getData() {
   this.dataSource = await    this.serviceTransaction.getTransactions();
   console.table(this.dataSource);
  }
}
