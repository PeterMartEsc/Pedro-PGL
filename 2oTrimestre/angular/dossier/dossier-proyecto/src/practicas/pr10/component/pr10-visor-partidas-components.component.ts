import { Component, inject } from '@angular/core';
import Partida from '../../pr8-piedra-papel-tijera/Partida';
import { Pr10VisorPartidasServiceService } from '../service/pr10-visor-partidas-service.service';

@Component({
  selector: 'app-pr10-visor-partidas-components',
  imports: [],
  templateUrl: './pr10-visor-partidas-components.component.html',
  styleUrl: './pr10-visor-partidas-components.component.css'
})
export class Pr10VisorPartidasComponentsComponent {

  partidasService : Pr10VisorPartidasServiceService = inject(Pr10VisorPartidasServiceService);

  arrayPartidas : Partida[] = []

  constructor() {
    this.arrayPartidas = this.partidasService.getAll();
  }
}
