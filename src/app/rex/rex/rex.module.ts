import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaterexComponent } from './components/createrex/createrex/createrex.component';
import { ListerexComponent } from './components/listerex/listerex/listerex.component';
import { RexRoutingModule } from './rex-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditrexComponent } from './components/editrex/editrex/editrex.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    CreaterexComponent,
    ListerexComponent,
    EditrexComponent
  ],
  imports: [
    CommonModule,
    RexRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class RexModule { }
