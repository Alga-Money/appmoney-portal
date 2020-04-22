import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardrComponent } from './dashboardr.component';
import {AngularMaterialModule} from '../../angular-material.module';
import {ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [ DashboardrComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    ChartsModule
  ]
})
export class DashboardModule { }
