import {Routes} from '@angular/router';
import {SuperLayoutComponent} from './shared/layouts/super-layout/super-layout.component';
import {OrdersModule} from './orders/orders.module';

export const appRoutes: Routes = [
  {
    path: '',
    component: SuperLayoutComponent,
    data: {pageTitle: 'DN-Direct'},
    children: [
      {
        path: '',
        redirectTo: 'orders/home',
        pathMatch: 'full'
      },
      {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];
