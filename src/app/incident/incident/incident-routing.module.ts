


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCostumerComponent } from 'src/app/layout-costumer/layout-costumer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CreateincidentComponent } from './components/createincident/createincident/createincident.component';
import { ConsultationresoComponent } from './components/listeincident/consultationreso/consultationreso.component';
import { ConsultationComponent } from './components/consultation/consultation/consultation.component';




const routes: Routes = [

  {
    path:'',

    component: LayoutCostumerComponent,
    children : [
      {
        path : 'incident',
        component : AccueilComponent
      },
      {
        path : 'createincident',
        component : CreateincidentComponent
      },
      {
        path : 'resolution',
        component : ConsultationresoComponent
      },
      {
        path : 'consulter/:search',
        component : ConsultationComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule { }
