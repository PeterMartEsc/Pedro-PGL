const DOM = {
    canvas : document.getElementById("myCanvas"),
    resultado : document.getElementById("resultado"),
    letraApostada : document.getElementById("letraApostada"),
}

//Array palabras del juego
let arrayPalabras = ["manzana", "caballo", "pelota", "murcielago"];

//Funcion escribir el resultado
function escribirResultado(){
    let palabra = arrayPalabras[Math.floor(Math.random(0,4))];

    for(let i = 1; i<resuelto.length; i++){
        resultado += "_ "; 
    }
    DOM.resultado.innerHTML = resultado;

}


/*//Funcion que crea el canva
function crearCanva(event){
    if(event.key === 'Enter'){  //No va a ser con el enter, el canva está desde el principio, y el resto se irá generando cuando la letra sea incorrecta
        alert(canvasAhorcado());
    }
}

//Diseño del canva
function canvasAhorcado(){

    //Y aumenta hacia abajo

    //Crear el espacio de dibujo:
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    //Dibujando lineas
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);

    ctx.stroke();


    //Dibujar cabeza:
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.ellipse(203,83,8,11,0,0, Math.PI*2); //se establece centro y radios
            
    ctx.stroke();

}*/