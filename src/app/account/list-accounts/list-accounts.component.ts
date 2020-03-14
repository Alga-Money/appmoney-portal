import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from '../account.service';
import {tryCatch} from 'rxjs/internal-compatibility';
import {Account} from '../../core/model';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})



export class ListAccountsComponent implements OnInit {
  listAccounts: Account[];

  constructor(private router: Router,
              private  accountService: AccountService) { }

  ngOnInit() {
    this.listAccounts = [];
    this.getData();
  }

  navigatoToCreateAccount() {
    this.router.navigateByUrl('/create-account');
  }

  async getData() {
    try {
      this.listAccounts = await this.accountService.getAllAcounts();
    } catch (e) {
      console.error(e);
    }
  }

}
