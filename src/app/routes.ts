import { Routes } from '@angular/router';

import {AccountRegisterComponent} from './account/account-register/account-register.component';
import {ListAccountsComponent} from "./account/list-accounts/list-accounts.component";
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { CategoryComponent } from './category/register-category/category.component';

export const ROUTES: Routes = [
  {path: 'create-account', component: AccountRegisterComponent},
  {path: 'list-accounts', component: ListAccountsComponent},
];

