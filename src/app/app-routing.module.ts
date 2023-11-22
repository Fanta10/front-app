
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/Login/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
   },
   { path: 'login', pathMatch: 'full', redirectTo: ''},

 {
  path: 'home',
  loadChildren: () => import('./logiciel/logiciel/logiciel.module').then(m => m.LogicielModule)
 },
 {
  path: 'home',
  loadChildren: () => import('./environ/environ/environ.module').then(m => m.EnvironModule)
 },
 {
  path: 'home',
  loadChildren: () => import('./rex/rex/rex.module').then(m => m.RexModule)
 },
 {
  path: 'home',
  loadChildren: () => import('./incident/incident/incident.module').then(m => m.IncidentModule)
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
