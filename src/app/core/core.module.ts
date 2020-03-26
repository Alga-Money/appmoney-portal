import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AcessDeniedComponent} from './acess-denied/acess-denied.component';
import {AuthInterceptor} from './AuthInterceptor';
import {TokenStorageService} from '../shared/services/token-storage-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AccountService} from '../pages/account/account.service';


@NgModule({
  declarations: [PageNotFoundComponent, AcessDeniedComponent],
  imports: [
    CommonModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
             TokenStorageService]
})
export class CoreModule {
}
