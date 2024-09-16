const DOM = {
    contenedorSup : document.getElementById("contenedorSuperior")

}

function crearNumerosCasillas(){
    let maximo = 9;
    let numero;

    DOM.contenedorSup.innerHTML="";

    
    for(let i = 1 ; i <= maximo; i++ ){
    
        let contenedor = document.createElement("div")
        contenedor.className = "contenedor"+i;

        contenedor.innerHTML = ""+Math.round(1,9);
        DOM.contenedorSup.appendChild(contenedor);
    }

}

function generarNumeros(){
    let hecho = 0;
    let comprobador = new int[8];

    do{

        let numRandom = Math.round(1,9);
        for(let i = 0 ; i <=8;i++){
            let veces = 0;
            if(comprobador[i]==numRandom){
                veces++
            }
        }


    } while (hecho == 0);
}

crearNumerosCasillas();

