import { CommonModule } from '@angular/common';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {AccountRegisterComponent} from './account/account-register/account-register.component';
import {ListAccountsComponent} from "./account/list-accounts/list-accounts.component";
import {TransactionRegisterComponent} from './transaction/transaction-register/transaction-register.component';
import {ListCategoryComponent} from './category/list-category/list-category.component';
import {NgModule} from '@angular/core';



const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: '/login' }
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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
