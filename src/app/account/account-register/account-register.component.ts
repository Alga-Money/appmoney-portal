import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StaticMessages} from '../../shared/services/static-messages';
import {AccountService} from '../account.service';
import {Account, AccountType} from '../../core/model';
import {MatSnackBar} from '@angular/material';
import {SnackBarService} from '../../shared/services/snack-bar.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  private account: any;

  public frmAccount: FormGroup;
  staticmsgs = StaticMessages;
  typeOfAccounts: AccountType[];

  constructor(private fb: FormBuilder,
              private  accountService: AccountService,
              private snackBarService: SnackBarService,
              private route: ActivatedRoute,
  ) {
    this.frmAccount = this.fb.group({
      description: [null, Validators.required],
      color: [null],
      includeDashboard: [null, Validators.required],
      openingBalance: [null, Validators.required],
      ignoreOverallBalance: [null, Validators.required],
      accountTypeId: [null, Validators.required],
      userId: [null]
    });
  }

  ngOnInit() {
    this.fetchData();

    debugger
    const paramId = this.route.params;

    if(paramId){
      console.log(paramId);
    }
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
      color: '',
      ignoreOverallBalance: false
      // formControlName2: myValue2 (can be omitted)
    });

    if (this.frmAccount.valid) {
      this.accountService.registerAccount(this.frmAccount.value)
        .then(response => {
            console.log(response);
            //this.frmAccount.reset
            this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
          }
        )
        .catch(error => {
          console.error(error);
        });
    }
  }

}
