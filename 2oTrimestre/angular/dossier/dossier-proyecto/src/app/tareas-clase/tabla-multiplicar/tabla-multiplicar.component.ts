import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-tabla-multiplicar',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './tabla-multiplicar.component.html',
  styleUrl: './tabla-multiplicar.component.css'
})
export class TablaMultiplicarComponent {

  @Input() tabla = 3;
  iterador: number = 1;

  public resultado : number = 0;
  public operacion : string = "";

  generarTabla() {
    this.resultado = this.iterador * this.tabla;
    this.iterador++;
    this.operacion = this.iterador + " * " + this.tabla;
  }
}
