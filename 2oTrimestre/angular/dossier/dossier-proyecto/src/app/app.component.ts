import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre : string = "Pedro";
  apellidos : string = "Martín Escuela";
  title = 'dossier-proyecto';

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
