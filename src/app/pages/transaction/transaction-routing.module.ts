import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TransactionComponent} from './transaction.component';
import {TransactionRegisterComponent} from './transaction-register/transaction-register.component';
import {ListTransactionComponent} from './list-transaction/list-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
      {path: '', pathMatch: 'full', component: ListTransactionComponent},
      {path: 'create-transaction', component: TransactionRegisterComponent},
      {path: 'edit-transaction/:transaction_id', component: TransactionRegisterComponent},
      {path: '**', redirectTo: ''}


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {
}
