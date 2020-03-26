import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AngularMaterialModule} from '../../angular-material.module';
import { TransactionComponent } from './transaction.component';
import {TransactionRoutingModule} from './transaction-routing.module';
import {TransactionService} from './transaction.service';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
@NgModule({
  declarations: [TransactionRegisterComponent, TransactionComponent, ListTransactionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    TransactionRoutingModule
  ],
  providers: [
    MatDatepickerModule,
    TransactionService
  ],
    exports: []
})
export class TransactionModule { }
