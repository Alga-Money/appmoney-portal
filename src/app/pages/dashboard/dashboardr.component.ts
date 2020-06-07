import {Component, HostListener, OnInit} from '@angular/core';
import {ScrollTopService} from '../../shared/services/scrolltop.service';
import {AccountService} from '../account/account.service';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';
import {TransactionService} from '../transaction/transaction.service';
import {DashboardService} from './dashboard.service';
import {Router} from '@angular/router';
import {QueryString} from '../../shared/services/common-service';

@Component({
  selector: 'app-dashboardr',
  templateUrl: './dashboardr.component.html',
  styleUrls: ['./dashboardr.component.css']
})
export class DashboardrComponent implements OnInit {
  dataSourceAccountsReceivable = [];
  dataSourceAccountsScore = [];
  displayedColumns: string[] = ['dueDate', 'description', 'paymentValue', 'star'];


  barChartOptions: ChartOptions = {
    responsive: true,

  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data: [],}
  ];

  listAccounts: any;
  mobHeight: number;
  mobWidth: number;
  mode: string;
  opened: boolean;
  accountTotalScore: number;
  accountTotalReceivable: number;

  accountTotal: number = 0;
  queryString: QueryString = {};

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mode = 'side';
    this.opened = false;
    if (event.target.innerWidth < 1199) {
      this.mode = 'push';
      this.opened = false;
    }
  }

  constructor(private scrollTopService: ScrollTopService,
              private  accountService: AccountService,
              private transactionService: TransactionService,
              private dashboardService: DashboardService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.mode = 'side';
    this.opened = false;
    this.mobHeight = (window.screen.height);
    this.mobWidth = (window.screen.width);
    if (this.mobWidth < 1199) {
      this.mode = 'push';
      this.opened = false;
    }
    this.scrollTopService.setScrollTop();
    this.getAccounts();
    this.accountsReceivable();
    this.accountsScore();
  }

  valueTotalAccounts() {
    debugger
    let total = 0.0;
    this.listAccounts.forEach(item => total += Number(item.openingBalance) );

    return total;

//    return this.listAccounts.forEach((a, b) => a + b, 0);
//    var total = this.listAccounts.reduce(function(total, numero){
//        return total + numero;
//       }, 0);
  }

  async getAccounts() {
    try {
      debugger
      this.listAccounts = await this.accountService.getAcounts();
      this.accountTotal = this.valueTotalAccounts();
      this.barChartLabels = [''];//this.listAccounts.map(a => a.description);
      let arraChartValues = this.listAccounts.map(a => {
        console.log(a);
        return {data: [a.openingBalance], label: a.description, borderWidth: 1};
      });
      this.barChartData = arraChartValues;
      console.log(this.accountTotal);

    } catch (e) {
      console.error(e);
    }
  }

  async accountsReceivable() {
    try {
      this.queryString.type   = '1';
      this.queryString.status = '0';
      const dataReceivable: any = await this.transactionService.getTransactions(this.queryString);
      if(dataReceivable.data.length>0){
        this.dataSourceAccountsReceivable = dataReceivable.data;
        this.accountTotalReceivable = dataReceivable.total[0].openingBalance;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async accountsScore() {
    try {
      this.queryString.type   = '0';
      this.queryString.status = '0';
      const dataTransaction: any = await this.transactionService.getTransactions(this.queryString);
      this.dataSourceAccountsScore = dataTransaction.data;
      this.accountTotalScore = dataTransaction.total[0].openingBalance;
    } catch (e) {
      console.log(e);
    }
  }


  navigatoToCreateTransaction() {
    this.router.navigate(['list-transactions/create-transaction']);
  }

  navigatoToEditTransaction(idTransaction) {
    this.router.navigate(['list-transactions/edit-transaction', idTransaction], {queryParams: {operation: 'edit'}});
  }

  navigatoToConfirmTransaction(idTransaction) {
    this.router.navigate(['list-transactions/confirm-transaction', idTransaction], {queryParams: {operation: 'confirm'}});
  }

}
