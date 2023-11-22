import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreatelogicielComponent } from './components/createlogiciel/createlogiciel.component';
import { LogicielRoutingModule } from './logiciel-routing.module';
import { ListelogicielComponent } from './components/listelogiciel/listelogiciel.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CreatelogicielComponent,
    ListelogicielComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LogicielRoutingModule,
    DataTablesModule,



  ]
})
export class LogicielModule { }
