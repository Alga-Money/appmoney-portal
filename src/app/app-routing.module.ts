import {CommonModule} from '@angular/common';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AcessDeniedComponent} from './core/acess-denied/acess-denied.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'accounts', loadChildren: './account/account.module#AccountModule'},

  {path: 'login', loadChildren: './auth/auth.module#AuthModule'},

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'nao-autorizado', component: AcessDeniedComponent},
  {path: 'pagina-nao-encontrada', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];


// export const ROUTES: Routes = [
//   {path: 'create-account', component: AccountRegisterComponent},
//   {path: 'edit-account/:id', component: AccountRegisterComponent},
//   {path: 'list-accounts', component: ListAccountsComponent},
//   {path: 'list-transactions', component: TransactionRegisterComponent},
//   {path: 'list-categories', component: ListCategoryComponent},
//   { path: '**', redirectTo: '/login' }];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
