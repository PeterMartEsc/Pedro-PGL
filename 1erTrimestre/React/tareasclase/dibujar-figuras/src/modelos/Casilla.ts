export default class Casilla{
    public id : number;
    public isSelected : boolean = false;
    public contenido : string = "";
    constructor(id :number){
        this.id = id;
    }
}