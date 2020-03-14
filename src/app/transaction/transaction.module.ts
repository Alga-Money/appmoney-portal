import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AngularMaterialModule} from '../angular-material.module';
@NgModule({
  declarations: [TransactionRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [
    MatDatepickerModule
  ],
    exports: []
})
export class TransactionModule { }
