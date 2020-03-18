import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import {AccountModule} from "./account/account.module";
import { CategoryModule } from './category/category.module';
import {HttpService} from './shared/services/http-service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TransactionModule} from './transaction/transaction.module';
import {AngularMaterialModule} from './angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SnackBarService} from './shared/services/snack-bar.service';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    AccountModule,
    CategoryModule,
    TransactionModule,
    AuthModule,
    NgbModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule, ReactiveFormsModule, RouterModule
  ],
  providers: [HttpService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
