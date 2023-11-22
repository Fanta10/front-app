import { Environ } from './models/environ';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCostumerComponent } from 'src/app/layout-costumer/layout-costumer.component';
import { CreateenvComponent } from './components/createenv/createenv/createenv.component';


const routes: Routes = [
  {
    path:'',

    component: LayoutCostumerComponent,
    children : [
      {
        path : 'environnement',
        component : CreateenvComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironRoutingModule { }
