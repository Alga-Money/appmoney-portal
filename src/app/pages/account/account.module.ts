import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { RouterModule, Routes } from '@angular/router';
import {AccountService} from './account.service';
import {AngularMaterialModule} from '../../angular-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from './account-routing.module';


const routes: Routes = [
  {path: 'create-account/create-account-type', component: AccountTypeComponent}
];

@NgModule({
  declarations: [AccountRegisterComponent, ListAccountsComponent, AccountTypeComponent, AccountComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
