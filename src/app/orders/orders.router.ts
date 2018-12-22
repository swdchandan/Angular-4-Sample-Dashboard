import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VendorWiseComponent} from './vendor-wise/vendor-wise.component';
import {BuildingWiseComponent} from './building-wise/building-wise.component';
import {DateWiseComponent} from './date-wise/date-wise.component';
import {VendorMilkComponent} from './vendor-milk/vendor-milk.component';
import {BuildingMilkComponent} from './building-milk/building-milk.component';

const orderRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'vendor',
    component: VendorWiseComponent
  },
  {
    path: 'building',
    component: BuildingWiseComponent
  },
  {
    path: 'date',
    component: DateWiseComponent
  },
  {
    path: 'vendor-milk',
    component: VendorMilkComponent
  },
  {
    path: 'building-milk',
    component: BuildingMilkComponent
  }
];

export const orderRouting = RouterModule.forChild(orderRoutes);
