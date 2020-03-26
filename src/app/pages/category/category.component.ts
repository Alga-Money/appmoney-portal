import { Component, OnInit } from '@angular/core';
import {fadeAnimation} from '../../shared/animations/fade.animation';

@Component({
  selector: 'category',
  template: `
    <div [@fadeAnimation]="route.isActivated ? route.activatedRoute : ''">
      <router-outlet #route="outlet"></router-outlet>
    </div>
  `,
  animations: [fadeAnimation]
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
