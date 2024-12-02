export default class Pelicula {
    public id : number;
    public titulo : string;
    public direccion : string;
    public actores : string;
    public argumento : string;
    public imagen : string;

    constructor(id : number, titulo : string, direccion : string, actores : string, argumento : string, imagen : string){
        this.id = id;
        this.titulo = titulo;
        this.direccion = direccion;
        this.actores = actores;
        this.argumento = argumento;
        this.imagen = imagen;
    }

}