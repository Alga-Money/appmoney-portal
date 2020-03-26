import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardrComponent} from './dashboardr.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
