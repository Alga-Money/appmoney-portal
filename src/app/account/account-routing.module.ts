import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ListAccountsComponent} from './list-accounts/list-accounts.component';
import {AccountRegisterComponent} from './account-register/account-register.component';

const routes: Routes = [

   // path: 'minha-conta',
   // component: AccountComponent,
    //children: [
      {path: 'create-account', component: AccountRegisterComponent},
      {path: 'edit-account/:id', component: AccountRegisterComponent},
      {path: 'list-accounts', component: ListAccountsComponent}
   // ]

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
