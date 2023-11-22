import { CreatelogicielComponent } from './components/createlogiciel/createlogiciel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutCostumerComponent } from 'src/app/layout-costumer/layout-costumer.component';


const routes: Routes = [
  {
    path:'',

    component: LayoutCostumerComponent,
    children : [
      {
        path : 'logiciel',
        component : CreatelogicielComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicielRoutingModule { }
