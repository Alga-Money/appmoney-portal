import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '../shared/footer/footer.component';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {AngularMaterialModule} from '../angular-material.module';
import {PagesRoutingModule} from './pages.routing';
import {AccountService} from './account/account.service';



@NgModule({
  declarations: [PagesComponent, FooterComponent, NavbarComponent],
  exports: [PagesComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    PagesRoutingModule,
  ],
  providers: [
    AccountService
  ]
})
export class PagesModule { }
