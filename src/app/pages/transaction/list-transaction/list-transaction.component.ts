import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TransactionService} from '../transaction.service';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import * as moment from 'moment';
import 'moment/locale/pt-br';
import {AccountService} from '../../account/account.service';
import {CategoryService} from '../../category/category.service';
import {QueryString} from '../../../shared/services/common-service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class ListTransactionComponent implements OnInit {

  financialIncome = 0.00;
  financialExpenses = 0.00;
  listAccounts: any;
  listCategory: any;

  categoryId: any;
  accountId: any;


  dataSource = [];
  dateSearch = new Date();
  startDate: any;
  endDate: any;

  queryString: QueryString = {};

  totalPages: number = 0;
  totalRows: number = 0;

  constructor(private router: Router,
              private serviceTransaction: TransactionService,
              private serviceCategory: CategoryService,
              private serviceAccount: AccountService) {
    const date = moment();
    const dateFormated = date.format('DD/MM/YYYY');

    this.startDate = new FormControl(new Date());
    this.endDate = new FormControl(new Date());
    this.categoryId = new FormControl(0);
    this.accountId = new FormControl(0);

  }

  ngOnInit() {
    this.getData();
    this.getAccounts();
    this.getCategories();
  }

  displayedColumns: string[] = ['dueDate', 'description', 'status', 'paymentValue', 'star'];

  navigatoToCreateTransaction() {
    this.router.navigate(['list-transactions/create-transaction']);
  }

  navigatoToEditTransaction(idTransaction) {
    this.router.navigate(['list-transactions/edit-transaction', idTransaction], {queryParams: {operation: 'edit'}});
  }

  navigatoToConfirmTransaction(idTransaction) {
    this.router.navigate(['list-transactions/confirm-transaction', idTransaction], {queryParams: {operation: 'confirm'}});
  }

  navigatoToDeleteTransaction(idTransaction) {
    this.router.navigate(['list-transactions/delete-transaction', idTransaction], {queryParams: {operation: 'delete'}});
  }


  async getData() {
    if (this.startDate.valid && this.endDate.valid) {
      debugger
      this.queryString.date_start = this.startDate.value.toISOString();
      this.queryString.date_end   = this.endDate.value.toISOString();
      this.queryString.accountId  = this.accountId.value;
      this.queryString.categoryId = this.categoryId.value;
      const data: any = await this.serviceTransaction.
            getTransactions(this.queryString);
      this.dataSource = data.data;
      this.totalPages = data.meta.pageSize;

    }

  }

  async getAccounts() {
    this.listAccounts = await this.serviceAccount.getAcounts();
  }

  async getCategories() {
    this.listCategory = await this.serviceCategory.getCategories();
  }

}
