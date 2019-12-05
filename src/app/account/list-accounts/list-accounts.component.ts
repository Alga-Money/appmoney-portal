import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


export interface Account {
  name: string;
}

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})



export class ListAccountsComponent implements OnInit {
  accounts: Account[] = [
    {name: 'Carteira'}, {name: 'Basa'}, {name: 'Poupança'}
    ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigatoToCreateAccount(){
    this.router.navigateByUrl('/create-account');
  }

}
