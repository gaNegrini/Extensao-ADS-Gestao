import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePainelComponent } from '../cliente/cliente-painel/cliente-painel.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'Cliente',
    component: ClientePainelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
