export default class Pelicula {
    public id : string;
    public titulo : string;
    public direccion : string;
    public actores : string;
    public argumento : string;
    public imagen : string;
    public categoria : string;

    constructor(id : string, titulo : string, direccion : string, actores : string, argumento : string, imagen : string, categoria : string){
        this.id = id;
        this.titulo = titulo;
        this.direccion = direccion;
        this.actores = actores;
        this.argumento = argumento;
        this.imagen = imagen;
        this.categoria = categoria;
    }

}