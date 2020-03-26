import {Component, HostListener, OnInit} from '@angular/core';
import {ScrollTopService} from '../../shared/services/scrolltop.service';

@Component({
  selector: 'app-dashboardr',
  templateUrl: './dashboardr.component.html',
  styleUrls: ['./dashboardr.component.css']
})
export class DashboardrComponent implements OnInit {

  mobHeight: number;
  mobWidth: number;
  mode: string;
  opened: boolean;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mode = 'side';
    this.opened = false;
    if (event.target.innerWidth < 1199) {
      this.mode = 'push';
      this.opened = false;
    }
  }
  constructor(private scrollTopService: ScrollTopService) {}

  ngOnInit() {
    debugger;
    this.mode = 'side';
    this.opened = false;
    this.mobHeight = (window.screen.height);
    this.mobWidth = (window.screen.width);
    if (this.mobWidth < 1199) {
      this.mode = 'push';
      this.opened = false;
    }
    this.scrollTopService.setScrollTop();
  }
  changed(drawer) {
    this.mobWidth = (window.screen.width);
    if (this.mobWidth < 1199) {
      drawer.toggle();
    }
  }
}
