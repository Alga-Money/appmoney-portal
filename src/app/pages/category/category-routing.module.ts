import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category.component';
import {ListCategoryComponent} from './list-category/list-category.component';
import {RegisterCategoryComponent} from './register-category/category.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {path: '', pathMatch: 'full', component: ListCategoryComponent},
      {path: 'create-category', component: RegisterCategoryComponent},
      {path: '**', redirectTo: ''}


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
