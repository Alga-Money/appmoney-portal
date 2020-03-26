import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StaticMessages} from '../../../shared/services/static-messages';
import {AccountService} from '../account.service';
import {Account, AccountType} from '../../../core/model';
import {MatSnackBar} from '@angular/material';
import {SnackBarService} from '../../../shared/services/snack-bar.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../shared/services/token-storage-service';


@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  private account: any = null;

  public frmAccount: FormGroup;
  staticmsgs = StaticMessages;
  typeOfAccounts: AccountType[];

  constructor(private fb: FormBuilder,
              private  accountService: AccountService,
              private snackBarService: SnackBarService,
              private route: ActivatedRoute,
              private storageToken: TokenStorageService
  ) {
    this.frmAccount = this.fb.group({
      id: [null, null],
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
    const paramId = this.route.snapshot.paramMap.get('account_id');
    if (paramId) {
      this.getAccount(paramId);
      console.log(paramId);
    }
  }

  async fetchData() {
    this.accountService.getAllAcountTypes().then(res => {
      this.typeOfAccounts = res;
    }).catch(error => {
      console.log(error);
    });
  }


  async getAccount(ID) {
    try {
      this.account = await this.accountService.getAcountsById(ID);
      this.frmAccount = this.loadAccount(this.account);
    } catch (e) {
      console.error(e);
    }
  }


  save(): void {
    const user = this.storageToken.getUser();
    this.frmAccount.patchValue({
      userId: user.id,
      color: ' ',
      ignoreOverallBalance: false
    });
    debugger
    if (this.frmAccount.valid) {
      if (!this.account) { //save
        this.accountService.registerAccount(this.frmAccount.value)
          .then(response => {
              this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
            }
          )
          .catch(error => {
            console.error(error);
          });
      } else { //edit

        this.accountService.editAccount(this.frmAccount.value)
          .then(response => {
              this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
            }
          )
          .catch(error => {
            console.error(error);
          });
      }

    }
  }


  loadAccount(account?: any) {
    return new FormGroup({
      'id': new FormControl(account.id),
      'description': new FormControl(account.description, Validators.required),
      'color': new FormControl(account.color, Validators.required),
      'includeDashboard': new FormControl(account.includeDashboard, Validators.required),
      'openingBalance': new FormControl(account.openingBalance, Validators.required),
      'ignoreOverallBalance': new FormControl(account.ignoreOverallBalance, Validators.required),
      'accountTypeId': new FormControl(account.accountTypeId, Validators.required),
      'userId': new FormControl(account.userId, Validators.required)
    });
  }

}
