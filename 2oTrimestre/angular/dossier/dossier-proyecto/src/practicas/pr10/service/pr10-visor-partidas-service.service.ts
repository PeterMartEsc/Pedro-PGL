import { Injectable, inject } from '@angular/core';
import Partida from '../../pr8-piedra-papel-tijera/Partida';

@Injectable({
  providedIn: 'root'
})
export class Pr10VisorPartidasServiceService {
  partidas : Partida[] = [];


  constructor() { }


  addPartida(partida : Partida){
    this.partidas.push(partida)
  }

  getAll(){
    return this.partidas;
  }
}
