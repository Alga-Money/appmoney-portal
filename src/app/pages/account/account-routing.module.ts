import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ListAccountsComponent} from './list-accounts/list-accounts.component';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {AccountComponent} from './account.component';
import {AccountTypeComponent} from './account-type/account-type.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {path: '', pathMatch: 'full', component: ListAccountsComponent},
      {path: 'create-account', component: AccountRegisterComponent},
      {path: 'edit-account/:account_id', component: AccountRegisterComponent},
      {path: 'create-account-type', component: AccountTypeComponent},
      {path: '**', redirectTo: ''}


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
