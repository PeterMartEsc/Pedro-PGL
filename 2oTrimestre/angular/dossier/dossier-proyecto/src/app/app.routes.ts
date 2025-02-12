import { Routes } from '@angular/router';
import { CalculoImcComponent } from '../practicas/calculo-imc/calculo-imc.component';
import { Pr7GatosComponent } from '../practicas/pr7-gatos/pr7-gatos.component';
import { Pr13GatosComponent } from '../practicas/pr13/pr13-gatos/pr13-gatos.component';

export const routes: Routes = [
  // {
  //   path: 'imc/:id',
  //   component: CalculoImcComponent,
  //   title: 'Calculo Imc'
  // },
  // {
  //   path: 'gatos',
  //   component: Pr7GatosComponent,
  //   title: 'Operaciones Gatos'
  // }

  {
    path: 'pr13/:id',
    component: Pr13GatosComponent,
    title: 'Práctica 13'
  }

];
