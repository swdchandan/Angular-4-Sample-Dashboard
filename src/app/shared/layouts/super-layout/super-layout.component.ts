import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-super-layout',
  templateUrl: './super-layout.component.html',
  styleUrls: ['./super-layout.component.css']
})
export class SuperLayoutComponent implements OnInit {
  userToken: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.userToken = this.cookieService.get('message');
    console.log(this.userToken);
    if(this.userToken === undefined) {
      this.router.navigate(['/auth/login']);
    }
  }

  ngOnInit() {
  }

}
