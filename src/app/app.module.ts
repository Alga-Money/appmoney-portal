import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainHeaderComponent} from './shared/main-header/main-header.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AccountModule} from './pages/account/account.module';
import {CategoryModule} from './pages/category/category.module';
import {HttpService} from './shared/services/http-service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TransactionModule} from './pages/transaction/transaction.module';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SnackBarService} from './shared/services/snack-bar.service';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module';
import {ScrollTopService} from './shared/services/scrolltop.service';
import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {CurrencyMaskModule} from 'ng2-currency-mask';



export function getBaseHref(platformLocation: PlatformLocation): string {
  console.debug(platformLocation.getBaseHrefFromDOM());
  return platformLocation.getBaseHrefFromDOM();
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    AuthModule,
    NgbModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CoreModule,
    CurrencyMaskModule
  ],
  providers: [HttpService,
              SnackBarService,
              ScrollTopService,
        {provide: APP_BASE_HREF, useFactory: getBaseHref, deps: [PlatformLocation]}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
