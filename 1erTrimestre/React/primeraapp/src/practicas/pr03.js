/*
Reproducir el ejemplo anterior, pero en lugar de mostrar números primos en el
<h1> dirá: “mis datos:” y en el h4 le habremos pasado un objeto literal JSON con tu
nombre, apellidos y estudios que estás realizando
*/

const ComponenteApp = () => {
    const primos = [2, 3, 5, 7];
    return (
        <>
            <h1>Primeros números primos:</h1>
            <h4>{JSON.stringify(primos)}</h4>
        </>
    );
}

export default ComponenteApp;