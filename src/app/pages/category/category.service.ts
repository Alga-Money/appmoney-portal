import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {environment} from '../../../environments/environment';
import {Account} from '../../core/model';
import {TokenStorageService} from '../../shared/services/token-storage-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesURL: string;

  constructor(private http: HttpService,
              private storageToken: TokenStorageService) {
    this.categoriesURL      =  `categories`;
  }

  getCategories(): Promise<Account[]> {
    const user = this.storageToken.getUser();
    return this.http.get<any>(`${this.categoriesURL}/?user_id=${user.id}`)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

  registerCategory(data: any): Promise<Account> {
    return this.http.post<Account>(this.categoriesURL, data)
      .toPromise();
  }

}
