import { Component, OnInit } from '@angular/core';
import {menuItem} from './menu-items';

@Component({
  selector: 'app-navbar-layout',
  templateUrl: './navbar-layout.component.html',
  styleUrls: ['./navbar-layout.component.css']
})
export class NavbarLayoutComponent implements OnInit {
  menuItems;

  constructor() {
    this.menuItems = menuItem;
  }

  ngOnInit() {
  }

}
