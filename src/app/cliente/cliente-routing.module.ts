import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePainelComponent } from './cliente-painel/cliente-painel.component';

const routes: Routes = [
  {
    path: 'Cliente',
    component: ClientePainelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
