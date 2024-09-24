const DOM = {
    contenedorSup : document.getElementById("contenedorSuperior")
    //body: document.querySelector("body"),
    //Cuidado con querySelectorAll, por que devuelve un array con los elementos contenidos dentro

}




function crearCasillas(){
    let maximo = 9;
    let arrSet = new Set();
    DOM.contenedorSup.innerHTML="";

    for(let i = 0; i<4;i++){
        arrSet.add( Math.floor( Math.random(1,9) ) );
    }

    let arrayNoSet = Array.from(arrSet);


    for(let i = 1 ; i <= maximo; i++ ){

        let casilla = document.createElement("div");
        casilla.id="casilla"+$i;
        DOM.contenedorSup.appendChild(casilla);
    }

}


