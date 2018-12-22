import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabs: any[];

  constructor() {
    this.tabs = [
      {
        title: 'Date/Vendor',
        route: '/orders/vendor'
      },
      {
        title: 'Date/Building',
        route: '/orders/building'
      },
      {
        title: 'Date',
        route: '/orders/date'
      },
      {
        title: 'Vendor-Milk',
        route: '/orders/vendor-milk'
      },
      {
        title: 'Building-Milk',
        route: '/orders/building-milk'
      },
    ];
  }

  ngOnInit() {
  }

}
