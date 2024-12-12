export default class Persona { 
    public id : number;
    public nombre : string;
    public altura : string;
    public peso : string;

    constructor (id : number, nombre : string, altura : string, peso: string){
        this.id = id;
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }   
}