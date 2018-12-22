import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AuthLoginService} from '../../shared/server/services/auth-login.service';
import {LoginRequest} from '../../shared/server/models/login-request';
import {LoginResponse} from '../../shared/server/models/login-response';
import {CookieService} from 'ngx-cookie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthLoginService]
})
export class LoginComponent implements OnInit {
  dnDirectLoginForm;
  formNotValid: boolean;
  credsWrong: boolean;
  loginRequest: LoginRequest;
  loginResponse: LoginResponse;

  constructor(private fb: FormBuilder, private authLoginService: AuthLoginService, private cookieService: CookieService, private router: Router) {
    this.formNotValid = false;
    this.credsWrong = false;
    this.loginRequest = new LoginRequest();
    this.loginResponse = new LoginResponse();
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.dnDirectLoginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLogin() {
    if(!this.dnDirectLoginForm.valid) {
      this.formNotValid = true;
      this.credsWrong = false;
    } else {
      const loginForm = this.dnDirectLoginForm.value;
      this.loginRequest.username = loginForm.username;
      this.loginRequest.password = loginForm.password;
      this.authLoginService.authLogin(this.loginRequest).subscribe(
        loginResponse => {
          this.loginResponse = loginResponse;
          console.log(loginResponse);
          if(this.loginResponse.status === 0) {
            this.formNotValid = false;
            this.credsWrong = true;
          } else if(this.loginResponse.status === 1){
            this.cookieService.put('userId', this.loginResponse.userId.toString());
            this.cookieService.put('role', this.loginResponse.userId.toString());
            this.cookieService.put('name', this.loginResponse.userId.toString());
            this.cookieService.put('parentProvider', this.loginResponse.userId.toString());
            this.cookieService.put('partnerId', this.loginResponse.userId.toString());
            this.cookieService.put('message', this.loginResponse.userId.toString());
            this.cookieService.put('pageRestrictions', this.loginResponse.userId.toString());
            this.cookieService.put('status', this.loginResponse.userId.toString());

            this.router.navigate(['/orders/home']);
          }
        },
        error => {
          console.log(error);
          this.formNotValid = false;
          this.credsWrong = true;
        }
      );
    }
  }

}
