import { CanvasAhorcado } from './CanvasAhorcado.js';

export class CrearJuego {

    constructor(){
        this.arrayEspacios = [];
        this.arrayFallos = [];
        this.arrayPalabras = ["manzana", "caballo", "pelota", "murcielago", "asesino", "dragon", "gato", "carta"];
        this.palabraElegida = this.arrayPalabras[Math.floor(Math.random() * this.arrayPalabras.length)];
        this.resultado = document.getElementById("resultado");
        this.letraApostada = document.getElementById("letraApostada");
        this.errores = document.getElementById("errores");
        this.resultadoFinal = document.getElementById("resultadoFinal");
        this.historialLetras = document.getElementById("historialLetras");
        this.boton = document.getElementById("boton");

        this.canvas = new CanvasAhorcado();
    }

    escribirHuecos(){
        this.arrayEspacios = [];

        console.log(this.arrayEspacios);
    
        for(let i = 0; i<this.palabraElegida.length; i++){
            this.arrayEspacios[i] = "_"; 
        }
    
        this.resultado.innerHTML = this.arrayEspacios.join(" ");
    }
    
    escribirLetra(letra){
    
        letra = letra.toLowerCase().trim();
        let regex = /^[a-z]$/;
    
        if (letra === "" || (!regex.test(letra)) ) {
            alert("Por favor, introduce una letra.");   //Envía una alerta si no se introduce ninguna letra, así no te deja seguir usando el botón hasta que la aceptes
            return;
        }
    
        if (this.palabraElegida.includes(letra)) {
    
            for (let i = 0; i < this.palabraElegida.length; i++) {
    
                //Si la palabra elegida, contiene la letra introducida en la posición i, reemplaza el hueco con la letra
                if (this.palabraElegida[i] === letra) {
                    this.arrayEspacios[i] = letra;
                }
            }

            
            //Escribe en el textarea de historial
            this.historialLetras.value += "Letra correcta: " + letra + ", ";
            //Actualizamos el resultado
            this.resultado.innerHTML = this.arrayEspacios.join(" ");
            //Limpia el hueco de la letra introducida
            this.letraApostada.value = "";
    
        } else {
            // Si la letra no está en la palabra elegida, la añadimos a los fallos
            
            if (!this.arrayFallos.includes(letra)) {     //Comprueba que no está ya en el array de fallos
    
                console.log(letra);
                //Metemos la letra en el array de fallos
                this.arrayFallos.push(letra);
                
                
                //Llama al crear canva
                this.canvas.seleccionarCanvas(this.arrayFallos);
                
                // Actualizamos la lista de errores
                this.errores.innerHTML = this.arrayFallos.join(", ");
                //Escribe en el textarea de historial
                this.historialLetras.value += "Letra errónea: " + letra + ", ";
                //Limpia el hueco de la letra introducida
                this.letraApostada.value = "";
    
                if (this.arrayFallos.length === 8) {
                    let textoFinal = "Has perdido! La palabra era: " + this.palabraElegida;
                    this.resultadoFinal.innerHTML = textoFinal;
                    this.boton.style.display = "none";
                    return;     //Para que salga de la funcion
                }
            }
        }
    
        // Comprobamos si la palabra está completa
        if (!this.arrayEspacios.includes("_")) {
            let textoFinal = "¡Has ganado! La palabra era: " + this.palabraElegida;
            this.resultadoFinal.innerHTML = textoFinal;
            this.boton.style.display = "none";
        }
    }
}





