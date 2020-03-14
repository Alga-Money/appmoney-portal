import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StaticMessages} from '../../shared/services/static-messages';
import { Routes } from '@angular/router';
import {AccountService} from '../account.service';
import {Account, AccountType} from '../../core/model';


@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  staticmsgs = StaticMessages;
  typeOfAccounts: AccountType[] ;

  constructor(private fb: FormBuilder,
              private  accountService: AccountService,
              public frmAccount: FormGroup
              ) {
    this.frmAccount = this.fb.group({
      description: [null, Validators.required],
      color: [null],
      includeDashboard: [null, Validators.required],
      openingBalance: [null, Validators.required],
      ignoreOverallBalance: [null, Validators.required],
      accountTypeId: [null, Validators.required],
      userId:[null]
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.accountService.getAllAcountTypes().then(res => {
      console.table(res);
      this.typeOfAccounts = res;
    }).catch(error => {
      console.log(error);
    });
  }


  save(): void {
    this.frmAccount.patchValue({
      userId: 1,
      // formControlName2: myValue2 (can be omitted)
    });
    console.log(this.frmAccount.value);
    if (this.frmAccount.valid) {
      this.accountService.registerAccount(this.frmAccount.value)
        .then( response => console.log(response))
        .catch(error => console.log(error));
    }
  }

}
