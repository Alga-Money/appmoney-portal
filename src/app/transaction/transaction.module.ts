import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';
import {MatFormFieldModule} from '@angular/material';
import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TransactionRegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
    exports: []
})
export class TransactionModule { }
