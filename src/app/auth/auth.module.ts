import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NbLayoutModule } from '@nebular/theme';
import {authRouting} from './auth.router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbLayoutModule,
    authRouting
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
