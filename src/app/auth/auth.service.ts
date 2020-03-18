import { Injectable } from '@angular/core';
import {HttpService} from '../shared/services/http-service';
import {AccountType} from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private httpService: HttpService) { }


  login(user): Promise<AccountType> {
    return this.httpService.post<any>('auth/signin', user).toPromise();
  }

  // register(user: IUser) {
  //   return this.httpService.httpPost('/auth/signup', user, null);
  // }

}
