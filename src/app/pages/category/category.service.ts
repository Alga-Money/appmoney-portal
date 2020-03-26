import { Injectable } from '@angular/core';
import {HttpService} from '../../shared/services/http-service';
import {environment} from '../../../environments/environment';
import {Account} from '../../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesURL: string;

  constructor(private http: HttpService) {
    this.categoriesURL      =  `categories`;
  }

  getCategories(): Promise<Account[]> {
    return this.http.get<any>(this.categoriesURL)
      .toPromise()
      .then(response => {
        return response.data;
      });
  }

}
