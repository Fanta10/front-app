import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateenvComponent } from './components/createenv/createenv/createenv.component';
import { ListeenvComponent } from './components/listeenv/listeenv/listeenv.component';
import { EnvironRoutingModule } from './environ-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    CreateenvComponent,
    ListeenvComponent
  ],
  imports: [
    CommonModule,
    EnvironRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    DataTablesModule,
  ]
})
export class EnvironModule { }
