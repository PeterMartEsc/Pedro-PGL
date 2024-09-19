//import {Persona} from './Persona.js';

function crearPersona(){
    let p = new Persona("Pedro", "MartEsc", 20);
    alert(p.showDATA());
}

/*export*/ class Persona{
    constructor(nom, ape, edad){ //Valor por defecto al crear una persona
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
    }

    showDATA(){
        return this.nombre + " " + this.apellido + " " + this.edad;
    }
}




const DOM = {
    boton: document.getElementById('ejecutar'),
    body: document.querySelector('body'),
    canvas: document.getElementById('canvas')

}

DOM.boton.addEventListener('click', crearPersona);

/*DOM.body.querySelector('keyup', miFuncion);

function miFuncion(event){
    if(event.key === 'Enter'){
        alert('Tecla presionada');
    }
}*/



function crearCanva(event){
    if(event.key === 'Enter'){
        alert(canvasTest());
    }
}

function canvasTest(){

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

}