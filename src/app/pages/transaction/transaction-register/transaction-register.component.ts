import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../transaction.service';
import {StaticMessages} from '../../../shared/services/static-messages';
import {CategoryService} from '../../category/category.service';
import {AccountService} from '../../account/account.service';
import {TokenStorageService} from '../../../shared/services/token-storage-service';
import {MessageService} from 'primeng';
import {ActivatedRoute} from '@angular/router';
import {SnackBarService} from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {
  listCategory: any;
  listAccounts: any;
  staticmsgs = StaticMessages;
  public frmTransaction: FormGroup;
  transationTypes = [{desc: 'Despesa', value: 0},
    {desc: 'Receita', value: 1},
    {desc: 'Transferência', value: 2}];

  accountTypeIsTransacntion = false;

  constructor(private fb: FormBuilder,
              private service: TransactionService,
              private serviceCategory: CategoryService,
              private serviceAccount: AccountService,
              private storageToken: TokenStorageService,
              private route: ActivatedRoute,
              private snackBarService: SnackBarService,
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
        accountId: [null, null],
        accountIdDesc: [null, null]

      }
    );

    this.frmTransaction.patchValue({
      type: 0
    });

    this.getCategories();
    this.getAccounts();
    this.getTransaction();

  }


  async getTransaction(){
    const paramId = this.route.snapshot.paramMap.get('transaction_id');
    if(paramId) {
      const transationObj = await this.service.getTransaction(paramId);
    }
  }

  async getCategories() {
    this.listCategory = await this.serviceCategory.getCategories();
  }

  async getAccounts() {
    this.listAccounts = await this.serviceAccount.getAcounts();
  }


  save() {
    const user = this.storageToken.getUser();
    this.frmTransaction.patchValue({
      userId: user.id,
      status: 0,
      paymentValue: this.frmTransaction.value.transactionValue,
      paymentDate: this.frmTransaction.value.dueDate
    });

    if (this.frmTransaction.valid) {
      this.service.register(this.frmTransaction.value)
        .then(response => {
            console.log(response);
            this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
          }
        )
        .catch(error => console.log(error));
    }
  }

  changeTransactionType(event) {
    let value = event.value;
    if (value === 2) {
        this.accountTypeIsTransacntion = true;
      } else {
        this.accountTypeIsTransacntion = false;
      }
  }

}
