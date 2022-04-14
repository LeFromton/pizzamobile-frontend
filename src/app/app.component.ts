import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCashier = false;
  isChef = true;
  isDelivery = false;


  ngOnInit() {
  }
}
