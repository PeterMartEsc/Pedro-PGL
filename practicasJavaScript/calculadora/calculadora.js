const DOM = {
    result : document.getElementById("resultado"),
    input1 : document.getElementById("numero1"),
    input2 : document.getElementById("numero2"),
    operacion : document.getElementById("operacion"),
    operar : document.getElementById("boton")
}

function calcular(){
    DOM.result.innerHTML="";

    switch(DOM.operacion.value) {
        case "sumar":
          DOM.result.innerHTML = parseInt(DOM.input1.value) + parseInt(DOM.input2.value);
          break;
        case "restar":
          DOM.result.innerHTML = (DOM.input1.value) - (DOM.input2.value);;
          break;
        case "multiplicar":
          DOM.result.innerHTML = (DOM.input1.value) * (DOM.input2.value);;
          break;
        case "dividir":
          DOM.result.innerHTML = (DOM.input1.value) / (DOM.input2.value);;
          break;
    }
    
}