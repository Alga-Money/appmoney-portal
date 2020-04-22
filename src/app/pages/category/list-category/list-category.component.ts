import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  listCategories: any;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }


  navigateToCreateCategory() {
    this.router.navigate(['list-categories/create-category']);
  }

  async getCategories() {
    this.listCategories = await this.categoryService.getCategories();
  }
}
