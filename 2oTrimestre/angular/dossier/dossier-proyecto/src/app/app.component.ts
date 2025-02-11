import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from '../practicas/pr3-prueba/prueba.component';
import { GenteComponent } from '../practicas/pr4-gente/gente.component';
import { CommonModule } from '@angular/common';
import { Pr7GatosComponent } from '../practicas/pr7-gatos/pr7-gatos.component';
import { TablaMultiplicarComponent } from './tareas-clase/tabla-multiplicar/tabla-multiplicar.component';
import { Pr8PiedraPapelTijeraComponent } from '../practicas/pr8-piedra-papel-tijera/pr8-piedra-papel-tijera.component';
import { Pr9DobleEnlazadoComponent } from '../practicas/pr9-doble-enlazado/pr9-doble-enlazado.component';
import { CalculoImcComponent } from '../practicas/calculo-imc/calculo-imc.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [
    CommonModule,
    //RouterOutlet,
    //PruebaComponent, //Pr3
    //GenteComponent,  //Pr4
    //Pr7GatosComponent,
    //TablaMultiplicarComponent,
    //Pr8PiedraPapelTijeraComponent,
    //Pr9DobleEnlazadoComponent,
    CalculoImcComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dossier-proyecto';
  nombre : string = "Pedro";
  apellidos : string = "Martín Escuela";
}
