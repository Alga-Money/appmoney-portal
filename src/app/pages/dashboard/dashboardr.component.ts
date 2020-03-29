import {Component, HostListener, OnInit} from '@angular/core';
import {ScrollTopService} from '../../shared/services/scrolltop.service';
import {AccountService} from '../account/account.service';
import {ChartOptions, ChartType, ChartDataSets} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-dashboardr',
  templateUrl: './dashboardr.component.html',
  styleUrls: ['./dashboardr.component.css']
})
export class DashboardrComponent implements OnInit {
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

  accountTotal: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mode = 'side';
    this.opened = false;
    if (event.target.innerWidth < 1199) {
      this.mode = 'push';
      this.opened = false;
    }
  }

  constructor(private scrollTopService: ScrollTopService, private  accountService: AccountService) {
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
    // this.barChartLabels = this.descriptionsLabelBar();
    // this.barChartLabels.map(a => console.log(a));
  }

  valueTotalAccounts() {
    return this.listAccounts.map(a => a.openingBalance).reduce((a, b) => a + b, 0);
  }

  async getAccounts() {
    try {
      this.listAccounts = await this.accountService.getAcountsDashboard();
      this.accountTotal = this.valueTotalAccounts();
      this.barChartLabels = [''];//this.listAccounts.map(a => a.description);
      let arraChartValues = this.listAccounts.map(a => {
        return {data: [a.openingBalance], label:a.description};
      });
      this.barChartData = arraChartValues;
    } catch (e) {
      console.error(e);
    }
  }


}
