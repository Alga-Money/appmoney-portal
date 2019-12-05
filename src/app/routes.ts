import { Routes } from '@angular/router';

import {AccountRegisterComponent} from './account/account-register/account-register.component';
import {ListAccountsComponent} from "./account/list-accounts/list-accounts.component";
import { AccountTypeComponent } from './account/account-type/account-type.component';

export const ROUTES: Routes = [
  {path: 'create-account', component: AccountRegisterComponent},
  {path: 'list-accounts', component: ListAccountsComponent},
  {path: 'create-account-type', component: AccountTypeComponent}
];

