const DOM = {
    tabla : document.getElementById("tabla"),
    input : document.getElementById("numeroTabla"),
    boton : document.getElementById("boton")
}

function generarTabla(numero){
    let maximo = 10;
    let content = "";

    for(let i = 1; i<= maximo; i++){

        let elFila = document.createElement("tr");
        let elCol = document.createElement("td");
        elCol.innerHTML= numero + " * " + i + " = " + (i*numero);
        elFila.appendChild(elCol);
        DOM.tabla.appendChild(elFila);
    
    }
}

boton.addEventListener('click', () =>{

    let valorAlmacenado = input.value;

    if(valorAlmacenado === "" || valorAlmacenado == 2){
        generarTabla(2);
    }

    generarTabla(valorAlmacenado);
});

generarTabla(2);





