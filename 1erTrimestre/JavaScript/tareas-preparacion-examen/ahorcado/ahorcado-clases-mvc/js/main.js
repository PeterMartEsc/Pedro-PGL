import { CrearJuego } from "./Juego.js";

const DOM = {
    boton : document.getElementById("boton"),
    letraApostada : document.getElementById("letraApostada"),
}

const crearJuego = new CrearJuego();

//console.log(crearJuego.escribirHuecos);

crearJuego.escribirHuecos();


DOM.boton.addEventListener("click", function() {
    const valor = DOM.letraApostada.value;
    crearJuego.escribirLetra(valor);
    DOM.letraApostada.value = "";  
});
