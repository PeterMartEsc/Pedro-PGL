import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PruebaComponent } from '../practicas/pr3-prueba/prueba.component';
import { GenteComponent } from '../practicas/pr4-gente/gente.component';
import { CommonModule } from '@angular/common';
import { Pr7GatosComponent } from '../practicas/pr7-gatos/pr7-gatos.component';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [
    CommonModule,
    //RouterOutlet,
    //PruebaComponent, //Pr3
    //GenteComponent,  //Pr4
    Pr7GatosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dossier-proyecto';
  nombre : string = "Pedro";
  apellidos : string = "Martín Escuela";

  //tablaMultiplicar = "";
  tabla : string[] = [];

  ejecutate(dato : string){
    const numero = parseInt(dato);
    //let contador = 1;
    //alert("Tu numero multiplicado por 3 = " +numero*3)

    //for(let i = 1; i<=10; i++){
    //  this.tablaMultiplicar = this.tablaMultiplicar.concat((numero*i)+' \n');
    //}

    for(let i = 1; i<=10; i++){
      this.tabla.push(numero + " * " + i + " = " + (numero*i)+' \n');
    }
  }
}
