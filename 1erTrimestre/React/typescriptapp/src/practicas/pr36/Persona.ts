export default class Persona {
    public nombre: string;
    public apellido : string;
    public altura : number;
    public peso : number;
    public edad: number;
    public imc : number;

    constructor(){
        this.nombre = "No definido";
        this.apellido = "No definido";
        this.altura = 0;
        this.peso = 0;
        this.edad = 0;
        this.imc = 0;
    }

}