import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AcessDeniedComponent } from './acess-denied/acess-denied.component';



@NgModule({
  declarations: [PageNotFoundComponent, AcessDeniedComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
