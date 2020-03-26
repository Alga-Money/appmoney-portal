import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path: 'list-accounts', loadChildren: './account/account.module#AccountModule'},
      {path: 'list-transactions', loadChildren: './transaction/transaction.module#TransactionModule'},
      {path: 'list-categories', loadChildren: './category/category.module#CategoryModule'},
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
