import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRegisterComponent } from './transaction-register/transaction-register.component';
import {MatFormFieldModule, MatInput, MatInputModule, MatNativeDateModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [TransactionRegisterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    MatDatepickerModule
  ],
    exports: []
})
export class TransactionModule { }
