import { Component, inject } from '@angular/core';
import { GatosApiArray, GatosService } from '../service/gatos.service';
import { Gato } from '../../pr7-gatos/Gato';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr13-gatos',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './pr13-gatos.component.html',
  styleUrl: './pr13-gatos.component.css'
})
export class Pr13GatosComponent {
  gatosApiArray : GatosApiArray[] = [];

  gatosService: GatosService = inject(GatosService);
  arrayGatos : Gato[] = [];

  constructor(){
    this.gatosService.getGatosApi().subscribe((data =>{
      this.gatosApiArray = data;
    }))
  }


}
