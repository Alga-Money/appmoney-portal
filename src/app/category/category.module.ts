import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { ListCategoryComponent } from './list-category/list-category.component';
import {AngularMaterialModule} from '../angular-material.module';

@NgModule({
  declarations: [ListCategoryComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
