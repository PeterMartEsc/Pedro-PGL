import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('partida')
export default class Partida {
    @PrimaryGeneratedColumn() id : number;
    @Column('text') nombre : string; //fecha de creación
    @Column('text') contenido : string;
    @Column('boolean') terminada : boolean;
}