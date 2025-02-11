import { Routes } from '@angular/router';
import { CalculoImcComponent } from '../practicas/calculo-imc/calculo-imc.component';
import { Pr7GatosComponent } from '../practicas/pr7-gatos/pr7-gatos.component';

export const routes: Routes = [
  {
    path: 'imc',
    component: CalculoImcComponent,
    title: 'Calculo Imc'
  },
  {
    path: 'gatos',
    component: Pr7GatosComponent,
    title: 'Operaciones Gatos'
  }

];
