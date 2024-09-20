
/*(new Persona())
    .setNombre("Juan")
    .setApellido()
    .setEdad(30);

class Persona1{

        setNombre(nombre){
            this.nombre = nombre;
            return this;
        }

}*/

export class Persona{
    constructor(nom, ape, edad){ //Valor por defecto al crear una persona
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
    }

    showData(){
        return this.nombre + " " + this.apellido + " " + this.edad;
    }
}


