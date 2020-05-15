import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StaticMessages} from '../../../shared/services/static-messages';
import {AccountService} from '../account.service';
import {TokenStorageService} from '../../../shared/services/token-storage-service';
import {SnackBarService} from '../../../shared/services/snack-bar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  public frmAccountType: FormGroup;
  staticmsgs = StaticMessages;

  constructor(private fb: FormBuilder,
              private storageToken: TokenStorageService,
              private snackBarService: SnackBarService,
              private _location: Location,
              private accountService: AccountService) {



  }

  ngOnInit() {
    const user = this.storageToken.getUser();
    this.frmAccountType = this.fb.group({
      userId: user.id,
      name: [null, Validators.required],
      isActive: [null, Validators.required]
    });

    this.frmAccountType.patchValue({
      isActive: false,
      // formControlName2: myValue2 (can be omitted)
    });

  }

  gravar() {
    if (this.frmAccountType.value) {
        this.accountService.register(this.frmAccountType.value)
          .then(response => {
            // mensagem de sucesso
            this.snackBarService.openSnackBar(this.staticmsgs.success, this.staticmsgs.dataSaved);
            this._location.back();
          })
          .catch( error => console.log(error));
    }
  }

}
