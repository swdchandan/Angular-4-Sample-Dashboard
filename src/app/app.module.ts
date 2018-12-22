import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {NbMenuModule, NbTabsetModule, NbThemeModule} from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { SuperLayoutComponent } from './shared/layouts/super-layout/super-layout.component';
import { HeaderLayoutComponent } from './shared/layouts/header-layout/header-layout.component';
import { NavbarLayoutComponent } from './shared/layouts/navbar-layout/navbar-layout.component';
import {appRoutes} from './app.router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieModule} from 'ngx-cookie';


@NgModule({
  declarations: [
    AppComponent,
    HeaderLayoutComponent,
    NavbarLayoutComponent,
    SuperLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
