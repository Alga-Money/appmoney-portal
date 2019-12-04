import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit() {
  }

}
