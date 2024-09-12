const DOM = {
    tabla : document.getElementById("tabla")
}

function generarTabla(){
    let maximo = 10;
    let numero = 2;
    let content = "";

    for(let i = 1; i<= maximo; i++){
        
        let elFila = document.createElement("tr");
        let elCol = document.createElement("td");
        elCol.innerHTML= numero + " * " + i + " = " + (i*numero);
        elFila.appendChild(elCol);
        DOM.tabla.appendChild(elFila);
    
    }
}

generarTabla()