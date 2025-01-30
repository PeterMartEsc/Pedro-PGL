import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Gato } from './Gato';

@Component({
  selector: 'app-pr7-gatos',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pr7-gatos.component.html',
  styleUrl: './pr7-gatos.component.css'
})
export class Pr7GatosComponent {

  gatosFormData = new FormGroup({
    nombre: new FormControl(''),
    peso: new FormControl(''),
    edad: new FormControl(''),
    equivalenciaHumano: new FormControl(''),
  });

  guardarPersona() {
    let gato = new Gato();
    gato.nombre = this.gatosFormData.value.nombre??"";
    gato.peso = parseInt(this.gatosFormData.value.peso ?? '0');
    gato.edad = parseInt(this.gatosFormData.value.edad ?? '0');
    gato.equivalenciaHumano = parseInt(this.gatosFormData.value.equivalenciaHumano ?? '0');
    console.log(this.gatosFormData.value.equivalenciaHumano);
    this.gatos.push(gato);
  }
  gatos: Gato[] = [];
}

