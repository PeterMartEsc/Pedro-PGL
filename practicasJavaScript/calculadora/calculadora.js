const DOM = {
    tabla : document.getElementById("tabla"),
    input1 : document.getElementById("numero1"),
    input2 : document.getElementById("numero2"),
    operacion : document.getElementById("operacion"),
    operar : document.getElementById("boton")
}

function operar(){
    let resultado = "";

    let fila = document.createElement("tr");
    let columna = document.createElement("td");

    switch(DOM.operacion.value) {
        case "sumar":
          // code block
            break;
        case "restar":
          // code block
            break;
        case "multiplicar":
          // code block
            break;
        case "dividir":
          // code block
            break;
    }

    DOM.tabla.appendChild();
}