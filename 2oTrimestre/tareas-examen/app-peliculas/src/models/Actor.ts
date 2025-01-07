export default class Actor {
    public id : number;
    public nombre : string;
    public apellidos : string;

    constructor(id : number, nombre : string, apellidos : string){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}