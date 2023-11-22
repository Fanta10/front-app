import { LayoutCostumerComponent } from './../../layout-costumer/layout-costumer.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreaterexComponent } from './components/createrex/createrex/createrex.component';



const routes: Routes = [
  {
    path:'',

    component: LayoutCostumerComponent,
    children : [
      {
        path : 'rex',
        component : CreaterexComponent
      },




    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RexRoutingModule { }
