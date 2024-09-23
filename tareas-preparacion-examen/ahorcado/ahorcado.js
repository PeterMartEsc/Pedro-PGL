const DOM = {
    canvas : document.getElementById("myCanvas"),
    resultado : document.getElementById("resultado"),
    letraApostada : document.getElementById("letraApostada"),
    errores : document.getElementById("errores"),
    resultadoFinal : document.getElementById("resultadoFinal"),
    boton : document.getElementById("boton"),
    historialLetras : document.getElementById("historialLetras"),
}

//Array palabras del juego
let arrayPalabras = ["manzana", "caballo", "pelota", "murcielago", "asesino", "dragon", "gato", "carta"];
let palabraElegida = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];   //Multiplica la cantidad de palabras del array por el numero random
let arrayEspacios = [];
let arrayFallos = [];

escribirHuecos();

//Funcion escribir el resultado
function escribirHuecos(){
    arrayEspacios = [];

    for(let i = 0; i<palabraElegida.length; i++){
        arrayEspacios[i] = "_"; 
    }

    DOM.resultado.innerHTML = arrayEspacios.join(" ");
}


function escribirLetra(){

    let letra = (DOM.letraApostada.value).toLowerCase();

    if (palabraElegida.includes(letra)) {

        for (let i = 0; i < palabraElegida.length; i++) {

            //Si la palabra elegida, contiene la letra introducida en la posición i, reemplaza el hueco con la letra
            if (palabraElegida[i] === letra) {
                arrayEspacios[i] = letra;
            }
        }
        DOM.resultado.innerHTML = arrayEspacios.join(" ");

        //Limpia el hueco de la letra introducida
        DOM.letraApostada.value = "";

    } else {
        // Si la letra no está en la palabra elegida, la añadimos a los fallos
        if (!arrayFallos.includes(letra)) {

            arrayFallos.push(letra);
        
            
            
            
            // Actualizamos la lista de errores
            DOM.errores.innerHTML = arrayFallos.join(", ");
            
            //Limpia el hueco de la letra introducida
            DOM.letraApostada.value = "";
            DOM.historialLetras.value += "Letra errónea: " + letra + ", ";
            
            //Llama al crear canva
            canvasAhorcado();
        }
    }

    // Comprobamos si la palabra está completa
    if (!arrayEspacios.includes("_")) {
        let textoFinal = "¡Has ganado! La palabra era: " + palabraElegida;
        DOM.resultadoFinal.innerHTML = textoFinal;
        DOM.boton.style.display = "none";
    } else if (arrayFallos.length === 8) {
        let textoFinal = "Has perdido! La palabra era: " + palabraElegida;
        DOM.resultadoFinal.innerHTML = textoFinal;
        DOM.boton.style.display = "none";
    }
}


//Diseño del canva
function canvasAhorcado(){

    switch(arrayFallos.length){
    
        case 1:
            canvas1();
            break;
        case 2:
            canvas2();
            break;
        case 3:
            canvas3();
            break;
        case 4:
            canvas4();
            break;
        case 5:
            canvas5();
            break;
        case 6:
            canvas6();
            break;
        case 7:
            canvas7();
            break;
        case 8:
            canva8();
            break;
    }

}

function canvas1(){
    
    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.stroke();

}

function canvas2(){
    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();
}

function canvas3(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();
}

function canvas4(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();

    //Dibujar columna
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(145, 97);
    ctx.lineTo(145, 147); //Columna
    ctx.stroke();
}

function canvas5(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();

    //Dibujar columna y pierna
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(145, 97);
    ctx.lineTo(145, 147); //Columna
    ctx.lineTo(125, 167);//Pierna 1
    ctx.stroke();

}

function canvas6(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();

    //Dibujar columna y piernas
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(145, 97);
    ctx.lineTo(145, 147); //Columna
    ctx.lineTo(125, 167); //Pierna1
    ctx.moveTo(145, 147);
    ctx.lineTo(165, 167); //Pierna 2
    ctx.stroke();

}

function canvas7(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();

    //Dibujar columna, piernas y brazo
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(145, 97);
    ctx.lineTo(145, 147); //Columna
    ctx.lineTo(125, 167); //Pierna1

    ctx.moveTo(145, 147);
    ctx.lineTo(165, 167); //Pierna 2

    ctx.moveTo(145, 107);
    ctx.lineTo(125, 127); //Brazo 1

    ctx.stroke();

}

function canvas8(){

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    //Dibujando lineas
    ctx.beginPath();
    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);
    ctx.lineTo(150,50); //Otro palo más
    ctx.stroke();


    ctx.strokeStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(145, 50);
    ctx.lineTo(145, 60); //Cuerda ahorcado
    ctx.stroke();

    //Dibujar cabeza:
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.ellipse(145,80,17,17,0,0, Math.PI*2); //se establece centro y radios
    ctx.stroke();

    //Dibujar columna, piernas y brazo
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(145, 97);
    ctx.lineTo(145, 147); //Columna
    ctx.lineTo(125, 167); //Pierna1

    ctx.moveTo(145, 147);
    ctx.lineTo(165, 167); //Pierna 2

    ctx.moveTo(145, 107);
    ctx.lineTo(125, 127); //Brazo 1

    ctx.moveTo(145, 107);
    ctx.lineTo(165, 127); //Brazo 2

    ctx.stroke();

}