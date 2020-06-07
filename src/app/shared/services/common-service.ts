import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class CommonService {
  constructor() {
  }

  createParams(queryString: QueryString) {
    let params = new HttpParams();
    if (queryString.page) {
      params = params.append('page', queryString.page.toString());
    }
    if (queryString.limit) {
      params = params.append('limit', queryString.limit.toString());
    }
    if (queryString.searchText) {
      params = params.append('searchText', queryString.searchText);
    }
    if (queryString.region) {
      params = params.append('region', queryString.region);
    }
    if (queryString.date_start && queryString.date_end) {
      params = params.append('date_start', queryString.date_start);
      params = params.append('date_end', queryString.date_end);
    }

    if (queryString.accountId) {
      params = params.append('accountId', queryString.accountId);
    }
    if (queryString.categoryId) {
      params = params.append('categoryId', queryString.categoryId);
    }
    if (queryString.user_id) {
      params = params.append('user_id', queryString.user_id);
    }
    if (queryString.status) {
      params = params.append('status', queryString.status);
    }
    if (queryString.type) {
      params = params.append('type', queryString.type);
    }
    return params;
  }
}

export interface QueryString {
  page?: string;
  limit?: string;
  searchText?: string;
  region?: string;
  date_start?: string;
  date_end?: string;
  accountId?: string;
  categoryId?: string;
  user_id?: string;
  status?: string;
  type?: string;
}
