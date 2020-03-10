import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {

  private frmTransaction: FormGroup;

  constructor(private fb: FormBuilder,
              ) {
  }

  ngOnInit() {
    this.frmTransaction = this.fb.group({
        description: [null, Validators.required],
        note: [null, null],
        type: [null, Validators.required],
        status: [null, Validators.required],
        paymentDate: [null, null],
        dueDate: [null, null],
        transactionValue:[null, null],
        paymentValue:[null, null]
      }
    );
  }

}
