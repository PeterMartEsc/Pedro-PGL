import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gente',
  imports: [
    CommonModule
  ],
  templateUrl: './gente.component.html',
  styleUrl: './gente.component.css'
})

export class GenteComponent {
  array = [
    {
      nombre: "Pedro",
      edad: "20"
    },
    {
      nombre: "Rosa",
      edad: "29"
    },
    {
      nombre: "Pepe",
      edad: "50"
    }
  ]

}
