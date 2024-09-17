const DOM = {
    contenedorSup : document.getElementById("contenedorSuperior")
    //body: document.querySelector("body"),
    //Cuidado con querySelectorAll, por que devuelve un array con los elementos contenidos dentro

}

let contenedor = document.createElement("div");
contenedor.id="casilla";
DOM.contenedorSup.appendChild(contenedor);


function crearCasillas(){
    let maximo = 9;
    DOM.contenedorSup.innerHTML="";
    
    for(let i = 1 ; i <= maximo; i++ ){
    
        let contenedor = document.createElement("div")
        contenedor.className = "contenedor"+i;

        //contenedor.innerHTML = ""+Math.round(1,9);
        DOM.contenedorSup.appendChild(contenedor);
    }

}


