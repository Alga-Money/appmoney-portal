import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [ListCategoryComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
