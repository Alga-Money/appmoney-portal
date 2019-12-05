import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css']
})
export class AccountTypeComponent implements OnInit {
private frmAccountType: FormGroup;
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
