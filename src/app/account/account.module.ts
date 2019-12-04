import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRegisterComponent } from './account-register/account-register.component';
import {MatFormFieldModule} from "@angular/material/form-field";




@NgModule({
  declarations: [AccountRegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
})
export class AccountModule { }
