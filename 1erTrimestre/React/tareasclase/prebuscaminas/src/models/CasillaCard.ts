export default class CasillaCard {
    public id : number;
    public bomba : boolean;
    public abierta : boolean;
    public marcada : boolean;

    public x : number;
    public y : number;

    constructor (id : number, x : number, y: number){
        this.id = id;
        this.bomba = false;
        this.abierta = false;
        this.marcada = false;
        
        this.x = x;
        this.y = y;
    }
}