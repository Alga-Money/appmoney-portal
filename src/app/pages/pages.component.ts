import {Component} from '@angular/core';
import {fadeAnimation} from '../shared/animations/fade.animation';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  animations: [fadeAnimation],
  host: {'[@fadeAnimation]': ''}
})
export class PagesComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
