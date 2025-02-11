import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


type Persona ={
  nombre: string,
  peso: number,
  altura: number,
  imc: number
}

@Component({
  selector: 'app-calculo-imc',
  imports: [
    CommonModule,
    ReactiveFormsModule
    ],
  templateUrl: './calculo-imc.component.html',
  styleUrl: './calculo-imc.component.css'
})

export class CalculoImcComponent {

  formulario = new FormGroup({
    nombre: new FormControl(''),
    peso: new FormControl(''),
    altura: new FormControl(''),
  });

  personas : Persona[] = [];

  calcularImc() {
    const peso = parseFloat(this.formulario.value.peso || '0');
    const altura = parseFloat(this.formulario.value.altura || '0');
    const nombre = this.formulario.value.nombre || 'anonimo';
    const imc = peso/(altura*altura);

    let persona : Persona = {
      nombre: nombre,
      peso : peso,
      altura : altura,
      imc : imc
    }

    this.personas.push(persona);

    this.formulario.reset();
  }

}
