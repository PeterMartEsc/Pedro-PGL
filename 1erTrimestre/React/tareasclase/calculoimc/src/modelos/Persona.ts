/**
 * @author Pedro Martin Escuela
 */

export default class Persona {

    public id: number;
    public nombre: string;
    public apellido : string;
    public altura : number;
    public peso : number;
    public edad: number;
    public imc : number;

    constructor(id : number){
        this.id = id;
        this.nombre = "No definido";
        this.apellido = "No definido";
        this.altura = 0;
        this.peso = 0;
        this.edad = 0;
        this.imc = 0;
    }

    public calculoImc(): number {
        this.imc = this.peso / (this.altura * this.altura)
        return this.imc;
    }

}