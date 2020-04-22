import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '../shared/footer/footer.component';
import {AngularMaterialModule} from '../angular-material.module';
import {PagesRoutingModule} from './pages.routing';
import {AccountService} from './account/account.service';
import {DashboardService} from './dashboard/dashboard.service';



@NgModule({
  declarations: [PagesComponent, FooterComponent],
  exports: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    PagesRoutingModule,
  ],
  providers: [
    AccountService, DashboardService
  ]
})
export class PagesModule { }
