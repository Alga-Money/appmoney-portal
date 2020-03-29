import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpService} from './shared/services/http-service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import {ChartsModule} from 'ng2-charts';



export function getBaseHref(platformLocation: PlatformLocation): string {
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
    CurrencyMaskModule,
    ChartsModule
  ],
  providers: [HttpService,
              SnackBarService,
              ScrollTopService,
        {provide: APP_BASE_HREF, useFactory: getBaseHref, deps: [PlatformLocation]}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
