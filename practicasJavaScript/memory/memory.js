const DOM = {
    contenedorSup : document.getElementById("contenedorSuperior")
    //body: document.querySelector("body"),
    //Cuidado con querySelectorAll, por que devuelve un array con los elementos contenidos dentro

}




function crearCasillas(){
    let maximo = 9;
    DOM.contenedorSup.innerHTML="";

    for(let i = 1 ; i <= maximo; i++ ){

        let contenedor = document.createElement("div");
        contenedor.id="casilla";
        DOM.contenedorSup.appendChild(contenedor);

        //contenedor.innerHTML = ""+Math.round(1,9);
    }


    let arr = new int[maximo];
    for(let i = 0; i<Math.floor(maximo/2);i++){

        let numRandom = Math.round(Math.random(1,9));
        
        

        
    }

}


