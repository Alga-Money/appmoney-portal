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
    this.frmTransaction = this.fb.group({
      description: [null, Validators.required],
      type: [null, Validators.required],
      status: [null, Validators.required]
      }
    );
  }

  ngOnInit() {
  }

}
