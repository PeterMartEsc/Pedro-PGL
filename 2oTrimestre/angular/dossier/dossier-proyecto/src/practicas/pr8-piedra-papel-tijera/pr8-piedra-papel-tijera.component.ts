import { Component, Input } from '@angular/core';
import Partida from './Partida';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr8-piedra-papel-tijera',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pr8-piedra-papel-tijera.component.html',
  styleUrl: './pr8-piedra-papel-tijera.component.css'
})
export class Pr8PiedraPapelTijeraComponent {

  partidaFormData = new FormGroup({
    eleccionJugador: new FormControl('')
  });

  //partida = new Partida();
  eleccionMaquina = "";
  resultado : string = "";

  realizarJugada(){
    let random = Math.floor(Math.random() * 2);

    switch(random){
      case 0:
        this.eleccionMaquina = "piedra";
        break;
      case 1:
        this.eleccionMaquina = "papel";
        break;
      case 2:
        this.eleccionMaquina = "tijera";
        break;
    }

    if(this.partidaFormData.value.eleccionJugador == this.eleccionMaquina){
      this.resultado = "Empate";
    } else {
      if(this.partidaFormData.value.eleccionJugador == 'piedra' && this.eleccionMaquina == 'tijeras' ||
          this.partidaFormData.value.eleccionJugador == 'tijeras' && this.eleccionMaquina == 'papel' ||
          this.partidaFormData.value.eleccionJugador == 'papel' && this.eleccionMaquina == 'piedra'){
          this.resultado = "Ganaste";
      } else {
        this.resultado = "Perdiste";
      }
    }
  }
}
