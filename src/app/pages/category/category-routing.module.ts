import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTransactionComponent} from '../transaction/list-transaction/list-transaction.component';
import {TransactionRegisterComponent} from '../transaction/transaction-register/transaction-register.component';
import {CategoryComponent} from './category.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {path: '', pathMatch: 'full', component: ListTransactionComponent},
      {path: 'create-transaction', component: TransactionRegisterComponent},
      // {path: 'edit-transaction/:transaction_id', component: AccountRegisterComponent},
      {path: '**', redirectTo: ''}


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
