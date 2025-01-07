import Actor from "./Actor";
import Categoria from "./Categoria";
import Director from "./Director";

export default class Pelicula {
    public id : string;
    public titulo : string;
    public year : number;
    public categorias : Array<Categoria>;
    public direccion : Array<Director>;
    public actores : Array<Actor>;
    public descripcion : string;
    public caratula : string;
    public trailer : string;


    constructor(id : string, titulo : string, year : number, categorias : Array<Categoria>, direccion : Array<Director>, 
                actores : Array<Actor>, descripcion : string, caratula : string, trailer : string){

        this.id = id;
        this.titulo = titulo;
        this.year = year;
        this.categorias = categorias;
        this.direccion = direccion;
        this.actores = actores;
        this.descripcion = descripcion;
        this.caratula = caratula;
        this.trailer = trailer;
    }

}