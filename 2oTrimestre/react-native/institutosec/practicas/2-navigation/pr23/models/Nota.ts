export default class Nota {
    public id : number;
    public nombre : string;
    public contenido : string;
    public acabada: boolean;

    constructor(id : number, nombre : string, contenido : string, acabada : boolean) {
        this.id = id;
        this.nombre = nombre;
        this.contenido = contenido;
        this.acabada = acabada;
    }
}