const DOM = {   //Mayuscula por que es const
    tabla : document.getElementById("tabla"),
    input : document.getElementById("numeroTabla"),
    boton : document.getElementById("boton")
}

function generarTabla(){
    let maximo = 10;
    let resultado = "";

    DOM.tabla.innerHTML="";

    for(let i = 1; i<= maximo; i++){

        let elFila = document.createElement("tr");
        let elCol = document.createElement("td");

        resultado = i*DOM.input.value;

        elCol.innerHTML= DOM.input.value + " * " + i + " = " + (resultado);
        
        elFila.appendChild(elCol);
        DOM.tabla.appendChild(elFila);
    
    }
}

boton.addEventListener("click", generarTabla());



