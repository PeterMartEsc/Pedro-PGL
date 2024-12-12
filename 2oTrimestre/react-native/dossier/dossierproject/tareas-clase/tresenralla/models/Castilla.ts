import cli from "@angular/cli";

export default class Casilla {
    public id : number;
    public clickada : boolean;
    public value : string;

    constructor(id : number, clickada : boolean, value : string) {
        this.id = id;
        this.clickada = clickada;
        this.value = value;
    }
}