import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'appmoney-portal';
  isConnected: boolean = true;

  ngOnInit(): void {



    if (!navigator.onLine) {
      this.isConnected = false;
    } else {
      this.isConnected = true;
    }
  }




}
