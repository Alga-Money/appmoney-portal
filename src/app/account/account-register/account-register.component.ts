import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {
  private frmAccount: FormGroup;
  typeOfAccounts: [];

  constructor(private fb: FormBuilder) {
    this.frmAccount = this.fb.group({
      name: [null, Validators.required],
      typeOfAccount: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

}
