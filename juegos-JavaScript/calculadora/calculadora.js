const DOM = {
    result : document.getElementById("resultado"),
    input1 : document.getElementById("numero1"),
    operacion : document.getElementById("operacion"),
    input2 : document.getElementById("numero2"),
    operar : document.getElementById("boton")
}

function calcular(){
    DOM.result.innerHTML="";

    let num1 = parseInt(DOM.input1.value);
    let num2 = parseInt(DOM.input2.value);
    
    let resultado;

    switch(DOM.operacion.value) {
        case "sumar":
          resultado = num1 + num2;
          break;
        case "restar":
          resultado = num1 - num2;
          break;
        case "multiplicar":
          resultado = num1 * num2;
          break;
        case "dividir":
          resultado = num1 / num2;
          break;
        default:
          resultado = "Operacion no valida";
    }

    DOM.result.innerHTML = resultado;
}