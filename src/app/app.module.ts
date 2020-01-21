import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {AccountModule} from "./account/account.module";
import {MatInputModule} from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import {ROUTES} from './routes';
import { CategoryModule } from './category/category.module';
import {HttpService} from './shared/services/http-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    AccountModule,
    CategoryModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
