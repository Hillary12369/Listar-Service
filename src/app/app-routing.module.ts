import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsolicitanteComponent } from './components/solicitante/addsolicitante/addsolicitante.component';
import { ListarsolicitanteComponent } from './components/solicitante/listarsolicitante/listarsolicitante.component';

const routes: Routes = [
  {path: '',redirectTo:"/home", pathMatch: "full"},
  {path: 'listar', component: ListarsolicitanteComponent},
  {path: 'add/solicitante', component:AddsolicitanteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
