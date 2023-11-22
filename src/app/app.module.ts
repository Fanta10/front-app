import { LoginComponent } from './Auth/Login/components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutCostumerComponent } from './layout-costumer/layout-costumer.component';
import { AppRoutingModule } from './app-routing.module';
import { LogicielModule } from './logiciel/logiciel/logiciel.module';
import { EnvironModule } from './environ/environ/environ.module';
import { RexModule } from './rex/rex/rex.module';
import { IncidentModule } from './incident/incident/incident.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './_utils/error/error/error.component';
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import { ApiUrlInterceptor } from './shared/interceptors/api-url.interceptor';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';



export function tokenGetter(): string {
	const token = localStorage.getItem('token');
	return token ? token : '';
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutCostumerComponent,
    LoginComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogicielModule,
    EnvironModule,
    RexModule,
    IncidentModule,
    DashboardModule,
    DataTablesModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {tokenGetter: tokenGetter}
    }),

	],
exports: [
	],


  providers: [
   TokenInterceptor

    // JwtHelperService,
		// {provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true},
		// {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
		],


  bootstrap: [AppComponent]
})
export class AppModule { }
