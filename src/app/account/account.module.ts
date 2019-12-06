import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterComponent } from './account-register/account-register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from '@angular/material/input';
import { AccountTypeComponent } from './account-type/account-type.component';
import {MatIconModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {path: 'create-account/create-account-type', component: AccountTypeComponent}
];

@NgModule({
  declarations: [AccountRegisterComponent, ListAccountsComponent, AccountTypeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class AccountModule { }
