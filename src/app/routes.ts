import { Routes } from '@angular/router';

import {AccountRegisterComponent} from './account/account-register/account-register.component';
import {ListAccountsComponent} from "./account/list-accounts/list-accounts.component";
import {TransactionRegisterComponent} from './transaction/transaction-register/transaction-register.component';
import { AccountTypeComponent } from './account/account-type/account-type.component';
import { CategoryComponent } from './category/register-category/category.component';
import {ListCategoryComponent} from './category/list-category/list-category.component';

export const ROUTES: Routes = [
  {path: 'create-account', component: AccountRegisterComponent},
  {path: 'list-accounts', component: ListAccountsComponent},
  {path: 'list-transactions', component: TransactionRegisterComponent},
  {path: 'list-categories', component: ListCategoryComponent},
];

