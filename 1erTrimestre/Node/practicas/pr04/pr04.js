
const fs = require('fs');

function getTabla( tabla){

    let limite = 10;
    let respuesta =
`---------------------------
    TABLA DEL ${tabla}
---------------------------
`;

    for (let i = 1; i <= limite; i++) {
        respuesta += `${tabla} * ${i} = ${tabla * i} \n`;

    }
    return respuesta;
}

//writeFile() es asíncrono. Así que hay un callback

              //nombre del fichero //información a guardar
fs.writeFile('tabla.txt', getTabla(4), (err)=>{ //callback respuesta al finalizar
    
    if(err){
        //throw err;
        console.log("No se ha podido grabar");
    } else {
        console.log("se ha grabado");
    }

    }
);

/*
Crear la aplicación descrita, pero si hay un error no mostrarlo sino mostrar un
mensaje que diga que no se pudo grabar
*/