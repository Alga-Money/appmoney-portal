import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StaticMessages} from "../../shared/services/static-messages";
import { Routes } from '@angular/router';

export interface AccountType {
  name: string;
}

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {
  staticmsgs = StaticMessages;
  private frmAccount: FormGroup;
  typeOfAccounts: AccountType[] = [{name: 'Carteira'}, {name: 'Dinheiro'}, {name: 'Cartão'}];

  constructor(private fb: FormBuilder ) {
    this.frmAccount = this.fb.group({
      name: [null, Validators.required],
      typeOfAccount: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
