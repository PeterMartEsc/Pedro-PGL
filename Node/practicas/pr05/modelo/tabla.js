function getTabla(tabla){


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

exports.crearTabla = getTabla;

/*
Crear la aplicación descrita. El fichero: manejarTabla.js debe exportar un
método: escribir(nombreDelFichero, textoEscribir ) que tiene que devolver una promesa.
En el interior del método escribir() se llama a la función: fs.writeFileSync()
*/