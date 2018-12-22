import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {orderRouting} from './orders.router';
import { VendorWiseComponent } from './vendor-wise/vendor-wise.component';
import { BuildingWiseComponent } from './building-wise/building-wise.component';
import { DateWiseComponent } from './date-wise/date-wise.component';
import { VendorMilkComponent } from './vendor-milk/vendor-milk.component';
import { BuildingMilkComponent } from './building-milk/building-milk.component';
import {NbCardModule, NbRouteTabsetModule, NbTabsetModule} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    NbCardModule,
    orderRouting
  ],
  declarations: [HomeComponent, VendorWiseComponent, BuildingWiseComponent, DateWiseComponent, VendorMilkComponent, BuildingMilkComponent]
})
export class OrdersModule { }
