import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from '../models/login-request';
import {LoginResponse} from '../models/login-response';
import {ServerConstants} from '../../constants/server-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  authLogin(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(ServerConstants.LIVE_SERVER_URL + 'dn-partner/login', loginRequest, {headers: this.headers});
  }
}
