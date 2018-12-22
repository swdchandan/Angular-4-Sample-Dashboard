import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const authRouting = RouterModule.forChild(authRoutes);
