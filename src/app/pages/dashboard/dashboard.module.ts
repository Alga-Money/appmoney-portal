import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardrComponent } from './dashboardr.component';
import {AngularMaterialModule} from '../../angular-material.module';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';



@NgModule({
  declarations: [DashboardComponent, DashboardrComponent, DashboardSidebarComponent, DashboardFooterComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
