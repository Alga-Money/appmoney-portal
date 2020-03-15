import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountData = new BehaviorSubject<any>(null);
  constructor() { }

  setAccountData(data) {
    this.accountData.next(data);
  }
}
