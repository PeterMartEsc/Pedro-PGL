import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface GatosApiArray {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
  //favourites: Favourite;
}

@Injectable({
  providedIn: 'root'
})

export class GatosService {
  http = inject(HttpClient)

  getGatosApi(){
    return this.http.get<GatosApiArray[]>('https://api.thecatapi.com/v1/images/search?limit=10');
  }
}
