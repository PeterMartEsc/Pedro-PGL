import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PruebaComponent } from '../practicas/pr3-prueba/prueba.component';
import { GenteComponent } from '../practicas/pr4-gente/gente.component';
import { CommonModule } from '@angular/common';
import { Pr7GatosComponent } from '../practicas/pr7-gatos/pr7-gatos.component';
import { TablaMultiplicarComponent } from './tareas-clase/tabla-multiplicar/tabla-multiplicar.component';
import { Pr8PiedraPapelTijeraComponent } from '../practicas/pr8-piedra-papel-tijera/pr8-piedra-papel-tijera.component';
import { Pr9DobleEnlazadoComponent } from '../practicas/pr9-doble-enlazado/pr9-doble-enlazado.component';
import { CalculoImcComponent } from '../practicas/calculo-imc/calculo-imc.component';
import { Pr13GatosComponent } from '../practicas/pr13/pr13-gatos/pr13-gatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    //PruebaComponent, //Pr3
    //GenteComponent,  //Pr4
    //Pr7GatosComponent,
    //TablaMultiplicarComponent,
    //Pr8PiedraPapelTijeraComponent,
    //Pr9DobleEnlazadoComponent,
    //CalculoImcComponent,
    Pr13GatosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dossier-proyecto';
  nombre : string = "Pedro";
  apellidos : string = "Martín Escuela";
}
