const DOM = {
    contenedorSup : document.getElementById("contenedorSuperior")
    //body: document.querySelector("body"),
    //Cuidado con querySelectorAll, por que devuelve un array con los elementos contenidos dentro

}




function crearCasillas(){
    let maximo = 9;
    DOM.contenedorSup.innerHTML="";

    for(let i = 1 ; i <= maximo; i++ ){

        let casilla = document.createElement("div");
        casilla.id="casilla"+$i;
        DOM.contenedorSup.appendChild(casilla);

        crearNumeroRandom();
    }

}

function crearNumeroRandom(){
    let veces=1;

    let arr = new int[maximo];

    for(let i = 1; i<Math.trunc(maximo/2);i++){
        

        
    }

}


function crearNumeroRandom2(){
    let maximo = 9;
    let arrSet = new Set();

    
}

