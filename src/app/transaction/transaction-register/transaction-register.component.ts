import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../transaction.service';
import {StaticMessages} from '../../shared/services/static-messages';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {
  staticmsgs = StaticMessages;
  private frmTransaction: FormGroup;

  constructor(private fb: FormBuilder,
              private service: TransactionService
  ) {
  }

  ngOnInit() {
    this.frmTransaction = this.fb.group({
        description: [null, Validators.required],
        note: [null, null],
        type: [null, Validators.required],
        status: [null, Validators.required],
        paymentDate: [null, null],
        dueDate: [null, Validators.required],
        transactionValue: [null, Validators.required],
        paymentValue: [null, null],
        userId: [null, null],
        categoryId: [null, null],
        accountId: [null, null]

      }
    );
  }


  save() {
    this.frmTransaction.patchValue({
      userId: 1,
      status: 0,
      categoryId: 1,
      accountId: 1
      // formControlName2: myValue2 (can be omitted)
    });
    if (this.frmTransaction.valid) {
      this.service.register(this.frmTransaction.value)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }

}
