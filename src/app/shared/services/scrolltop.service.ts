import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ScrollTopService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          if (document.querySelector('.dashboard_body')) {
            document.querySelector('.dashboard_body').scrollTo(0, 0);
          }
        }
      });
    }
  }
}
