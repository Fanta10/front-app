import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IncidentRoutingModule } from './incident-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CreateincidentComponent } from './components/createincident/createincident/createincident.component';
import { ConsultationresoComponent } from './components/listeincident/consultationreso/consultationreso.component';
import { ConsultationComponent } from './components/consultation/consultation/consultation.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    AccueilComponent,
    CreateincidentComponent,
    ConsultationresoComponent,
    ConsultationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IncidentRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class IncidentModule { }
