import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StaticMessages} from '../../shared/services/static-messages';
import {AccountService} from '../account.service';
import {AccountType} from '../../core/model';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {

  color = 'accent';
  checked = false;
  disabled = false;

  private frmAccountType: FormGroup;
  staticmsgs = StaticMessages;

  constructor(private fb: FormBuilder,
              private accountService: AccountService) {



  }

  ngOnInit() {
    this.frmAccountType = this.fb.group({
      name: [null, Validators.required],
      isActive: [null, Validators.required]
    });

    this.frmAccountType.patchValue({
      isActive: false,
      // formControlName2: myValue2 (can be omitted)
    });

  }

  gravar() {
    console.log(this.frmAccountType);
    if (this.frmAccountType.valid) {
        this.accountService.register(this.frmAccountType.value)
          .then(response => {
            // mensagem de sucesso
          })
          .catch( error => console.log(error));
    }
  }

}
