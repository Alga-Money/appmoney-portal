import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TransactionService} from '../transaction.service';
import {StaticMessages} from '../../../shared/services/static-messages';
import {CategoryService} from '../../category/category.service';
import {AccountService} from '../../account/account.service';
import {TokenStorageService} from '../../../shared/services/token-storage-service';
import {MessageService} from 'primeng';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackBarService} from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-transaction-register',
  templateUrl: './transaction-register.component.html',
  styleUrls: ['./transaction-register.component.css']
})
export class TransactionRegisterComponent implements OnInit {
  private transationObj: any = null;
  private  operation;
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
              private router: Router,
              private snackBarService: SnackBarService,
  ) {
    this.route.queryParams
      .subscribe(params => {
        this.operation = params.operation
        console.log(params); // {order: "popular"}
      });
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


  async getTransaction() {
    const paramId = this.route.snapshot.paramMap.get('transaction_id');
    if (paramId) {
      this.transationObj = await this.service.getTransaction(paramId);
      this.frmTransaction = this.loadTransaction(this.transationObj);
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
      status: this.operation === 'confirm' ? 1 : 0,
      paymentValue: this.frmTransaction.value.transactionValue,
      paymentDate: this.frmTransaction.value.dueDate
    });

    if (this.frmTransaction.valid) {
      if (!this.transationObj) {
        this.service.register(this.frmTransaction.value)
          .then(response => {
              console.log(response);
              this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
              this.navigatoToListTransaction();
            }
          )
          .catch(error => console.log(error));
      } else {
        this.service.editTransaction(this.frmTransaction.value)
          .then(response => {
              console.log(response);
              this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
              this.navigatoToListTransaction();
            }
          )
          .catch(error => console.log(error));
      }

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

  loadTransaction(transaction?: any) {
    return new FormGroup({
      id: new FormControl(transaction.id),
      description: new FormControl(transaction.description, Validators.required),
      note: new FormControl(transaction.note, null),
      type: new FormControl(transaction.type, Validators.required),
      status: new FormControl(transaction.status, Validators.required),
      paymentDate: new FormControl(transaction.paymentDate, Validators.required),
      dueDate: new FormControl(transaction.dueDate, Validators.required),
      transactionValue: new FormControl(transaction.transactionValue, Validators.required),
      paymentValue: new FormControl(transaction.paymentValue, Validators.required),
      userId: new FormControl(transaction.userId, Validators.required),
      categoryId: new FormControl(transaction.categoryId, Validators.required),
      accountId: new FormControl(transaction.accountId, Validators.required),
    });
  }

  navigatoToListTransaction() {
    this.router.navigate(['list-transactions']);
  }


  getNameOperation(){
    if(this.operation==='edit'){
      return 'Salvar'
    }else if (this.operation==='confirm'){
      return 'Confirmar'
    }else {
      return 'Salvar'
    }
  }




}
