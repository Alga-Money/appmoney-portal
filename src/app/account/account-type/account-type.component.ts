import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StaticMessages} from '../../shared/services/static-messages';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {
private frmAccountType: FormGroup;
staticmsgs = StaticMessages;
  constructor(private fb: FormBuilder) {
    this.frmAccountType = fb.group({
      name: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  gravar() {

  }
}
