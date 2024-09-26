const DOM = {
    resultado : document.getElementById('resultado'),
    boton : document.getElementById('boton')
}

let eleccionNumIA = "";
let eleccionJugador = "";

function eleccionPiedra(){
    eleccionJugador = 1;
    eleccionIA(eleccionJugador);
    //DOM.boton.style.display = "none";
}

function eleccionPapel(){
    eleccionJugador = 2;
    eleccionIA(eleccionJugador);
    //DOM.boton.style.display = "none";

}

function eleccionTijeras(){
    eleccionJugador = 3;
    eleccionIA(eleccionJugador);
    //DOM.boton.style.display = "none";

}

function eleccionIA(eleccionJugador){
    eleccionNumIA = Math.floor(Math.random()*3);
    jugar(eleccionNumIA, eleccionJugador);
}


function jugar(eleccionNumIA, eleccionJugador){

    switch(eleccionJugador) { 
        
        case 1: 
        
        if(eleccionNumIA === 2){
            DOM.resultado.innerHTML = "Has perdido contra Papel";
        } else if(eleccionNumIA === 3){
            DOM.resultado.innerHTML = "Has ganado contra Tijeras";
        } else {
            DOM.resultado.innerHTML = "Has empatado contra Piedra";
        }
        break;

        case 2: 
        
        if(eleccionNumIA === 1){
            DOM.resultado.innerHTML = "Has ganado contra Piedra";
        } else if(eleccionNumIA === 3){
            DOM.resultado.innerHTML = "Has perdido contra Tijeras";
        } else {
            DOM.resultado.innerHTML = "Has empatado contra Papel";
        }
        break;

        case 3: 
        
        if(eleccionNumIA === 1){
            DOM.resultado.innerHTML = "Has perdido contra Piedra";
        } else if(eleccionNumIA === 2){
            DOM.resultado.innerHTML = "Has ganado contra Papel";
        } else {
            DOM.resultado.innerHTML = "Has empatado contra Tijeras";
        }
        break;

    }

}